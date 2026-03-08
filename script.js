function download1() {
  const link = document.createElement("a");
  link.href = "Traducteur_Morse-v.1.0/Traducteur_Morse-v.1.0.exe";
  link.download = "Traducteur_Morse-v.1.0.exe";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function download2() {
  const link = document.createElement("a");
  link.href = "Traducteur_Morse-v.1.1/Traducteur_Morse-v.1.1.exe";
  link.download = "Traducteur_Morse-v.1.1.exe";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function download3() {
  const link = document.createElement("a");
  link.href = "Traducteur_Morse-v.1.2/Traducteur_Morse-v.1.2.exe";
  link.download = "Traducteur_Morse-v.1.2.exe";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const LOCALE_PATHS = {
  en: "/index.html",
  fr: "/fr/index.html",
  es: "/es/index.html",
  it: "/it/index.html",
  de: "/de/index.html"
};

function getCurrentLocale() {
  const path = window.location.pathname.toLowerCase();

  if (path.includes("/fr/")) {
    return "fr";
  }
  if (path.includes("/es/")) {
    return "es";
  }
  if (path.includes("/it/")) {
    return "it";
  }
  if (path.includes("/de/")) {
    return "de";
  }

  return "en";
}

function changeLanguage() {
  const languageSelect = document.getElementById("languageSelect");
  if (!languageSelect) {
    return;
  }

  const selectedLanguage = languageSelect.value;
  const destination = LOCALE_PATHS[selectedLanguage] || LOCALE_PATHS.en;
  window.location.href = destination;
}

document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("languageSelect");
  if (!languageSelect) {
    return;
  }

  languageSelect.value = getCurrentLocale();
});
