/*
Cette parte concernera les avis et le traitement des avis, ainsi que la gestion de la base de données Supabase pour les avis.
*/

const { createClient } = import('@supabase/supabase-js');

const supabase = createClient('https://vilnoaavchxxilffsfrn.supabase.co', process.env.SUPABASE_KEY);

// Charge les avis depuis Supabase
async function fetchReviews() {
  const { data, error } = await supabase
    .from("reviews")
    .select("*");

  if (error) {
    console.error("Erreur lors du chargement des avis :", error);
    return [];
  }

  return data;
}

// Sauvegarde un avis sur Supabase
async function saveReviewToServer(review) {
  const { error } = await supabase
    .from("reviews")
    .insert(review);

  if (error) {
    console.error("Erreur lors de l'envoi de l'avis :", error);
    return false;
  }

  return true;
}


// Fonction principale pour initialiser la page des avis
async function initReviewsPage(language) {
  const form = document.getElementById("reviewForm");
  const status = document.getElementById("reviewStatus");
  const list = document.getElementById("reviewList");

  if (!form || !status || !list) return;

  const reviews = await fetchReviews();
  renderReviews(reviews, language);

  if (form.dataset.initialized === "true") return;
  form.dataset.initialized = "true";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("reviewName");
    const rating = document.getElementById("reviewRating");
    const message = document.getElementById("reviewMessage");

    const nameValue = name?.value.trim();
    const ratingValue = rating?.value;
    const messageValue = message?.value.trim();

    const langNow = normalizeLanguage(document.documentElement.lang);
    const strings = I18N[langNow] || I18N.en;

    if (!nameValue || !ratingValue || !messageValue) {
      status.textContent = strings["reviews.statusError"];
      return;
    }

    const newReview = {
      id: crypto.randomUUID(),
      name: nameValue,
      rating: Number(ratingValue),
      message: messageValue,
      date: new Date().toISOString()
    };

    const updated = [newReview, ...(await fetchReviews())].slice(0, 20);
    await saveReviewToServer(newReview);

    status.textContent = strings["reviews.statusSuccess"];
    form.reset();
    renderReviews(updated, langNow);
  });
}
// Préparation de la fonction pour rendre les avis sur la page
function renderReviews(reviews, language) {
  const list = document.getElementById("reviewList");
  const empty = document.getElementById("reviewEmpty");
  if (!list || !empty) return;

  list.innerHTML = "";

  if (!reviews.length) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";
  const strings = I18N[language] || I18N.en;
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });


  for (const review of reviews) {
    const card = document.createElement("article");
    card.className = "review-card";

    const meta = document.createElement("p");
    meta.className = "review-meta";

    const dateText = review.date
      ? dateFormatter.format(new Date(review.date))
      : "";

    meta.textContent = `${strings["reviews.byline"]} ${review.name} ${strings["reviews.on"]} ${dateText} · ${strings["reviews.ratingText"]}: ${review.rating}/5`;

    const message = document.createElement("p");
    message.className = "review-message";
    message.textContent = review.message;

    card.appendChild(meta);
    card.appendChild(message);
    list.appendChild(card);
  }
}


/*
Cette partie concerne la gestion des langues et de l'internationalisation du site, ainsi que la détection de la langue de l'utilisateur et la mise à jour de l'interface en conséquence.
*/
const SUPPORTED_LANGUAGES = ["en", "fr", "es", "it", "de"];
var language_select = document.getElementById("languageSelect");

function applyTranslations() {
  if (language_select.value == "en") {
    document.location.href = document.location.pathname.replace(/\/(fr|es|it|de)\//, "/");
  } else if (language_select.value == "fr") {
    document.location.href = document.location.pathname.replace(/\/(en|es|it|de)\//, "/fr/");
  } else if (language_select.value == "es") {
    document.location.href = document.location.pathname.replace(/\/(en|fr|it|de)\//, "/es/");
  } else if (language_select.value == "it") {
    document.location.href = document.location.pathname.replace(/\/(en|fr|es|de)\//, "/it/");
  } else if (language_select.value == "de") {
    document.location.href = document.location.pathname.replace(/\/(en|fr|es|it)\//, "/de/");
  }
}


/*
Cette partie concerne la gestion des liens de téléchargement pour les différentes plateformes (Windows, Linux, macOS) et la mise à jour du lien de téléchargement en fonction de la sélection de l'utilisateur.
*/
const DOWNLOAD_PATHS = {
  windows: "latest/win/Kryptis_Setup_1.0.0.exe",
  linux: "latest/lin/",
  macos: "latest/mac/"
};


function updateDownloadLink() {
  const osSelect = document.getElementById("os");
  const downloadLink = document.getElementById("downloadLink");

  if (!osSelect || !downloadLink) return;

  const selectedOS = osSelect.value;
  let href = "";

  if(selectedOS==="windows") {
    href=DOWNLOAD_PATHS.windows;
  } else if (selectedOS === "linux") {
    href = DOWNLOAD_PATHS.linux;
  } else if(selectedOS==="macos") {
    href=DOWNLOAD_PATHS.macos;
  }

  downloadLink.href = href;
  downloadLink.setAttribute("download", "");
}

/*
Cette partie concerne l'envoie d'emails pour notifier l'administrateur du site lorsqu'un utilisateur accède au site depuis une IA, un logiciel ou un réseau social. Les informations supplémentaires sont également incluses dans l'email.
*/

function sendEmail(subject, body) {
  fetch("/.netlify/functions/mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      to: "joseph.rollo2011@gmail.com",
      subject: subject,
      body: body
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.success) {
        console.log("Email envoyé avec succès");
      } else {
        console.error("Erreur lors de l'envoi de l'email");
      }
    });
}

function prepareSource() {
  const now = new Date().toISOString();
  var urlParams=new URLSearchParams(window.location.search)
  var utm_source=urlParams.get("utm_source")
  var infos=urlParams.get("infos")
 
  if (window.history.includes("gemini.google.com")) {      utm_source="gemini.google.com"
  } else if (window.history.includes("copilot.microsoft.com")) {
    utm_source=utm_source || "copilot.microsoft.com";
  } else if (window.history.includes("claude.ai")) {
    utm_source=utm_source || "claude.ai"
  }
  document.cookie = "source=" + utm_source + "; path=/; max-age=" + (60*60*24*30);
  prepareEmails(utm_source, now, infos);
}

function prepareEmails(source, now, infos) {
  if (source && (source.includes("chatgpt.com") || source.includes("gemini.google.com") || source.includes("copilot.microsoft.com") || source.includes("claude.ai"))) {
    sendEmail(
      "Accès au site depuis une IA",
      `<p>Bonjour Joseph, un accès au site depuis une IA a été détecté le ${now}</p><br><p>Informations supplémentaires : ${infos}</p>`
    );
  } else if (source === "app") {
    sendEmail(
      "Accès au site depuis le logiciel",
      `<p>Bonjour Joseph, un accès au site depuis le logiciel a été détecté le ${now}</p><br><p>Informations supplémentaires : ${infos}</p>`
    );
  } else if (source === "teams" || source === "whatsapp") {
    sendEmail(
      "Accès au site depuis un réseau social",
      `<p>Bonjour Joseph, un accès au site depuis un réseau social a été détecté le ${now}</p><br><p>Informations supplémentaires : ${infos}</p>`
    );
  }
}

/*
Fonction principale pour initialiser le site, gérer les événements et les interactions avec l'utilisateur.
*/


document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();

  const osSelect = document.getElementById("os");
  if (osSelect) osSelect.addEventListener("change", updateDownloadLink);

  updateDownloadLink();
  initReviewsPage(initialLanguage);
  prepareSource();
  
  

});

// ── Bannière CGU ──
const CGU = "By using this website, you agree to the following terms and conditions: The Kryptis is provided as is without any warranties. The developer is not responsible for any damage or loss of data resulting from the use of this website.";

/*document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("cguAccepted")) {
    const lang = normalizeLanguage(document.documentElement.lang || "en");
    const strings = I18N[lang] || I18N.en;

    document.body.insertAdjacentHTML("afterbegin", `
      <div id="overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;backdrop-filter:blur(6px);background:rgba(0,0,0,0.6);display:flex;justify-content:center;align-items:center;z-index:9999;">
        <div id="popup" style="background:#1f2937;color:#fff;padding:24px;border-radius:12px;max-width:420px;text-align:center;">
          <h2>${strings["cgu.title"]}</h2>
          <p style="font-size:14px;color:#9ca3af;">${strings["cgu.description"]}</p>
          <button id="acceptCgu" style="margin:8px;padding:10px 24px;background:#0092F9;color:#fff;border:none;border-radius:20px;cursor:pointer;font-size:16px;">${strings["cgu.accept"]}</button>
          <button id="declineCgu" style="margin:8px;padding:10px 24px;background:#374151;color:#fff;border:none;border-radius:20px;cursor:pointer;font-size:16px;">${strings["cgu.decline"]}</button>
        </div>
      </div>
    `);

    document.getElementById("acceptCgu").addEventListener("click", () => {
      localStorage.setItem("cguAccepted", "true");
      document.getElementById("overlay").remove();
    });

    document.getElementById("declineCgu").addEventListener("click",() => {
      document.getElementById("overlay").remove();
    });
  }
});*/
