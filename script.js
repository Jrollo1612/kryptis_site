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

function getBasePath() {
  const path = window.location.pathname;
  return path.includes("/fr/") ? ".." : ".";
}

function changeLanguage() {
  const languageSelect = document.getElementById("languageSelect");
  const selectedLanguage = languageSelect.value;
  const base = getBasePath();

  if (selectedLanguage === "en") {
    window.location.href = `${base}/index.html`;
  } else if (selectedLanguage === "fr") {
    window.location.href = `${base}/fr/index.html`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("languageSelect");
  if (!languageSelect) {
    return;
  }

  const currentPath = window.location.pathname.toLowerCase();
  languageSelect.value = currentPath.includes("/fr/") ? "fr" : "en";
});
