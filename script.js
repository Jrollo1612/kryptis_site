const SUPPORTED_LANGUAGES = ["en", "fr", "es", "it", "de"];

const I18N = {
  en: {
    "page.title": "Morse Translator Download for Windows, Linux and macOS",
    "meta.description": "Download Morse Translator for Windows, Linux and macOS. Translate text to Morse code and Morse to text with automatic translation support.",
    "meta.keywords": "morse translator, morse code, text to morse, morse to text, download",
    "og.title": "Morse Translator Download for Windows, Linux and macOS",
    "og.description": "Translate text to Morse code and Morse to text. Download Morse Translator versions for desktop.",
    "og.locale": "en_US",
    "og.siteName": "Morse Translator",
    "twitter.title": "Morse Translator Download",
    "twitter.description": "Download Morse Translator and convert text and Morse code quickly.",
    "nav.label": "Language selector",
    "nav.selectLabel": "Select language",
    "mainNav.label": "Main navigation",
    "mainNav.home": "Home",
    "mainNav.download": "Download",
    "mainNav.reviews": "Reviews",
    "header.title": "Morse Translator",
    "about.title": "About the app",
    "about.welcome": "Welcome to Morse Translator.",
    "about.line1": "This tool translates text into Morse code and Morse code back to text.",
    "about.line2": "In the app, write text in the right panel and it is automatically translated. To type Morse, write \"/\" to show a 4-symbol Morse keyboard.",
    "about.description": "Morse Translator is a simple desktop application that allows you to translate text to Morse code and vice versa.",
    "home.ctaDownload": "Go to downloads",
    "home.ctaReviews": "See reviews",
    "downloads.title": "Download Morse Translator",
    "downloads.latest": "Version 1.3 (Latest)",
    "downloads.line1": "The latest version of Morse Translator is now available for Windows, Linux, and macOS*.",
    "downloads.comingSoon": "Coming soon!",
    "downloads.osLabel": "Operating system",
    "downloads.typeLabel": "Installer type",
    "downloads.os.windows": "Windows",
    "downloads.os.linux": "Linux",
    "downloads.os.macos": "macOS",
    "downloads.type.setup": "Setup",
    "downloads.type.portable": "Portable",
    "downloads.button": "Download",
    "downloads.note": "* The macOS version hadn't been tested, so it may not work as expected. If you encounter any issues, please let me know via email in the contact section.",
    "reviews.link": "Read and leave a review",
    "reviews.pageTitle": "Morse Translator Reviews",
    "reviews.metaDescription": "Read and leave reviews about Morse Translator.",
    "reviews.ogTitle": "Morse Translator Reviews",
    "reviews.ogDescription": "Share your experience with Morse Translator.",
    "reviews.twitterTitle": "Morse Translator Reviews",
    "reviews.twitterDescription": "Read and leave reviews about Morse Translator.",
    "reviews.title": "Reviews",
    "reviews.subtitle": "Share your experience",
    "reviews.notice": "Reviews are stored in your browser only. They are not published online.",
    "reviews.formTitle": "Leave a review",
    "reviews.nameLabel": "Name",
    "reviews.ratingLabel": "Rating",
    "reviews.messageLabel": "Message",
    "reviews.submit": "Submit review",
    "reviews.listTitle": "Latest reviews",
    "reviews.empty": "No reviews yet. Be the first to leave one.",
    "reviews.back": "Back to download page",
    "reviews.statusSuccess": "Thank you! Your review was saved on this device.",
    "reviews.statusError": "Please fill in all fields.",
    "reviews.ratingText": "Rating",
    "reviews.byline": "By",
    "reviews.on": "on",
    "project.infoLabel": "Project information:",
    "project.readme": "GitHub README",
    "footer.copyright": "Copyright © 2026 Joseph Rollo. All rights reserved.",
    "footer.github": "My GitHub",
    "footer.reviews": "Reviews",
    "footer.home": "Home",
    "footer.contact": "Contact",
    "footer.emailLabel": "Email:"
  },
  fr: {
    "page.title": "Télécharger Traducteur Morse pour Windows, Linux et macOS",
    "meta.description": "Téléchargez Traducteur Morse pour Windows, Linux et macOS. Traduisez du texte en code Morse et du Morse en texte automatiquement.",
    "meta.keywords": "traducteur morse, code morse, texte vers morse, morse vers texte, téléchargement",
    "og.title": "Télécharger Traducteur Morse pour Windows, Linux et macOS",
    "og.description": "Traduisez du texte en Morse et du Morse en texte. Téléchargez les versions desktop de Traducteur Morse.",
    "og.locale": "fr_FR",
    "og.siteName": "Traducteur Morse",
    "twitter.title": "Téléchargement Traducteur Morse",
    "twitter.description": "Téléchargez Traducteur Morse et convertissez facilement texte et code Morse.",
    "nav.label": "Sélecteur de langue",
    "nav.selectLabel": "Choisir la langue",
    "mainNav.label": "Navigation principale",
    "mainNav.home": "Accueil",
    "mainNav.download": "Télécharger",
    "mainNav.reviews": "Avis",
    "header.title": "Traducteur Morse",
    "about.title": "À propos de l'application",
    "about.welcome": "Bienvenue sur Traducteur Morse.",
    "about.line1": "Cet outil traduit le texte en code Morse et le code Morse en texte.",
    "about.line2": "Dans l'application, écrivez votre texte dans le panneau de droite pour une traduction automatique. Pour écrire en Morse, tapez \"/\" pour afficher un clavier Morse à 4 symboles.",
    "about.description": "Traducteur Morse est une application de bureau simple qui permet de traduire du texte en code Morse et inversement.",
    "home.ctaDownload": "Accéder aux téléchargements",
    "home.ctaReviews": "Voir les avis",
    "downloads.title": "Télécharger Traducteur Morse",
    "downloads.latest": "Version 1.3 (Dernière)",
    "downloads.line1": "La dernière version de Traducteur Morse est maintenant disponible pour Windows, Linux et macOS*.",
    "downloads.comingSoon": "Bientôt disponible !",
    "downloads.osLabel": "Système d'exploitation",
    "downloads.typeLabel": "Type d'installation",
    "downloads.os.windows": "Windows",
    "downloads.os.linux": "Linux",
    "downloads.os.macos": "macOS",
    "downloads.type.setup": "Installation",
    "downloads.type.portable": "Portable",
    "downloads.button": "Télécharger",
    "downloads.note": "* La version macOS n'a pas été testée, elle peut donc ne pas fonctionner comme prévu. Si vous rencontrez des problèmes, merci de me contacter par e-mail dans la section contact.",
    "reviews.link": "Lire et laisser un avis",
    "reviews.pageTitle": "Avis sur Traducteur Morse",
    "reviews.metaDescription": "Lisez et laissez des avis sur Traducteur Morse.",
    "reviews.ogTitle": "Avis sur Traducteur Morse",
    "reviews.ogDescription": "Partagez votre expérience avec Traducteur Morse.",
    "reviews.twitterTitle": "Avis sur Traducteur Morse",
    "reviews.twitterDescription": "Lisez et laissez des avis sur Traducteur Morse.",
    "reviews.title": "Avis",
    "reviews.subtitle": "Partagez votre expérience",
    "reviews.notice": "Les avis sont stockés uniquement dans votre navigateur. Ils ne sont pas publiés en ligne.",
    "reviews.formTitle": "Laisser un avis",
    "reviews.nameLabel": "Nom",
    "reviews.ratingLabel": "Note",
    "reviews.messageLabel": "Message",
    "reviews.submit": "Envoyer l'avis",
    "reviews.listTitle": "Derniers avis",
    "reviews.empty": "Aucun avis pour le moment. Soyez le premier à en laisser un.",
    "reviews.back": "Retour à la page de téléchargement",
    "reviews.statusSuccess": "Merci ! Votre avis a été enregistré sur cet appareil.",
    "reviews.statusError": "Merci de remplir tous les champs.",
    "reviews.ratingText": "Note",
    "reviews.byline": "Par",
    "reviews.on": "le",
    "project.infoLabel": "Informations sur le projet :",
    "project.readme": "GitHub README",
    "footer.copyright": "Copyright © 2026 Joseph Rollo. Tous droits réservés.",
    "footer.github": "Mon GitHub",
    "footer.reviews": "Avis",
    "footer.home": "Accueil",
    "footer.contact": "Contact",
    "footer.emailLabel": "Email :"
  },
  es: {
    "page.title": "Descargar Morse Translator para Windows, Linux y macOS",
    "meta.description": "Descarga Morse Translator para Windows, Linux y macOS. Traduce texto a código Morse y Morse a texto automáticamente.",
    "meta.keywords": "traductor morse, código morse, texto a morse, morse a texto, descarga",
    "og.title": "Descargar Morse Translator para Windows, Linux y macOS",
    "og.description": "Traduce texto a Morse y Morse a texto. Descarga versiones de escritorio de Morse Translator.",
    "og.locale": "es_ES",
    "og.siteName": "Morse Translator",
    "twitter.title": "Descarga Morse Translator",
    "twitter.description": "Descarga Morse Translator y convierte texto y código Morse fácilmente.",
    "nav.label": "Selector de idioma",
    "nav.selectLabel": "Seleccionar idioma",
    "mainNav.label": "Navegación principal",
    "mainNav.home": "Inicio",
    "mainNav.download": "Descargar",
    "mainNav.reviews": "Reseñas",
    "header.title": "Traductor Morse",
    "about.title": "Sobre la aplicación",
    "about.welcome": "Bienvenido a Morse Translator.",
    "about.line1": "Esta herramienta traduce texto a código Morse y código Morse a texto.",
    "about.line2": "En la aplicación, escribe texto en el panel derecho y se traducirá automáticamente. Para escribir en Morse, escribe \"/\" para mostrar un teclado Morse de 4 símbolos.",
    "about.description": "Morse Translator es una aplicación de escritorio sencilla que permite traducir texto a código Morse y viceversa.",
    "home.ctaDownload": "Ir a descargas",
    "home.ctaReviews": "Ver reseñas",
    "downloads.title": "Descargar Morse Translator",
    "downloads.latest": "Versión 1.3 (Última)",
    "downloads.line1": "La última versión de Morse Translator ahora está disponible para Windows, Linux y macOS*.",
    "downloads.comingSoon": "¡Próximamente!",
    "downloads.osLabel": "Sistema operativo",
    "downloads.typeLabel": "Tipo de instalador",
    "downloads.os.windows": "Windows",
    "downloads.os.linux": "Linux",
    "downloads.os.macos": "macOS",
    "downloads.type.setup": "Instalación",
    "downloads.type.portable": "Portátil",
    "downloads.button": "Descargar",
    "downloads.note": "* La versión de macOS no ha sido probada, por lo que puede no funcionar como se espera. Si tienes algún problema, por favor avísame por correo en la sección de contacto.",
    "reviews.link": "Leer y dejar una reseña",
    "reviews.pageTitle": "Reseñas de Morse Translator",
    "reviews.metaDescription": "Lee y deja reseñas sobre Morse Translator.",
    "reviews.ogTitle": "Reseñas de Morse Translator",
    "reviews.ogDescription": "Comparte tu experiencia con Morse Translator.",
    "reviews.twitterTitle": "Reseñas de Morse Translator",
    "reviews.twitterDescription": "Lee y deja reseñas sobre Morse Translator.",
    "reviews.title": "Reseñas",
    "reviews.subtitle": "Comparte tu experiencia",
    "reviews.notice": "Las reseñas se guardan solo en tu navegador. No se publican en línea.",
    "reviews.formTitle": "Deja una reseña",
    "reviews.nameLabel": "Nombre",
    "reviews.ratingLabel": "Puntuación",
    "reviews.messageLabel": "Mensaje",
    "reviews.submit": "Enviar reseña",
    "reviews.listTitle": "Reseñas recientes",
    "reviews.empty": "Aún no hay reseñas. Sé el primero en dejar una.",
    "reviews.back": "Volver a la página de descarga",
    "reviews.statusSuccess": "Gracias. Tu reseña se guardó en este dispositivo.",
    "reviews.statusError": "Por favor completa todos los campos.",
    "reviews.ratingText": "Puntuación",
    "reviews.byline": "Por",
    "reviews.on": "el",
    "project.infoLabel": "Información del proyecto:",
    "project.readme": "GitHub README",
    "footer.copyright": "Copyright © 2026 Joseph Rollo. Todos los derechos reservados.",
    "footer.github": "Mi GitHub",
    "footer.reviews": "Reseñas",
    "footer.home": "Inicio",
    "footer.contact": "Contacto",
    "footer.emailLabel": "Email:"
  },
  it: {
    "page.title": "Scarica Morse Translator per Windows, Linux e macOS",
    "meta.description": "Scarica Morse Translator per Windows, Linux e macOS. Traduci testo in codice Morse e Morse in testo automaticamente.",
    "meta.keywords": "traduttore morse, codice morse, testo in morse, morse in testo, download",
    "og.title": "Scarica Morse Translator per Windows, Linux e macOS",
    "og.description": "Traduci testo in Morse e Morse in testo. Scarica le versioni desktop di Morse Translator.",
    "og.locale": "it_IT",
    "og.siteName": "Morse Translator",
    "twitter.title": "Download Morse Translator",
    "twitter.description": "Scarica Morse Translator e converti facilmente testo e codice Morse.",
    "nav.label": "Selettore lingua",
    "nav.selectLabel": "Seleziona lingua",
    "mainNav.label": "Navigazione principale",
    "mainNav.home": "Home",
    "mainNav.download": "Download",
    "mainNav.reviews": "Recensioni",
    "header.title": "Traduttore Morse",
    "about.title": "Informazioni sull'app",
    "about.welcome": "Benvenuto in Morse Translator.",
    "about.line1": "Questo strumento traduce testo in codice Morse e codice Morse in testo.",
    "about.line2": "Nell'app, scrivi il testo nel pannello di destra e verrà tradotto automaticamente. Per scrivere in Morse, digita \"/\" per mostrare una tastiera Morse con 4 simboli.",
    "about.description": "Morse Translator e' una semplice applicazione desktop che consente di tradurre testo in codice Morse e viceversa.",
    "home.ctaDownload": "Vai ai download",
    "home.ctaReviews": "Vedi recensioni",
    "downloads.title": "Scarica Morse Translator",
    "downloads.latest": "Versione 1.3 (Ultima)",
    "downloads.line1": "L'ultima versione di Morse Translator è ora disponibile per Windows, Linux e macOS*.",
    "downloads.comingSoon": "In arrivo!",
    "downloads.osLabel": "Sistema operativo",
    "downloads.typeLabel": "Tipo di installazione",
    "downloads.os.windows": "Windows",
    "downloads.os.linux": "Linux",
    "downloads.os.macos": "macOS",
    "downloads.type.setup": "Installazione",
    "downloads.type.portable": "Portatile",
    "downloads.button": "Scarica",
    "downloads.note": "* La versione macOS non è stata testata, quindi potrebbe non funzionare come previsto. Se riscontri problemi, fammelo sapere via email nella sezione contatto.",
    "reviews.link": "Leggi e lascia una recensione",
    "reviews.pageTitle": "Recensioni di Morse Translator",
    "reviews.metaDescription": "Leggi e lascia recensioni su Morse Translator.",
    "reviews.ogTitle": "Recensioni di Morse Translator",
    "reviews.ogDescription": "Condividi la tua esperienza con Morse Translator.",
    "reviews.twitterTitle": "Recensioni di Morse Translator",
    "reviews.twitterDescription": "Leggi e lascia recensioni su Morse Translator.",
    "reviews.title": "Recensioni",
    "reviews.subtitle": "Condividi la tua esperienza",
    "reviews.notice": "Le recensioni sono salvate solo nel tuo browser. Non vengono pubblicate online.",
    "reviews.formTitle": "Lascia una recensione",
    "reviews.nameLabel": "Nome",
    "reviews.ratingLabel": "Valutazione",
    "reviews.messageLabel": "Messaggio",
    "reviews.submit": "Invia recensione",
    "reviews.listTitle": "Recensioni recenti",
    "reviews.empty": "Nessuna recensione ancora. Sii il primo a lasciarne una.",
    "reviews.back": "Torna alla pagina di download",
    "reviews.statusSuccess": "Grazie. La tua recensione è stata salvata su questo dispositivo.",
    "reviews.statusError": "Per favore compila tutti i campi.",
    "reviews.ratingText": "Valutazione",
    "reviews.byline": "Da",
    "reviews.on": "il",
    "project.infoLabel": "Informazioni sul progetto:",
    "project.readme": "GitHub README",
    "footer.copyright": "Copyright © 2026 Joseph Rollo. Tutti i diritti riservati.",
    "footer.github": "Il mio GitHub",
    "footer.reviews": "Recensioni",
    "footer.home": "Home",
    "footer.contact": "Contatto",
    "footer.emailLabel": "Email:"
  },
  de: {
    "page.title": "Morse Translator für Windows, Linux und macOS herunterladen",
    "meta.description": "Lade Morse Translator für Windows, Linux und macOS herunter. Übersetze Text in Morsecode und Morsecode in Text mit automatischer Übersetzung.",
    "meta.keywords": "morse übersetzer, morsecode, text zu morse, morse zu text, download",
    "og.title": "Morse Translator für Windows, Linux und macOS herunterladen",
    "og.description": "Übersetze Text in Morse und Morse in Text. Lade die Desktop-Versionen von Morse Translator herunter.",
    "og.locale": "de_DE",
    "og.siteName": "Morse Translator",
    "twitter.title": "Morse Translator Download",
    "twitter.description": "Lade Morse Translator herunter und konvertiere Text und Morsecode einfach.",
    "nav.label": "Sprachauswahl",
    "nav.selectLabel": "Sprache auswählen",
    "mainNav.label": "Hauptnavigation",
    "mainNav.home": "Startseite",
    "mainNav.download": "Download",
    "mainNav.reviews": "Bewertungen",
    "header.title": "Morse-Übersetzer",
    "about.title": "Über die App",
    "about.welcome": "Willkommen bei Morse Translator.",
    "about.line1": "Dieses Tool übersetzt Text in Morsecode und Morsecode zurück in Text.",
    "about.line2": "Schreibe in der App deinen Text in das rechte Feld, dann wird er automatisch übersetzt. Um Morse zu tippen, gib \"/\" ein, um eine Morse-Tastatur mit 4 Symbolen anzuzeigen.",
    "about.description": "Morse Translator ist eine einfache Desktop-Anwendung, mit der du Text in Morsecode und zurueck uebersetzen kannst.",
    "home.ctaDownload": "Zu den Downloads",
    "home.ctaReviews": "Bewertungen ansehen",
    "downloads.title": "Morse Translator herunterladen",
    "downloads.latest": "Version 1.3 (Neueste)",
    "downloads.line1": "Die neueste Version von Morse Translator ist jetzt für Windows, Linux und macOS* verfügbar.",
    "downloads.comingSoon": "Kommt bald!",
    "downloads.osLabel": "Betriebssystem",
    "downloads.typeLabel": "Installationsart",
    "downloads.os.windows": "Windows",
    "downloads.os.linux": "Linux",
    "downloads.os.macos": "macOS",
    "downloads.type.setup": "Installation",
    "downloads.type.portable": "Portabel",
    "downloads.button": "Herunterladen",
    "downloads.note": "* Die macOS-Version wurde nicht getestet und funktioniert daher möglicherweise nicht wie erwartet. Wenn du Probleme bemerkst, melde dich bitte per E-Mail im Kontaktbereich.",
    "reviews.link": "Bewertung lesen und schreiben",
    "reviews.pageTitle": "Morse Translator Bewertungen",
    "reviews.metaDescription": "Lies und schreibe Bewertungen zu Morse Translator.",
    "reviews.ogTitle": "Morse Translator Bewertungen",
    "reviews.ogDescription": "Teile deine Erfahrung mit Morse Translator.",
    "reviews.twitterTitle": "Morse Translator Bewertungen",
    "reviews.twitterDescription": "Lies und schreibe Bewertungen zu Morse Translator.",
    "reviews.title": "Bewertungen",
    "reviews.subtitle": "Teile deine Erfahrung",
    "reviews.notice": "Bewertungen werden nur in deinem Browser gespeichert. Sie werden nicht online veroeffentlicht.",
    "reviews.formTitle": "Bewertung schreiben",
    "reviews.nameLabel": "Name",
    "reviews.ratingLabel": "Bewertung",
    "reviews.messageLabel": "Nachricht",
    "reviews.submit": "Bewertung senden",
    "reviews.listTitle": "Neueste Bewertungen",
    "reviews.empty": "Noch keine Bewertungen. Sei der Erste.",
    "reviews.back": "Zurueck zur Download-Seite",
    "reviews.statusSuccess": "Danke. Deine Bewertung wurde auf diesem Geraet gespeichert.",
    "reviews.statusError": "Bitte fuelle alle Felder aus.",
    "reviews.ratingText": "Bewertung",
    "reviews.byline": "Von",
    "reviews.on": "am",
    "project.infoLabel": "Projektinformationen:",
    "project.readme": "GitHub README",
    "footer.copyright": "Copyright © 2026 Joseph Rollo. Alle Rechte vorbehalten.",
    "footer.github": "Mein GitHub",
    "footer.reviews": "Bewertungen",
    "footer.home": "Startseite",
    "footer.contact": "Kontakt",
    "footer.emailLabel": "E-Mail:"
  }
};

const DOWNLOAD_PATHS = {
  windows: {
    setup: "Traducteur_Morse-v.1.3-win/Traducteur_Morse-v.1.3-win-setup.exe",
    p: "Traducteur_Morse-v.1.3-win/Traducteur_Morse-v.1.3-win-p.exe"
  },
  linux: {
    app: "Traducteur_Morse-v.1.3-linux/Traducteur_Morse-v.1.3-linux.AppImage"
  },
  macos: {
    app: "Traducteur_Morse-v.1.3-macos/traducteur_morse_2"
  }
};

const REVIEW_STORAGE_KEY = "morseTranslatorReviews";

function normalizeLanguage(lang) {
  if (!lang) {
    return "en";
  }
  const normalized = lang.toLowerCase().split("-")[0];
  return SUPPORTED_LANGUAGES.includes(normalized) ? normalized : "en";
}

function getLanguageFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang");
  if (!urlLang) {
    return null;
  }
  return normalizeLanguage(urlLang);
}

function getStoredLanguage() {
  const stored = localStorage.getItem("preferredLanguage");
  if (!stored) {
    return null;
  }
  return normalizeLanguage(stored);
}

function applyTranslations(language) {
  const strings = I18N[language] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = strings[key];
    if (!value) {
      return;
    }

    const attr = element.dataset.i18nAttr;
    if (attr) {
      attr.split(",").forEach((attrName) => {
        const trimmed = attrName.trim();
        if (trimmed) {
          element.setAttribute(trimmed, value);
        }
      });
      return;
    }

    element.textContent = value;
  });
}

function updateSeoForLanguage(language) {
  const robotsMeta = document.getElementById("robotsMeta");
  const canonicalLink = document.getElementById("canonicalLink");

  if (robotsMeta) {
    if (language === "en") {
      robotsMeta.setAttribute(
        "content",
        "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
      );
    } else {
      robotsMeta.setAttribute("content", "noindex,follow");
    }
  }

  if (canonicalLink) {
    let path = window.location.pathname || "/home.html";
    if (path === "/") {
      path = "/home.html";
    }
    canonicalLink.setAttribute("href", path);
  }
}

function setLanguage(language, options = {}) {
  const normalized = normalizeLanguage(language);
  const updateUrl = options.updateUrl !== false;

  document.documentElement.lang = normalized;
  localStorage.setItem("preferredLanguage", normalized);
  applyTranslations(normalized);
  updateSeoForLanguage(normalized);

  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.value = normalized;
  }

  if (updateUrl) {
    const url = new URL(window.location.href);
    if (normalized === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", normalized);
    }
    window.history.replaceState({}, "", url.toString());
  }
}

function updateDownloadLink() {
  const osSelect = document.getElementById("os");
  const typeSelect = document.getElementById("type");
  const downloadLink = document.getElementById("downloadLink");

  if (!osSelect || !typeSelect || !downloadLink) {
    return;
  }

  const selectedOS = osSelect.value;
  const selectedType = typeSelect.value;
  let href = "";

  if (selectedOS === "windows") {
    href = DOWNLOAD_PATHS.windows[selectedType] || DOWNLOAD_PATHS.windows.setup;
    typeSelect.disabled = false;
  } else if (selectedOS === "linux") {
    href = DOWNLOAD_PATHS.linux.app;
    typeSelect.disabled = true;
  } else if (selectedOS === "macos") {
    href = DOWNLOAD_PATHS.macos.app;
    typeSelect.disabled = true;
  }

  downloadLink.href = href;
  downloadLink.setAttribute("download", "");
}

function loadReviews() {
  try {
    const raw = localStorage.getItem(REVIEW_STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveReviews(reviews) {
  localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviews));
}

function renderReviews(reviews, language) {
  const list = document.getElementById("reviewList");
  const empty = document.getElementById("reviewEmpty");
  if (!list || !empty) {
    return;
  }

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

  reviews.forEach((review) => {
    const card = document.createElement("article");
    card.className = "review-card";

    const meta = document.createElement("p");
    meta.className = "review-meta";
    const dateText = review.date ? dateFormatter.format(new Date(review.date)) : "";
    meta.textContent = `${strings["reviews.byline"]} ${review.name} ${strings["reviews.on"]} ${dateText} · ${strings["reviews.ratingText"]}: ${review.rating}/5`;

    const message = document.createElement("p");
    message.className = "review-message";
    message.textContent = review.message;

    card.appendChild(meta);
    card.appendChild(message);
    list.appendChild(card);
  });
}

function initReviewsPage(language) {
  const form = document.getElementById("reviewForm");
  const status = document.getElementById("reviewStatus");
  const list = document.getElementById("reviewList");
  if (!form || !status || !list) {
    return;
  }

  const reviews = loadReviews();
  renderReviews(reviews, language);

  if (form.dataset.initialized === "true") {
    return;
  }

  form.dataset.initialized = "true";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("reviewName");
    const rating = document.getElementById("reviewRating");
    const message = document.getElementById("reviewMessage");

    const nameValue = name ? name.value.trim() : "";
    const ratingValue = rating ? rating.value : "";
    const messageValue = message ? message.value.trim() : "";

    const languageNow = normalizeLanguage(document.documentElement.lang);
    const strings = I18N[languageNow] || I18N.en;

    if (!nameValue || !ratingValue || !messageValue) {
      status.textContent = strings["reviews.statusError"];
      return;
    }

    const updated = [
      {
        name: nameValue,
        rating: Number(ratingValue),
        message: messageValue,
        date: new Date().toISOString()
      },
      ...loadReviews()
    ].slice(0, 20);

    saveReviews(updated);
    status.textContent = strings["reviews.statusSuccess"];
    form.reset();
    renderReviews(updated, languageNow);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const initialLanguage = normalizeLanguage(
    getLanguageFromUrl() || getStoredLanguage() || navigator.language
  );

  setLanguage(initialLanguage, { updateUrl: true });

  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
      setLanguage(event.target.value, { updateUrl: true });
      initReviewsPage(event.target.value);
    });
  }

  const osSelect = document.getElementById("os");
  const typeSelect = document.getElementById("type");

  if (osSelect) {
    osSelect.addEventListener("change", updateDownloadLink);
  }

  if (typeSelect) {
    typeSelect.addEventListener("change", updateDownloadLink);
  }

  updateDownloadLink();
  initReviewsPage(initialLanguage);
});
