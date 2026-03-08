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
function changeLanguage() {
  const languageSelect = document.getElementById("languageSelect");
  const selectedLanguage = languageSelect.value;
  if (selectedLanguage === "en") {
    window.location.href = "/index.html";
  } else if (selectedLanguage === "fr") {
    window.location.href = "/fr/index.html";
  }
}
document.addEventListener("DOMContentLoaded", function() {
  const languageSelect = document.getElementById("languageSelect");
  const currentPath = window.location.pathname;
  if (currentPath === "index.html" || currentPath === "/index.html") {
    languageSelect.value = "en";
    document.getElementById("languageSelect").value = "en";
  } else if (currentPath === "fr/index.html" || currentPath === "/fr/index.html") {
    languageSelect.value = "fr";
    document.getElementById("languageSelect").value = "fr";
  }
});