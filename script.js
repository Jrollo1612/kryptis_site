// ── Chargement de l'IP via ipinfo (dynamique, sans balise HTML dans le JS) ──
(function () {
  const script = document.createElement("script");
  script.src = "https://ipinfo.io/json?callback=handleIP";
  document.head.appendChild(script);
})();

function handleIP(data) {
  window.UserIP = data;
}

const SUPPORTED_LANGUAGES = ["en", "fr", "es", "it", "de"];



const SITE_VERSION = "2.0";
const savedVersion = localStorage.getItem("siteVersion");
const REVIEW_STORAGE_KEY = "morseTranslatorReviews";
const SENT_REVIEWS_KEY = "sentReviewsIds";

if (savedVersion !== SITE_VERSION) {
  localStorage.removeItem(REVIEW_STORAGE_KEY);
  localStorage.setItem("siteVersion", SITE_VERSION);
}

const I18N = {
  en: {
    "page.title": "Code Translator Download for Windows, Linux and macOS",
    "home.pageTitle": "Code Translator: Home",
    "home.metaDescription": "Discover Code Translator: online and offline tools to translate text to various codes and codes to text.",
    "home.metaKeywords": "code translator, codes, online translator, desktop app, download",
    "home.ogTitle": "Code Translator",
    "home.ogDescription": "Discover Code Translator, a free tool for translating text and various codes with online and desktop versions.",
    "online.pageTitle": "Online Code Translator",
    "online.metaDescription": "Use the online Code Translator to convert text and various codes instantly in your browser.",
    "online.metaKeywords": "online code translator, codes, text to codes, codes to text, browser translator",
    "online.ogTitle": "Online Code Translator",
    "online.ogDescription": "Translate text to various codes and codes to text directly online, without installing anything.",
    "download.pageTitle": "Download Code Translator",
    "download.metaDescription": "Download Code Translator desktop versions for Windows, Linux, and macOS.",
    "download.metaKeywords": "code translator download, code desktop app, windows linux macos",
    "download.ogTitle": "Download Code Translator",
    "download.ogDescription": "Get Code Translator for Windows, Linux, and macOS and translate text to various codes offline.",
    "meta.description": "Download Code Translator for Windows, Linux and macOS. Translate text to various codes and codes to text with automatic translation support.",
    "meta.keywords": "code translator, codes, text to codes, codes to text, download, code, translator",
    "og.title": "Code Translator Download for Windows, Linux and macOS",
    "og.description": "Translate text to various codes and codes to text. Download Code Translator versions for desktop.",
    "og.locale": "en_US",
    "og.siteName": "Code Translator",
    "all.copyError": "Copying is not allowed.",
    "twitter.title": "Code Translator Download",
    "twitter.description": "Download Code Translator and convert text and various codes quickly.",
    "nav.label": "Language selector",
    "nav.selectLabel": "Select language",
    "mainNav.label": "Main navigation",
    "mainNav.home": "Home",
    "mainNav.online": "Online Translator",
    "mainNav.download": "Download",
    "mainNav.reviews": "Rate & Reviews",
    "header.title": "Kryptis - Home",
    "header.logoText": "Kryptis",
    "about.title": "About the app",
    "about.welcome": "Welcome to Code Translator.",
    "about.line1": "This tool translates text into various codes and codes back to text.",
    "about.line2": "In the app, write text in the right panel and it is automatically translated. To type codes, write \"/\" to show a 4-symbol code keyboard.",
    "about.description": "Code Translator is a simple desktop application that allows you to translate text to various codes and vice versa.",
    "home.ctaDownload": "Go to downloads and install the offline software!",
    "home.ctaOnline": "Use online translator directly on the website!",
    "home.ctaReviews": "See reviews!",
    "home.whyTitle": "Why use my Code Translator?",
    "home.why1": "Code Translator is a free and open-source project, which means that you can use it without any cost and even contribute to its development if you want.",
    "home.advantages": "4 Key Advantages:",
    "home.advantage1Title": "No pubs!",
    "home.advantage1Desc": "The code translator is a free project, which means you can use it without any cost.",
    "home.advantage2Title": "Fast and accurate translation",
    "home.advantage2Desc": "The app provides fast and accurate translations between text and various codes, ensuring that your messages are correctly encoded or decoded.",
    "home.advantage3Title": "Punctuation compatibility",
    "home.advantage3Desc": "Code Translator supports punctuation marks, making it more versatile for various types of messages.",
    "home.advantage4Title": "Offline software with visual interface",
    "home.advantage4Desc": "The app can be used offline and features a visual interface that enhances the user experience.",
    "home.historyTitle": "What are codes?",
    "home.explain1": "Codes are methods of transmitting text information as a series of symbols.<br>Various codes exist, including Morse code, invented by Samuel Morse in the 1830s.<br>The most famous Morse message was the famous <strong>S.O.S</strong> sent by the Titanic. This message was <strong>.../---/...</strong>.<br>Then, codes became widely used in communication.<br>Currently, codes are still used in various activities. I did this translator firstly because it was a necessary project to have the Informatic scout badge.<br>In this translator, I replaced common characters by emoji for better readability.",
    "downloads.title": "Download Code Translator",
    "downloads.latest": "Version 2.0 (Latest)",
    "downloads.line1": "The latest version of Code Translator is now available for Windows, Linux, and macOS*.",
    "downloads.heroText": "The fastest way to translate codes on desktop ⚡",
    "downloads.comingSoon": "Coming soon!",
    "downloads.osLabel": "Operating system",
    "downloads.typeLabel": "Installer type",
    "downloads.os.windows": "Windows",
    "downloads.os.linux": "Linux",
    "downloads.os.macos": "macOS",
    "downloads.type.setup": "Setup",
    "downloads.type.portable": "Portable",
    "downloads.button": "Download",
    "downloads.ctaButton": "Download now",
    "downloads.note": "* The macOS version hadn't been tested, so it may not work as expected. If you encounter any issues, please let me know via email in the contact section.",
    "reviews.link": "Read and leave a review",
    "reviews.pageTitle": "Code Translator Reviews",
    "reviews.metaDescription": "Read and leave reviews about Code Translator.",
    "reviews.metaKeywords": "morse translator reviews, morse translator feedback, user reviews",
    "reviews.ogTitle": "Morse Translator Reviews",
    "reviews.ogDescription": "Share your experience with Morse Translator.",
    "reviews.twitterTitle": "Morse Translator Reviews",
    "reviews.twitterDescription": "Read and leave reviews about Morse Translator.",
    "reviews.title": "Morse Translator",
    "reviews.subtitle": "Share your experience",
    "reviews.formTitle": "Leave a review",
    "reviews.nameLabel": "Name",
    "reviews.ratingLabel": "Rating",
    "reviews.messageLabel": "Message",
    "reviews.submit": "Submit review",
    "reviews.listTitle": "Latest reviews",
    "reviews.empty": "No reviews yet. Be the first to leave one.",
    "reviews.ratingTitle": "Overall Rating",
    "reviews.p": "Help others by sharing your opinion about Morse Translator ⭐",
    "reviews.back": "Back to download page",
    "reviews.statusSuccess": "Thank you! Your review was saved on this device.",
    "reviews.statusError": "Please fill in all fields.",
    "reviews.ratingText": "Rating",
    "reviews.byline": "By",
    "reviews.on": "on",
    "thanks.pageTitle": "Thank You - Morse Translator",
    "thanks.metaDescription": "Thank you for your review of Morse Translator!",
    "thanks.metaKeywords": "morse translator thank you, review confirmation, feedback",
    "thanks.title": "Thank you to the actors who helped me to create this project!",
    "thanks.message": "Thank mainly to the scout group where I learned about Morse code and where I began this morse translator project.",
    "thanks.contributors": "I also want to thank Olivier Andrieu and his book \"Réussir son référencement web\" which helped me a lot to understand SEO and to optimize my website for search engines. I want to thank my father, who gave me ideas and feedback to improve the project and the website. Finally, I want to thank all the people who helped me by giving feedback and suggestions to improve the project and the website.",
    "whoami.pageTitle": "Who Am I - Morse Translator",
    "whoami.metaDescription": "Learn about the creator of Morse Translator, Joseph Rollo, and his passion for Morse code and software development.",
    "whoami.metaKeywords": "Joseph Rollo, Morse Translator creator, software developer, Morse code enthusiast, about the author",
    "whoami.title": "About the Author",
    "whoami.description": "Joseph Rollo is a passionate software developer and Morse code enthusiast. With a background in computer science, he created Morse Translator to share his love for Morse code and provide a useful tool for others. When he's not coding, Joseph enjoys exploring new technologies and contributing to open-source projects.",
    "project.infoLabel": "Project information:",
    "project.readme": "GitHub README",
    "footer.copyright": "Copyright © 2026 Joseph Rollo. All rights reserved.",
    "footer.github": "My GitHub",
    "footer.reviews": "Reviews",
    "footer.home": "Home",
    "footer.contact": "Contact",
    "footer.emailLabel": "Email:",
    "footer.thanks": "Thanks",
    "online.title": "Online Morse Translator",
    "online.description": "Enter text in the right panel to automatically translate it to Morse code. To type Morse, enter \"/\" to show a 4-symbol Morse keyboard.",
    "online.inputLabel": "Enter text",
    "online.inputPlaceholder": "Enter text or Morse code",
    "online.outputLabel": "Morse Output",
    "online.copyButton": "Copy Morse",
    "online.copySuccess": "Morse copied to clipboard!",
    "online.copyError": "Error copying Morse code.",
    "cgu.description": "By using this website, you agree to the following terms and conditions: The Morse Translator is provided as is without any warranties. The developer is not responsible for any damage or loss of data resulting from the use of this website. Users are responsible for ensuring that their use of the Morse Translator complies with all applicable laws and regulations. By using this website, you also agree to our Privacy Policy, which explains how we collect and use your data. If you do not agree to these terms, please do not use this website. Any reproduction or redistribution of this website or its content is prohibited without prior written permission from the developer.",
    "cgu.title": "Terms of use",
    "cgu.accept": "Accept",
    "cgu.decline": "Decline"
  },
  fr: {
    "page.title": "Télécharger Traducteur de Codes pour Windows, Linux et macOS",
    "home.pageTitle": "Traducteur de Codes : Accueil",
    "home.metaDescription": "Découvrez Traducteur de Codes : outils en ligne et hors ligne pour traduire du texte en divers codes et des codes en texte.",
    "home.metaKeywords": "traducteur codes, codes, traducteur en ligne, application bureau, téléchargement",
    "home.ogTitle": "Traducteur de Codes",
    "home.ogDescription": "Découvrez Traducteur de Codes, un outil gratuit pour traduire texte et divers codes avec des versions en ligne et bureau.",
    "online.pageTitle": "Traducteur de Codes en ligne",
    "online.metaDescription": "Utilisez le traducteur de codes en ligne pour convertir instantanément du texte et des codes dans votre navigateur.",
    "online.metaKeywords": "traducteur codes en ligne, codes, texte vers codes, codes vers texte, traducteur navigateur",
    "online.ogTitle": "Traducteur de Codes en ligne",
    "online.ogDescription": "Traduisez du texte en divers codes et des codes en texte directement en ligne, sans installation.",
    "download.pageTitle": "Télécharger Traducteur de Codes",
    "download.metaDescription": "Téléchargez les versions de bureau de Traducteur de Codes pour Windows, Linux et macOS.",
    "download.metaKeywords": "téléchargement traducteur codes, application codes bureau, windows linux macos",
    "download.ogTitle": "Télécharger Traducteur de Codes",
    "download.ogDescription": "Obtenez Traducteur de Codes pour Windows, Linux et macOS et traduisez du texte en codes hors ligne.",
    "meta.description": "Téléchargez Traducteur de Codes pour Windows, Linux et macOS. Traduisez du texte en divers codes et des codes en texte automatiquement.",
    "og.description": "Traduisez du texte en codes et des codes en texte. Téléchargez les versions desktop de Traducteur de Codes.",
    "og.locale": "fr_FR",
    "og.siteName": "Traducteur de Codes",
    "all.copyError": "La copie n'est pas autorisée.",
    "twitter.title": "Téléchargement Traducteur de Codes",
    "twitter.description": "Téléchargez Traducteur de Codes et convertissez facilement texte et codes.",
    "nav.label": "Sélecteur de langue",
    "nav.selectLabel": "Choisir la langue",
    "mainNav.label": "Navigation principale",
    "mainNav.home": "Accueil",
    "mainNav.online": "Traducteur en ligne",
    "mainNav.download": "Télécharger",
    "mainNav.reviews": "Avis",
    "header.title": "Kryptis - Accueil",
    "header.logoText": "Kryptis",
    "about.title": "À propos de l'application",
    "about.welcome": "Bienvenue sur Traducteur de Codes.",
    "about.line1": "Cet outil traduit le texte en divers codes et les codes en texte.",
    "about.line2": "Dans l'application, écrivez votre texte dans le panneau de droite pour une traduction automatique. Pour écrire en codes, tapez \"/\" pour afficher un clavier de codes à 4 symboles.",
    "about.description": "Traducteur de Codes est une application de bureau simple qui permet de traduire du texte en divers codes et inversement.",
    "home.ctaDownload": "Accéder aux téléchargements et installez le logiciel !",
    "home.ctaOnline": "Utilisez le traducteur directement sur le site !",
    "home.ctaReviews": "Voir les avis !",
    "home.whyTitle": "Pourquoi utiliser mon Traducteur de Codes ?",
    "home.why1": "Traducteur de Codes est un projet gratuit et open source, ce qui signifie que vous pouvez l'utiliser sans aucun coût et même contribuer à son développement si vous le souhaitez.",
    "home.advantages": "4 avantages clés :",
    "home.advantage1Title": "Pas de pubs !",
    "home.advantage1Desc": "Le traducteur de codes est un projet gratuit, ce qui signifie que vous pouvez l'utiliser sans aucun coût.",
    "home.advantage2Title": "Traduction rapide et précise",
    "home.advantage2Desc": "L'application fournit des traductions rapides et précises entre le texte et les divers codes, garantissant que vos messages sont correctement codés ou décodés.",
    "home.advantage3Title": "Compatibilité de ponctuation",
    "home.advantage3Desc": "Traducteur de Codes prend en charge les signes de ponctuation, ce qui le rend plus polyvalent pour différents types de messages.",
    "home.advantage4Title": "Logiciel hors ligne avec interface visuelle",
    "home.advantage4Desc": "L'application peut être utilisée hors ligne et dispose d'une interface visuelle qui améliore l'expérience utilisateur.",
    "home.historyTitle": "Qu'est-ce que les codes ?",
    "home.explain1": "Les codes sont des méthodes de transmission d'informations textuelles sous forme de séries de symboles.<br>Divers codes existent, y compris le code Morse, inventé par Samuel Morse dans les années 1830.<br>Le message Morse le plus célèbre est le fameux <strong>S.O.S</strong> envoyé par le Titanic. Ce message était <strong>.../---/...</strong>.<br>Ensuite, les codes sont devenus largement utilisés dans les communications.<br>Actuellement, les codes sont encore utilisés dans diverses activités. J'ai réalisé ce traducteur principalement parce que c'était un projet nécessaire pour obtenir le badge informatique des scouts.<br>Dans ce traducteur, j'ai remplacé les caractères courants par des emoji pour une meilleure lisibilité.",
    "downloads.title": "Télécharger Traducteur de Codes",
    "downloads.latest": "Version 2.0 (Dernière)",
    "downloads.line1": "La dernière version de Traducteur de Codes est maintenant disponible pour Windows, Linux et macOS*.",
    "downloads.heroText": "La façon la plus rapide de traduire les codes sur desktop ⚡",
    "downloads.comingSoon": "Bientôt disponible !",
    "downloads.osLabel": "Système d'exploitation",
    "downloads.typeLabel": "Type d'installation",
    "downloads.os.windows": "Windows",
    "downloads.os.linux": "Linux",
    "downloads.os.macos": "macOS",
    "downloads.type.setup": "Installation",
    "downloads.type.portable": "Portable",
    "downloads.button": "Télécharger",
    "downloads.ctaButton": "Télécharger maintenant",
    "downloads.note": "* La version macOS n'a pas été testée, elle peut donc ne pas fonctionner comme prévu. Si vous rencontrez des problèmes, merci de me contacter par e-mail dans la section contact.",
    "reviews.link": "Lire et laisser un avis",
    "reviews.pageTitle": "Avis sur Traducteur de Codes",
    "reviews.metaDescription": "Lisez et laissez des avis sur Traducteur de Codes.",
    "reviews.metaKeywords": "avis traducteur codes, retours traducteur codes, avis utilisateurs",
    "reviews.ogTitle": "Avis sur Traducteur de Codes",
    "reviews.ogDescription": "Partagez votre expérience avec Traducteur de Codes.",
    "reviews.twitterTitle": "Avis sur Traducteur de Codes",
    "reviews.twitterDescription": "Lisez et laissez des avis sur Traducteur de Codes.",
    "reviews.title": "Traducteur de Codes",
    "reviews.subtitle": "Partagez votre expérience",
    "reviews.formTitle": "Laisser un avis",
    "reviews.nameLabel": "Nom",
    "reviews.ratingLabel": "Note",
    "reviews.messageLabel": "Message",
    "reviews.submit": "Envoyer l'avis",
    "reviews.listTitle": "Derniers avis",
    "reviews.empty": "Aucun avis pour le moment. Soyez le premier à en laisser un.",
    "reviews.ratingTitle": "Note globale",
    "reviews.p": "Aidez les autres en partageant votre avis sur Traducteur de Codes ⭐",
    "reviews.back": "Retour à la page de téléchargement",
    "reviews.statusSuccess": "Merci ! Votre avis a été enregistré sur cet appareil.",
    "reviews.statusError": "Merci de remplir tous les champs.",
    "reviews.ratingText": "Note",
    "reviews.byline": "Par",
    "reviews.on": "le",
    "thanks.pageTitle": "Merci - Traducteur de Codes",
    "thanks.metaDescription": "Merci pour votre avis sur Traducteur de Codes !",
    "thanks.metaKeywords": "traducteur codes merci, confirmation avis, retour",
    "thanks.title": "Merci aux acteurs qui m'ont aidé à créer ce projet !",
    "thanks.message": "Merci principalement au groupe scout où j'ai appris les codes et où j'ai commencé ce projet de traducteur de codes.",
    "thanks.contributors": "Je tiens également à remercier Olivier Andrieu et son livre \"Réussir son référencement web\" qui m'a beaucoup aidé à comprendre le SEO et à optimiser mon site pour les moteurs de recherche. Je remercie aussi mon père, qui m'a donné des idées et des retours pour améliorer le projet et le site. Enfin, merci à toutes les personnes qui m'ont aidé en donnant des retours et des suggestions pour améliorer le projet.",
    "whoami.pageTitle": "Qui suis-je - Traducteur de Codes",
    "whoami.metaDescription": "Découvrez le créateur de Traducteur de Codes, Joseph Rollo, et sa passion pour les codes et le développement logiciel.",
    "whoami.metaKeywords": "Joseph Rollo, créateur Traducteur de Codes, développeur logiciel, passionné de codes, à propos de l'auteur",
    "whoami.title": "À propos de l'auteur",
    "whoami.description": "Joseph Rollo est un développeur logiciel passionné et un amateur de codes. Avec une formation en informatique, il a créé Traducteur de Codes pour partager son amour des codes et offrir un outil utile aux autres. Lorsqu'il ne code pas, Joseph aime explorer de nouvelles technologies et contribuer à l'open source.",
    "project.infoLabel": "Informations sur le projet :",
    "project.readme": "GitHub README",
    "footer.copyright": "Copyright © 2026 Joseph Rollo. Tous droits réservés.",
    "footer.github": "Mon GitHub",
    "footer.reviews": "Avis",
    "footer.home": "Accueil",
    "footer.contact": "Contact",
    "footer.emailLabel": "Email :",
    "footer.thanks": "Remerciements",
    "online.title": "Traducteur de Codes en ligne",
    "online.description": "Entrez du texte dans le champ de droite pour le traduire automatiquement en codes. Pour taper en codes, écrivez \"/\" pour afficher un clavier de codes à 4 symboles.",
    "online.inputPlaceholder": "Entrez du texte ou des codes",
    "online.inputLabel": "Entrez du texte",
    "online.outputLabel": "Sortie Codes",
    "online.copyButton": "Copier les Codes",
    "online.copySuccess": "Codes copiés dans le presse-papier !",
    "online.copyError": "Erreur lors de la copie des codes.",
    "cgu.description": "En utilisant ce site, vous acceptez les termes et conditions suivants : Le Traducteur de Codes est fourni tel quel sans aucune garantie. Le développeur n'est pas responsable de tout dommage ou perte de données résultant de l'utilisation de ce site. Les utilisateurs sont responsables de s'assurer que leur utilisation du Traducteur de Codes est conforme à toutes les lois et réglementations applicables. En utilisant ce site, vous acceptez également notre Politique de confidentialité, qui explique comment nous collectons et utilisons vos données. Si vous n'acceptez pas ces termes, veuillez ne pas utiliser ce site. Toute reproduction ou redistribution de ce site ou de son contenu est interdite sans l'autorisation écrite préalable du développeur.",
    "cgu.title": "Conditions d'utilisation",
    "cgu.accept": "Accepter",
    "cgu.decline": "Refuser"
  },
  es: {
    "page.title": "Descargar Traductor de Códigos para Windows, Linux y macOS",
    "home.pageTitle": "Traductor de Códigos: Inicio",
    "home.metaDescription": "Descubre Traductor de Códigos: herramientas en línea y fuera de línea para traducir texto a diversos códigos y códigos a texto.",
    "home.metaKeywords": "traductor códigos, códigos, traductor en línea, aplicación de escritorio, descarga",
    "home.ogTitle": "Traductor de Códigos",
    "home.ogDescription": "Descubre Traductor de Códigos, una herramienta gratuita para traducir texto y diversos códigos con versiones en línea y de escritorio.",
    "online.pageTitle": "Traductor de Códigos en línea",
    "online.metaDescription": "Usa el traductor de códigos en línea para convertir texto y códigos al instante en tu navegador.",
    "online.metaKeywords": "traductor códigos en línea, códigos, texto a códigos, códigos a texto, navegador",
    "online.ogTitle": "Traductor de Códigos en línea",
    "online.ogDescription": "Traduce texto a diversos códigos y códigos a texto directamente en línea, sin instalar nada.",
    "download.pageTitle": "Descargar Traductor de Códigos",
    "download.metaDescription": "Descarga las versiones de escritorio de Traductor de Códigos para Windows, Linux y macOS.",
    "download.metaKeywords": "descarga traductor códigos, app códigos escritorio, windows linux macos",
    "download.ogTitle": "Descargar Traductor de Códigos",
    "download.ogDescription": "Obtén Traductor de Códigos para Windows, Linux y macOS y traduce texto a códigos sin conexión.",
    "meta.description": "Descarga Traductor de Códigos para Windows, Linux y macOS. Traduce texto a diversos códigos y códigos a texto automáticamente.",
    "og.description": "Traduce texto a códigos y códigos a texto. Descarga versiones de escritorio de Traductor de Códigos.",
    "og.locale": "es_ES",
    "og.siteName": "Traductor de Códigos",
    "all.copyError": "No se permite copiar.",
    "twitter.title": "Descarga Traductor de Códigos",
    "twitter.description": "Descarga Traductor de Códigos y convierte texto y códigos fácilmente.",
    "nav.label": "Selector de idioma",
    "nav.selectLabel": "Seleccionar idioma",
    "mainNav.label": "Navegación principal",
    "mainNav.home": "Inicio",
    "mainNav.online": "Traductor en línea",
    "mainNav.download": "Descargar",
    "mainNav.reviews": "Reseñas",
    "header.title": "Kryptis - Inicio",
    "header.logoText": "Kryptis",
    "about.title": "Sobre la aplicación",
    "about.welcome": "Bienvenido a Traductor de Códigos.",
    "about.line1": "Esta herramienta traduce texto a diversos códigos y códigos a texto.",
    "about.line2": "En la aplicación, escribe texto en el panel derecho y se traducirá automáticamente.",
    "about.description": "Traductor de Códigos es una aplicación de escritorio sencilla que permite traducir texto a diversos códigos y viceversa.",
    "home.ctaDownload": "Ir a descargas e instala el software sin conexión.",
    "home.ctaOnline": "Usa el traductor en línea directamente en el sitio web.",
    "home.ctaReviews": "Ver reseñas!",
    "home.whyTitle": "¿Por qué usar mi Traductor de Códigos?",
    "home.why1": "Traductor de Códigos es un proyecto gratuito y de código abierto, lo que significa que puedes usarlo sin ningún costo.",
    "home.advantages": "4 ventajas clave:",
    "home.advantage1Title": "¡Sin publicidad!",
    "home.advantage1Desc": "El traductor de códigos es un proyecto gratuito.",
    "home.advantage2Title": "Traducción rápida y precisa",
    "home.advantage2Desc": "La aplicación ofrece traducciones rápidas y precisas entre texto y diversos códigos.",
    "home.advantage3Title": "Compatibilidad con puntuación",
    "home.advantage3Desc": "Traductor de Códigos admite signos de puntuación.",
    "home.advantage4Title": "Software sin conexión con interfaz visual",
    "home.advantage4Desc": "La aplicación se puede usar sin conexión y cuenta con una interfaz visual.",
    "home.historyTitle": "¿Qué son los códigos?",
    "home.explain1": "Los códigos son métodos de transmisión de información textual como una serie de símbolos.",
    "downloads.title": "Descargar Traductor de Códigos",
    "downloads.latest": "Versión 2.0 (Última)",
    "downloads.line1": "La última versión de Traductor de Códigos ahora está disponible para Windows, Linux y macOS*.",
    "downloads.heroText": "La forma más rápida de traducir códigos en el escritorio ⚡",
    "downloads.comingSoon": "¡Próximamente!",
    "downloads.osLabel": "Sistema operativo",
    "downloads.typeLabel": "Tipo de instalador",
    "downloads.os.windows": "Windows",
    "downloads.os.linux": "Linux",
    "downloads.os.macos": "macOS",
    "downloads.type.setup": "Instalación",
    "downloads.type.portable": "Portátil",
    "downloads.button": "Descargar",
    "downloads.ctaButton": "Descargar ahora",
    "downloads.note": "* La versión de macOS no ha sido probada.",
    "reviews.link": "Leer y dejar una reseña",
    "reviews.pageTitle": "Reseñas de Traductor de Códigos",
    "reviews.metaDescription": "Lee y deja reseñas sobre Traductor de Códigos.",
    "reviews.metaKeywords": "reseñas traductor códigos, opiniones traductor códigos, reseñas usuarios",
    "reviews.ogTitle": "Reseñas de Traductor de Códigos",
    "reviews.ogDescription": "Comparte tu experiencia con Traductor de Códigos.",
    "reviews.twitterTitle": "Reseñas de Traductor de Códigos",
    "reviews.twitterDescription": "Lee y deja reseñas sobre Traductor de Códigos.",
    "reviews.title": "Traductor de Códigos",
    "reviews.subtitle": "Comparte tu experiencia",
    "reviews.formTitle": "Deja una reseña",
    "reviews.nameLabel": "Nombre",
    "reviews.ratingLabel": "Puntuación",
    "reviews.messageLabel": "Mensaje",
    "reviews.submit": "Enviar reseña",
    "reviews.listTitle": "Reseñas recientes",
    "reviews.empty": "Aún no hay reseñas. Sé el primero en dejar una.",
    "reviews.ratingTitle": "Calificación general",
    "reviews.p": "Ayuda a otros compartiendo tu opinión sobre Traductor de Códigos ⭐",
    "reviews.back": "Volver a la página de descarga",
    "reviews.statusSuccess": "Gracias. Tu reseña se guardó en este dispositivo.",
    "reviews.statusError": "Por favor completa todos los campos.",
    "reviews.ratingText": "Puntuación",
    "reviews.byline": "Por",
    "reviews.on": "el",
    "thanks.pageTitle": "Gracias - Traductor de Códigos",
    "thanks.metaDescription": "¡Gracias por tu opinión sobre Traductor de Códigos!",
    "thanks.metaKeywords": "traductor códigos gracias, confirmación de reseña, feedback",
    "thanks.title": "¡Gracias a los actores que me ayudaron a crear este proyecto!",
    "thanks.message": "Gracias principalmente al grupo scout donde aprendí los códigos y donde comencé este proyecto del traductor de códigos.",
    "thanks.contributors": "También quiero agradecer a Olivier Andrieu y su libro \"Réussir son référencement web\" que me ayudó mucho a entender el SEO y a optimizar mi sitio web para los motores de búsqueda. Quiero agradecer a mi padre, quien me dio ideas y comentarios para mejorar el proyecto y el sitio. Finalmente, gracias a todas las personas que me ayudaron dando opiniones y sugerencias para mejorar el proyecto.",
    "whoami.pageTitle": "Quién soy - Traductor de Códigos",
    "whoami.metaDescription": "Conoce al creador de Traductor de Códigos, Joseph Rollo, y su pasión por los códigos y el desarrollo de software.",
    "whoami.metaKeywords": "Joseph Rollo, creador de Traductor de Códigos, desarrollador de software, entusiasta de códigos, sobre el autor",
    "whoami.title": "Sobre el autor",
    "whoami.description": "Joseph Rollo es un apasionado desarrollador de software y entusiasta de códigos. Con una formación en informática, creó Traductor de Códigos para compartir su amor por los códigos y ofrecer una herramienta útil a los demás. Cuando no está programando, a Joseph le gusta explorar nuevas tecnologías y contribuir a proyectos de código abierto.",
    "project.infoLabel": "Información del proyecto:",
    "project.readme": "GitHub README",
    "footer.copyright": "Copyright © 2026 Joseph Rollo. Todos los derechos reservados.",
    "footer.github": "Mi GitHub",
    "footer.reviews": "Reseñas",
    "footer.home": "Inicio",
    "footer.contact": "Contacto",
    "footer.emailLabel": "Email:",
    "footer.thanks": "Gracias",
    "online.title": "Traductor de Códigos en línea",
    "online.description": "Ingrese texto para traducirlo automáticamente a códigos.",
    "online.inputPlaceholder": "Introduce texto o códigos",
    "online.inputLabel": "Ingrese texto",
    "online.outputLabel": "Salida Morse",
    "online.copyButton": "Copiar Morse",
    "online.copySuccess": "Morse copiado al portapapeles.",
    "online.copyError": "Error al copiar el código Morse.",
    "cgu.description": "Al usar este sitio web, aceptas los siguientes términos y condiciones.",
    "cgu.title": "Condiciones de uso",
    "cgu.accept": "Aceptar",
    "cgu.decline": "Rechazar"
  },
  it: {
    "page.title": "Scarica Morse Translator per Windows, Linux e macOS",
    "home.pageTitle": "Morse Translator: Home",
    "home.metaDescription": "Scopri Morse Translator: strumenti online e offline per tradurre testo in codice Morse e codice Morse in testo.",
    "home.metaKeywords": "traduttore morse, codice morse, traduttore online, app desktop, download",
    "home.ogTitle": "Morse Translator",
    "home.ogDescription": "Scopri Morse Translator, uno strumento gratuito per tradurre testo e codice Morse.",
    "online.pageTitle": "Traduttore Morse online",
    "online.metaDescription": "Usa il traduttore Morse online per convertire istantaneamente testo e codice Morse nel browser.",
    "online.metaKeywords": "traduttore morse online, codice morse, testo in morse, morse in testo, browser",
    "online.ogTitle": "Traduttore Morse online",
    "online.ogDescription": "Traduci testo in codice Morse e codice Morse in testo direttamente online.",
    "download.pageTitle": "Scarica Morse Translator",
    "download.metaDescription": "Scarica le versioni desktop di Morse Translator per Windows, Linux e macOS.",
    "download.metaKeywords": "download traduttore morse, app morse desktop, windows linux macos",
    "download.ogTitle": "Scarica Morse Translator",
    "download.ogDescription": "Scarica Morse Translator per Windows, Linux e macOS.",
    "meta.description": "Scarica Morse Translator per Windows, Linux e macOS.",
    "og.description": "Traduci testo in Morse e Morse in testo.",
    "og.locale": "it_IT",
    "og.siteName": "Morse Translator",
    "all.copyError": "La copia non è consentita.",
    "twitter.title": "Download Morse Translator",
    "twitter.description": "Scarica Morse Translator e converti facilmente testo e codice Morse.",
    "nav.label": "Selettore lingua",
    "nav.selectLabel": "Seleziona lingua",
    "mainNav.label": "Navigazione principale",
    "mainNav.home": "Home",
    "mainNav.online": "Traduttore online",
    "mainNav.download": "Scaricamento",
    "mainNav.reviews": "Recensioni",
    "header.title": "Kryptis - Home",
    "header.logoText": "Kryptis",
    "about.title": "Informazioni sull'app",
    "about.welcome": "Benvenuto in Morse Translator.",
    "about.line1": "Questo strumento traduce testo in codice Morse e codice Morse in testo.",
    "about.line2": "Nell'app, scrivi il testo nel pannello di destra e verrà tradotto automaticamente.",
    "about.description": "Morse Translator e' una semplice applicazione desktop.",
    "home.ctaDownload": "Vai ai download e installa il software offline!",
    "home.ctaOnline": "Usa il traduttore online direttamente sul sito!",
    "home.ctaReviews": "Vedi le recensioni!",
    "home.whyTitle": "Perché usare il mio Morse Translator?",
    "home.why1": "Morse Translator è un progetto gratuito e open source.",
    "home.advantages": "4 vantaggi principali:",
    "home.advantage1Title": "Niente pubblicità!",
    "home.advantage1Desc": "Il traduttore Morse è un progetto gratuito.",
    "home.advantage2Title": "Traduzione veloce e accurata",
    "home.advantage2Desc": "L'app fornisce traduzioni rapide e accurate tra testo e codice Morse.",
    "home.advantage3Title": "Compatibilità con la punteggiatura",
    "home.advantage3Desc": "Morse Translator supporta i segni di punteggiatura.",
    "home.advantage4Title": "Software offline con interfaccia visiva",
    "home.advantage4Desc": "L'app può essere utilizzata offline.",
    "home.historyTitle": "Cos'è il codice Morse?",
    "home.explain1": "Il <strong>codice Morse</strong> è un metodo di trasmissione di informazioni testuali.",
    "downloads.title": "Scarica Morse Translator",
    "downloads.latest": "Versione 2.0 (Ultima)",
    "downloads.line1": "L'ultima versione di Morse Translator è ora disponibile per Windows, Linux e macOS*.",
    "downloads.heroText": "Il modo più veloce per tradurre il Morse su desktop ⚡",
    "downloads.comingSoon": "In arrivo!",
    "downloads.osLabel": "Sistema operativo",
    "downloads.typeLabel": "Tipo di installazione",
    "downloads.os.windows": "Windows",
    "downloads.os.linux": "Linux",
    "downloads.os.macos": "macOS",
    "downloads.type.setup": "Installazione",
    "downloads.type.portable": "Portatile",
    "downloads.button": "Scarica",
    "downloads.ctaButton": "Scarica ora",
    "downloads.note": "* La versione macOS non è stata testata.",
    "reviews.link": "Leggi e lascia una recensione",
    "reviews.pageTitle": "Recensioni di Morse Translator",
    "reviews.metaDescription": "Leggi e lascia recensioni su Morse Translator.",
    "reviews.metaKeywords": "recensioni morse translator, opinioni morse translator, recensioni utenti",
    "reviews.ogTitle": "Recensioni di Morse Translator",
    "reviews.ogDescription": "Condividi la tua esperienza con Morse Translator.",
    "reviews.twitterTitle": "Recensioni di Morse Translator",
    "reviews.twitterDescription": "Leggi e lascia recensioni su Morse Translator.",
    "reviews.title": "Traduttore Morse",
    "reviews.subtitle": "Condividi la tua esperienza",
    "reviews.formTitle": "Lascia una recensione",
    "reviews.nameLabel": "Nome",
    "reviews.ratingLabel": "Valutazione",
    "reviews.messageLabel": "Messaggio",
    "reviews.submit": "Invia recensione",
    "reviews.listTitle": "Recensioni recenti",
    "reviews.empty": "Nessuna recensione ancora. Sii il primo a lasciarne una.",
    "reviews.ratingTitle": "Valutazione complessiva",
    "reviews.p": "Aiuta gli altri condividendo la tua opinione su Morse Translator ⭐",
    "reviews.back": "Torna alla pagina di download",
    "reviews.statusSuccess": "Grazie. La tua recensione è stata salvata su questo dispositivo.",
    "reviews.statusError": "Per favore compila tutti i campi.",
    "reviews.ratingText": "Valutazione",
    "reviews.byline": "Da",
    "reviews.on": "il",
    "thanks.pageTitle": "Grazie - Morse Translator",
    "thanks.metaDescription": "Grazie per la tua recensione di Morse Translator!",
    "thanks.metaKeywords": "morse translator grazie, conferma recensione, feedback",
    "thanks.title": "Grazie agli attori che mi hanno aiutato a creare questo progetto!",
    "thanks.message": "Grazie soprattutto al gruppo scout dove ho imparato il codice Morse e dove ho iniziato questo progetto del traduttore Morse.",
    "thanks.contributors": "Voglio anche ringraziare Olivier Andrieu e il suo libro \"Réussir son référencement web\" che mi ha aiutato molto a capire la SEO e a ottimizzare il mio sito per i motori di ricerca. Ringrazio anche mio padre, che mi ha dato idee e feedback per migliorare il progetto e il sito. Infine, grazie a tutte le persone che mi hanno aiutato fornendo feedback e suggerimenti per migliorare il progetto.",
    "whoami.pageTitle": "Chi sono - Morse Translator",
    "whoami.metaDescription": "Scopri il creatore di Morse Translator, Joseph Rollo, e la sua passione per il codice Morse e lo sviluppo software.",
    "whoami.metaKeywords": "Joseph Rollo, creatore di Morse Translator, sviluppatore software, appassionato di codice Morse, sull'autore",
    "whoami.title": "Informazioni sull'autore",
    "whoami.description": "Joseph Rollo è un appassionato sviluppatore software e un entusiasta del codice Morse. Con un background in informatica, ha creato Morse Translator per condividere il suo amore per il codice Morse e fornire uno strumento utile agli altri. Quando non programma, Joseph ama esplorare nuove tecnologie e contribuire a progetti open source.",
    "project.infoLabel": "Informazioni sul progetto:",
    "project.readme": "GitHub README",
    "footer.copyright": "Copyright © 2026 Joseph Rollo. Tutti i diritti riservati.",
    "footer.github": "Il mio GitHub",
    "footer.reviews": "Recensioni",
    "footer.home": "Home",
    "footer.contact": "Contatto",
    "footer.emailLabel": "Email:",
    "footer.thanks": "Ringraziamenti",
    "online.title": "Traduttore Morse Online",
    "online.description": "Inserisci il testo per tradurlo automaticamente in codice Morse.",
    "online.inputPlaceholder": "Inserisci testo o codice Morse",
    "online.inputLabel": "Inserisci il testo",
    "online.outputLabel": "Output Morse",
    "online.copyButton": "Copia Morse",
    "online.copySuccess": "Morse copiato negli appunti!",
    "online.copyError": "Errore durante la copia del codice Morse.",
    "cgu.description": "Utilizzando questo sito web, accetti i seguenti termini e condizioni.",
    "cgu.title": "Condizioni d'uso",
    "cgu.accept": "Accetto",
    "cgu.decline": "Rifiuto"
  },
  de: {
    "page.title": "Morse Translator für Windows, Linux und macOS herunterladen",
    "home.pageTitle": "Morse Translator: Startseite",
    "home.metaDescription": "Entdecke Morse Translator: Online- und Offline-Tools zum Übersetzen von Text in Morsecode und Morsecode in Text.",
    "home.metaKeywords": "morse übersetzer, morsecode, online übersetzer, desktop app, download",
    "home.ogTitle": "Morse Translator",
    "home.ogDescription": "Entdecke Morse Translator, ein kostenloses Tool zum Übersetzen von Text und Morsecode.",
    "online.pageTitle": "Online Morse Übersetzer",
    "online.metaDescription": "Verwende den Online Morse Übersetzer, um Text und Morsecode sofort in deinem Browser zu konvertieren.",
    "online.metaKeywords": "online morse übersetzer, morsecode, text zu morse, morse zu text, browser übersetzer",
    "online.ogTitle": "Online Morse Übersetzer",
    "online.ogDescription": "Übersetze Text in Morsecode und Morsecode in Text direkt online.",
    "download.pageTitle": "Morse Translator herunterladen",
    "download.metaDescription": "Lade die Desktop-Versionen von Morse Translator für Windows, Linux und macOS herunter.",
    "download.metaKeywords": "morse übersetzer herunterladen, morse desktop app, windows linux macos",
    "download.ogTitle": "Morse Translator herunterladen",
    "download.ogDescription": "Hol dir Morse Translator für Windows, Linux und macOS.",
    "meta.description": "Lade Morse Translator für Windows, Linux und macOS herunter.",
    "og.description": "Übersetze Text in Morse und Morse in Text.",
    "og.locale": "de_DE",
    "og.siteName": "Morse Übersetzer",
    "all.copyError": "Kopieren ist nicht erlaubt.",
    "twitter.title": "Morse Translator Download",
    "twitter.description": "Lade Morse Translator herunter und konvertiere Text und Morsecode einfach.",
    "nav.label": "Sprachauswahl",
    "nav.selectLabel": "Sprache auswählen",
    "mainNav.label": "Hauptnavigation",
    "mainNav.home": "Startseite",
    "mainNav.online": "Online-Übersetzer",
    "mainNav.download": "Herunterladen",
    "mainNav.reviews": "Bewertungen",
    "header.title": "Kryptis - Startseite",
    "header.logoText": "Kryptis",
    "about.title": "Über die App",
    "about.welcome": "Willkommen bei Morse Translator.",
    "about.line1": "Dieses Tool übersetzt Text in Morsecode und Morsecode zurück in Text.",
    "about.line2": "Schreibe in der App deinen Text in das rechte Feld, dann wird er automatisch übersetzt.",
    "about.description": "Morse Translator ist eine einfache Desktop-Anwendung.",
    "home.ctaDownload": "Gehe zu Downloads und installiere die Offline-Software!",
    "home.ctaOnline": "Verwende den Online-Übersetzer direkt auf der Website!",
    "home.ctaReviews": "Sieh dir Bewertungen an!",
    "home.whyTitle": "Warum meinen Morse Translator verwenden?",
    "home.why1": "Morse Translator ist ein kostenloses Open-Source-Projekt.",
    "home.advantages": "4 Hauptvorteile:",
    "home.advantage1Title": "Keine Werbung!",
    "home.advantage1Desc": "Der Morse Translator ist ein kostenloses Projekt.",
    "home.advantage2Title": "Schnelle und genaue Übersetzung",
    "home.advantage2Desc": "Die App bietet schnelle und genaue Übersetzungen zwischen Text und Morsecode.",
    "home.advantage3Title": "Kompatibilität mit Satzzeichen",
    "home.advantage3Desc": "Morse Translator unterstützt Satzzeichen.",
    "home.advantage4Title": "Offline-Software mit visueller Oberfläche",
    "home.advantage4Desc": "Die App kann offline verwendet werden.",
    "home.historyTitle": "Was ist der Morsecode?",
    "home.explain1": "Der <strong>Morsecode</strong> ist eine Methode zur Übertragung von Textinformationen als eine Reihe von kurzen und langen Signalen.",
    "downloads.title": "Morse Translator herunterladen",
    "downloads.latest": "Version 2.0 (Neueste)",
    "downloads.line1": "Die neueste Version von Morse Translator ist jetzt für Windows, Linux und macOS* verfügbar.",
    "downloads.heroText": "Der schnellste Weg, Morse auf dem Desktop zu übersetzen ⚡",
    "downloads.comingSoon": "Kommt bald!",
    "downloads.osLabel": "Betriebssystem",
    "downloads.typeLabel": "Installationsart",
    "downloads.os.windows": "Windows",
    "downloads.os.linux": "Linux",
    "downloads.os.macos": "macOS",
    "downloads.type.setup": "Installation",
    "downloads.type.portable": "Portabel",
    "downloads.button": "Herunterladen",
    "downloads.ctaButton": "Jetzt herunterladen",
    "downloads.note": "* Die macOS-Version wurde nicht getestet.",
    "reviews.link": "Bewertung lesen und schreiben",
    "reviews.pageTitle": "Morse Translator Bewertungen",
    "reviews.metaDescription": "Lies und schreibe Bewertungen zu Morse Translator.",
    "reviews.metaKeywords": "bewertungen morse translator, feedback morse translator, nutzerbewertungen",
    "reviews.ogTitle": "Morse Translator Bewertungen",
    "reviews.ogDescription": "Teile deine Erfahrung mit Morse Translator.",
    "reviews.twitterTitle": "Morse Translator Bewertungen",
    "reviews.twitterDescription": "Lies und schreibe Bewertungen zu Morse Translator.",
    "reviews.title": "Morse-Übersetzer",
    "reviews.subtitle": "Teile deine Erfahrung",
    "reviews.formTitle": "Bewertung schreiben",
    "reviews.nameLabel": "Name",
    "reviews.ratingLabel": "Bewertung",
    "reviews.messageLabel": "Nachricht",
    "reviews.submit": "Bewertung senden",
    "reviews.listTitle": "Neueste Bewertungen",
    "reviews.empty": "Noch keine Bewertungen. Sei der Erste.",
    "reviews.ratingTitle": "Gesamtbewertung",
    "reviews.p": "Hilf anderen, indem du deine Meinung über Morse Translator teilst ⭐",
    "reviews.back": "Zurueck zur Download-Seite",
    "reviews.statusSuccess": "Danke. Deine Bewertung wurde auf diesem Geraet gespeichert.",
    "reviews.statusError": "Bitte fuelle alle Felder aus.",
    "reviews.ratingText": "Bewertung",
    "reviews.byline": "Von",
    "reviews.on": "am",
    "thanks.pageTitle": "Danke - Morse Translator",
    "thanks.metaDescription": "Danke für deine Bewertung von Morse Translator!",
    "thanks.metaKeywords": "morse translator danke, bewertungsbestätigung, feedback",
    "thanks.title": "Danke an die Akteure, die mir bei der Erstellung dieses Projekts geholfen haben!",
    "thanks.message": "Danke besonders der Pfadfindergruppe, in der ich den Morsecode gelernt habe und in der ich dieses Projekt des Morseübersetzers begonnen habe.",
    "thanks.contributors": "Ich möchte auch Olivier Andrieu und seinem Buch \"Réussir son référencement web\" danken, das mir sehr geholfen hat, SEO zu verstehen und meine Website für Suchmaschinen zu optimieren. Ich danke auch meinem Vater, der mir Ideen und Feedback gegeben hat, um das Projekt und die Website zu verbessern. Schließlich danke ich allen, die mir durch Feedback und Vorschläge geholfen haben, das Projekt zu verbessern.",
    "whoami.pageTitle": "Wer bin ich - Morse Translator",
    "whoami.metaDescription": "Erfahre mehr über den Ersteller von Morse Translator, Joseph Rollo, und seine Leidenschaft für Morsecode und Softwareentwicklung.",
    "whoami.metaKeywords": "Joseph Rollo, Ersteller von Morse Translator, Softwareentwickler, Morsecode-Enthusiast, über den Autor",
    "whoami.title": "Über den Autor",
    "whoami.description": "Joseph Rollo ist ein leidenschaftlicher Softwareentwickler und Morsecode-Enthusiast. Mit einem Hintergrund in Informatik hat er Morse Translator erstellt, um seine Liebe zum Morsecode zu teilen und anderen ein nützliches Werkzeug anzubieten. Wenn er nicht programmiert, erkundet Joseph gerne neue Technologien und trägt zu Open-Source-Projekten bei.",
    "project.infoLabel": "Projektinformationen:",
    "project.readme": "GitHub README",
    "footer.copyright": "Copyright © 2026 Joseph Rollo. Alle Rechte vorbehalten.",
    "footer.github": "Mein GitHub",
    "footer.reviews": "Bewertungen",
    "footer.home": "Startseite",
    "footer.contact": "Kontakt",
    "footer.emailLabel": "E-Mail:",
    "footer.thanks": "Danksagungen",
    "online.title": "Online Morse Übersetzer",
    "online.description": "Geben Sie Text ein, um ihn automatisch ins Morse zu übersetzen.",
    "online.inputPlaceholder": "Gib Text oder Morsecode ein",
    "online.inputLabel": "Text eingeben",
    "online.outputLabel": "Morsecode Ausgabe",
    "online.copyButton": "Morsecode kopieren",
    "online.copySuccess": "Morsecode in die Zwischenablage kopiert!",
    "online.copyError": "Fehler beim Kopieren des Morse-Codes.",
    "cgu.description": "Durch die Nutzung dieser Website akzeptieren Sie die Geschäftsbedingungen.",
    "cgu.title": "Nutzungsbedingungen",
    "cgu.accept": "Akzeptieren",
    "cgu.decline": "Ablehnen"
  }
};

const DOWNLOAD_PATHS = {
  windows: {
    setup: "latest/win/Traducteur_Morse.msi",
    p: "latest/win/dist/traducteur_morse_2.exe"
  },
  linux: {
    app: "latest/lin/dist/traducteur_morse_2"
  },
  macos: {
    app: "latest/mac/traducteur_morse_2.zip",
    dmg: "latest/mac/Traducteur_Morse.dmg"
  }
};

function normalizeLanguage(lang) {
  if (!lang) return "en";
  const normalized = lang.toLowerCase().split("-")[0];
  return SUPPORTED_LANGUAGES.includes(normalized) ? normalized : "en";
}

function getLanguageFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang");
  if (!urlLang) return null;
  return normalizeLanguage(urlLang);
}

function getStoredLanguage() {
  const stored = localStorage.getItem("preferredLanguage");
  if (!stored) return null;
  return normalizeLanguage(stored);
}

function applyTranslations(language) {
  const strings = I18N[language] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = strings[key];
    if (!value) return;

    const attr = element.dataset.i18nAttr;
    if (attr) {
      attr.split(",").forEach((attrName) => {
        const trimmed = attrName.trim();
        if (trimmed) element.setAttribute(trimmed, value);
      });
      return;
    }

    element.innerHTML = value;
  });
}

function updateSeoForLanguage(language) {
  const robotsMeta = document.getElementById("robotsMeta");
  const canonicalLink = document.getElementById("canonicalLink");

  if (robotsMeta) {
    robotsMeta.setAttribute(
      "content",
      language === "en"
        ? "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        : "noindex,follow"
    );
  }

  if (canonicalLink) {
    let path = window.location.pathname || "/index.html";
    if (path === "/") path = "/index.html";
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
  if (languageSelect) languageSelect.value = normalized;

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

  if (!osSelect || !typeSelect || !downloadLink) return;

  const selectedOS = osSelect.value;
  const selectedType = typeSelect.value;
  let href = "";

  if (selectedOS === "windows") {
    href = DOWNLOAD_PATHS.windows[selectedType] || DOWNLOAD_PATHS.windows.setup;
    typeSelect.disabled = false;
  } else if (selectedOS === "linux") {
    href = DOWNLOAD_PATHS.linux.app;
    typeSelect.disabled = true;
  } else if(selectedOS==="macos") {
    typeSelect.options[0].innerText=".app file"
    typeSelect.options[1].innerText=".dmg file"
    console.log(typeSelect.innerText)
    href = DOWNLOAD_PATHS.macos[selectedType] || DOWNLOAD_PATHS.macos.app;
    typeSelect.disabled = false;
  }

  downloadLink.href = href;
  downloadLink.setAttribute("download", "");
}

async function loadReviews() {
  let local = [];
  let server = [];

  try {
    const raw = localStorage.getItem(REVIEW_STORAGE_KEY);
    local = raw ? JSON.parse(raw) : [];
  } catch {
    local = [];
  }

  try {
    const res = await fetch("reviews.json?cache=" + Date.now());
    server = await res.json();
  } catch {
    server = [];
  }

  // Fusion : on part du serveur, on ajoute les locaux non présents
  const all = [...server];
  local.forEach((l) => {
    if (!all.find((s) => s.id === l.id)) {
      all.push(l);
    }
  });

  localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(all));
  return all;
}

async function saveReviewToServer(review) {
  try {
    await fetch("reviews.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review)
    });
  } catch (e) {
    console.warn("Erreur envoi serveur", e);
  }
}

async function syncLocalToServer(localReviews) {
  let sentIds = [];
  try {
    sentIds = JSON.parse(localStorage.getItem(SENT_REVIEWS_KEY)) || [];
  } catch {
    sentIds = [];
  }

  for (const review of localReviews) {
    if (sentIds.includes(review.id)) continue;
    await saveReviewToServer(review);
    sentIds.push(review.id);
  }

  localStorage.setItem(SENT_REVIEWS_KEY, JSON.stringify(sentIds));
}

function saveReviewsLocal(reviews) {
  localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviews));
}

async function deleteReviews(ids) {
  try {
    const res = await fetch("delete_review.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: "2011", ids })
    });

    const result = await res.json();
    if (result.success) {
      let local = JSON.parse(localStorage.getItem(REVIEW_STORAGE_KEY)) || [];
      local = local.filter((r) => !ids.includes(r.id));
      localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(local));
    } else {
      console.error(result.error);
    }
  } catch (e) {
    console.error("Erreur suppression", e);
  }
}

async function initReviewsPage(language) {
  const form = document.getElementById("reviewForm");
  const status = document.getElementById("reviewStatus");
  const list = document.getElementById("reviewList");

  if (!form || !status || !list) return;

  let localReviews = [];
  try {
    localReviews = JSON.parse(localStorage.getItem(REVIEW_STORAGE_KEY)) || [];
  } catch {
    localReviews = [];
  }

  await syncLocalToServer(localReviews);
  const reviews = await loadReviews();
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

    const updated = [newReview, ...(await loadReviews())].slice(0, 20);
    saveReviewsLocal(updated);
    await saveReviewToServer(newReview);

    status.textContent = strings["reviews.statusSuccess"];
    form.reset();
    renderReviews(updated, langNow);
  });
}

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

  // ── Vérification admin (lecture seule, bouton suppression si actif) ──
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  reviews.forEach((review) => {
    const card = document.createElement("article");
    card.className = "review-card";

    const meta = document.createElement("p");
    meta.className = "review-meta";
    const dateText = review.date ? dateFormatter.format(new Date(review.date)) : "";
    meta.textContent = `${strings["reviews.byline"]} ${review.name} ${strings["reviews.on"]} ${dateText} · ${strings["reviews.ratingText"]}: ${review.rating}/5`;

    const message = document.createElement("p");
    message.className = "review-message";
    const lang = normalizeLanguage(document.documentElement.lang || "en");

    message.textContent = translateText(review.message, lang);

    card.appendChild(meta);
    card.appendChild(message);

    // Bouton suppression admin (placé correctement dans la boucle)
    if (isAdmin) {
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌ Supprimer";
      deleteBtn.style.cssText = "margin-top:8px;padding:4px 10px;background:#c0392b;color:#fff;border:none;border-radius:8px;cursor:pointer;";
      deleteBtn.onclick = async () => {
        await deleteReviews([review.id]);
        card.remove();
      };
      card.appendChild(deleteBtn);
    }

    list.appendChild(card);
  });
}

function getUserLocale() {
  const urlLang = getLanguageFromUrl();
  if (urlLang) return urlLang;

  const storedLang = getStoredLanguage();
  if (storedLang) return storedLang;

  if (navigator.language) return normalizeLanguage(navigator.language);

  const UserIP = window.UserIP || null;
  if (UserIP && UserIP.country_code) {
    const countryLangMap = { US: "en", GB: "en", FR: "fr", IT: "it", DE: "de" };
    return countryLangMap[UserIP.country_code] || "en";
  }

  return "en";
}

// ── LibreTranslate helper ──
const LIBRE_API = "https://fr.libretranslate.com/translate";

async function translateText(text, targetLang = "en") {
  try {
    const res = await fetch(LIBRE_API, {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: "auto",
        target: targetLang,
        format: "text"
      }),
      headers: { "Content-Type": "application/json" }
    });

    const data = await res.json();
    return data.translatedText || text;

  } catch (e) {
    console.warn("Erreur traduction LibreTranslate", e);
    return text;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const initialLanguage = getUserLocale();
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
  if (osSelect) osSelect.addEventListener("change", updateDownloadLink);
  if (typeSelect) typeSelect.addEventListener("change", updateDownloadLink);

  updateDownloadLink();
  initReviewsPage(initialLanguage);
});

// ── Désactiver le clic droit ──
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert(I18N[document.documentElement.lang || "en"]["all.copyError"]);
});

// ── Bannière CGU ──
const CGU = "By using this website, you agree to the following terms and conditions: The Morse Translator is provided as is without any warranties. The developer is not responsible for any damage or loss of data resulting from the use of this website.";

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
