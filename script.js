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
