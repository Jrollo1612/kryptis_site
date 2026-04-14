const SUPPORTED_LANGUAGES = ["en", "fr", "es", "it", "de"];
if (!sessionStorage.getItem("sessionStarted")) {
  localStorage.removeItem("cguAccepted"); // reset UNE SEULE FOIS
  sessionStorage.setItem("sessionStarted", "true");
}
const SITE_VERSION = "2.0";
const savedVersion = localStorage.getItem("siteVersion");
const REVIEW_STORAGE_KEY = "morseTranslatorReviews";
const SENT_REVIEWS_KEY = "sentReviewsIds";

if (savedVersion !== SITE_VERSION) {
  localStorage.removeItem(REVIEW_STORAGE_KEY); // reset reviews if site version changed
  localStorage.setItem("siteVersion", SITE_VERSION);
}
const I18N = {
  en: {
    "page.title": "Morse Translator Download for Windows, Linux and macOS",
    "home.pageTitle": "Morse Translator: Home",
    "home.metaDescription": "Discover Morse Translator: online and offline tools to translate text to Morse code and Morse code to text.",
    "home.metaKeywords": "morse translator, morse code, online translator, desktop app, download",
    "home.ogTitle": "Morse Translator",
    "home.ogDescription": "Discover Morse Translator, a free tool for translating text and Morse code with online and desktop versions.",
    "online.pageTitle": "Online Morse Translator",
    "online.metaDescription": "Use the online Morse Translator to convert text and Morse code instantly in your browser.",
    "online.metaKeywords": "online morse translator, morse code, text to morse, morse to text, browser translator",
    "online.ogTitle": "Online Morse Translator",
    "online.ogDescription": "Translate text to Morse code and Morse code to text directly online, without installing anything.",
    "download.pageTitle": "Download Morse Translator",
    "download.metaDescription": "Download Morse Translator desktop versions for Windows, Linux, and macOS.",
    "download.metaKeywords": "morse translator download, morse desktop app, windows linux macos",
    "download.ogTitle": "Download Morse Translator",
    "download.ogDescription": "Get Morse Translator for Windows, Linux, and macOS and translate text to Morse code offline.",
    "meta.description": "Download Morse Translator for Windows, Linux and macOS. Translate text to Morse code and Morse to text with automatic translation support.",
    "meta.keywords": "morse translator, morse code, text to morse, morse to text, download, code, morse, mose, more, translator",
    "og.title": "Morse Translator Download for Windows, Linux and macOS",
    "og.description": "Translate text to Morse code and Morse to text. Download Morse Translator versions for desktop.",
    "og.locale": "en_US",
    "og.siteName": "Morse Translator",
    "all.copyError": "Copying is not allowed.",
    "twitter.title": "Morse Translator Download",
    "twitter.description": "Download Morse Translator and convert text and Morse code quickly.",
    "nav.label": "Language selector",
    "nav.selectLabel": "Select language",
    "mainNav.label": "Main navigation",
    "mainNav.home": "Home",
    "mainNav.online": "Online Translator",
    "mainNav.download": "Download",
    "mainNav.reviews": "Reviews",
    "header.title": "Morse Translator",
    "about.title": "About the app",
    "about.welcome": "Welcome to Morse Translator.",
    "about.line1": "This tool translates text into Morse code and Morse code back to text.",
    "about.line2": "In the app, write text in the right panel and it is automatically translated. To type Morse, write \"/\" to show a 4-symbol Morse keyboard.",
    "about.description": "Morse Translator is a simple desktop application that allows you to translate text to Morse code and vice versa.",
    "home.ctaDownload": "Go to downloads and install the offline software!",
    "home.ctaOnline": "Use online translator directly on the website!",
    "home.ctaReviews": "See reviews!",
    "home.whyTitle": "Why use my Morse Translator?",
    "home.why1": "Morse Translator is a free and open-source project, which means that you can use it without any cost and even contribute to its development if you want.",
    "home.advantages": "4 Key Advantages:",
    "home.advantage1Title": "No pubs!",
    "home.advantage1Desc": "The morse translator is a free project, which means you can use it without any cost.",
    "home.advantage2Title": "Fast and accurate translation",
    "home.advantage2Desc": "The app provides fast and accurate translations between text and Morse code, ensuring that your messages are correctly encoded or decoded.",
    "home.advantage3Title": "Punctuation compatibility",
    "home.advantage3Desc": "Morse Translator supports punctuation marks, making it more versatile for various types of messages.",
    "home.advantage4Title": "Offline software with visual interface",
    "home.advantage4Desc": "The app can be used offline and features a visual interface that enhances the user experience.",
    "home.historyTitle": "What is the morse code?",
    "home.explain1": "The <strong>morse code</strong> is a method of transmitting text information as a series of tones, short and long.<br>It was invented by Samuel Morse in the 1830s, to transmit messages over telegraph lines.<br>The most famous morse message was the famous <strong>S.O.S</strong> sent by the Titanic. This message was <strong>.../---/...</strong>.<br>Then, morse code became widely used in radio communication and maritime distress signals.<br>Currently, morse code is still used in <em><strong><a href=\"https://www.scouts-europe.org/scoutorama/l-apprentissage-du-morse/\">Scouts</a></strong></em> activities. I did this translator firstly because it was a necessary project to have the Informatic scout badge.<br>In this translator, I replaced common caracters by emoji to a better read ability.",
    "downloads.title": "Download Morse Translator",
    "downloads.latest": "Version 2.0 (Latest)",
    "downloads.line1": "The latest version of Morse Translator is now available for Windows, Linux, and macOS*.",
    "downloads.heroText": "The fastest way to translate Morse code on desktop ⚡",
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
    "reviews.pageTitle": "Morse Translator Reviews",
    "reviews.metaDescription": "Read and leave reviews about Morse Translator.",
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
    "footer.emailLabel": "Email:",
    "online.title": "Online Morse Translator",
    "online.description": "Enter text in the right panel to automatically translate it to Morse code. To type Morse, enter \"/\" to show a 4-symbol Morse keyboard.",
    "online.inputLabel": "Enter text",
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
    "page.title": "Télécharger Traducteur Morse pour Windows, Linux et macOS",
    "home.pageTitle": "Traducteur Morse : Accueil",
    "home.metaDescription": "Découvrez Traducteur Morse : outils en ligne et hors ligne pour traduire du texte en code Morse et du code Morse en texte.",
    "home.metaKeywords": "traducteur morse, code morse, traducteur en ligne, application bureau, téléchargement",
    "home.ogTitle": "Traducteur Morse",
    "home.ogDescription": "Découvrez Traducteur Morse, un outil gratuit pour traduire texte et code Morse avec des versions en ligne et bureau.",
    "online.pageTitle": "Traducteur Morse en ligne",
    "online.metaDescription": "Utilisez le traducteur Morse en ligne pour convertir instantanément du texte et du code Morse dans votre navigateur.",
    "online.metaKeywords": "traducteur morse en ligne, code morse, texte vers morse, morse vers texte, traducteur navigateur",
    "online.ogTitle": "Traducteur Morse en ligne",
    "online.ogDescription": "Traduisez du texte en code Morse et du code Morse en texte directement en ligne, sans installation.",
    "download.pageTitle": "Télécharger Traducteur Morse",
    "download.metaDescription": "Téléchargez les versions de bureau de Traducteur Morse pour Windows, Linux et macOS.",
    "download.metaKeywords": "téléchargement traducteur morse, application morse bureau, windows linux macos",
    "download.ogTitle": "Télécharger Traducteur Morse",
    "download.ogDescription": "Obtenez Traducteur Morse pour Windows, Linux et macOS et traduisez du texte en Morse hors ligne.",
    "meta.description": "Téléchargez Traducteur Morse pour Windows, Linux et macOS. Traduisez du texte en code Morse et du Morse en texte automatiquement.",
    "og.description": "Traduisez du texte en Morse et du Morse en texte. Téléchargez les versions desktop de Traducteur Morse.",
    "og.locale": "fr_FR",
    "og.siteName": "Traducteur Morse",
    "all.copyError": "La copie n'est pas autorisée.",
    "twitter.title": "Téléchargement Traducteur Morse",
    "twitter.description": "Téléchargez Traducteur Morse et convertissez facilement texte et code Morse.",
    "nav.label": "Sélecteur de langue",
    "nav.selectLabel": "Choisir la langue",
    "mainNav.label": "Navigation principale",
    "mainNav.home": "Accueil",
    "mainNav.online": "Traducteur en ligne",
    "mainNav.download": "Télécharger",
    "mainNav.reviews": "Avis",
    "header.title": "Traducteur Morse",
    "about.title": "À propos de l'application",
    "about.welcome": "Bienvenue sur Traducteur Morse.",
    "about.line1": "Cet outil traduit le texte en code Morse et le code Morse en texte.",
    "about.line2": "Dans l'application, écrivez votre texte dans le panneau de droite pour une traduction automatique. Pour écrire en Morse, tapez \"/\" pour afficher un clavier Morse à 4 symboles.",
    "about.description": "Traducteur Morse est une application de bureau simple qui permet de traduire du texte en code Morse et inversement.",
    "home.ctaDownload": "Accéder aux téléchargements et installez le logiciel !",
    "home.ctaOnline": "Utilisez le traducteur directement sur le site !",
    "home.ctaReviews": "Voir les avis !",
    "home.whyTitle": "Pourquoi utiliser mon Traducteur Morse ?",
    "home.why1": "Traducteur Morse est un projet gratuit et open source, ce qui signifie que vous pouvez l'utiliser sans aucun coût et même contribuer à son développement si vous le souhaitez.",
    "home.advantages": "4 avantages clés :",
    "home.advantage1Title": "Pas de pubs !",
    "home.advantage1Desc": "Le traducteur Morse est un projet gratuit, ce qui signifie que vous pouvez l'utiliser sans aucun coût.",
    "home.advantage2Title": "Traduction rapide et précise",
    "home.advantage2Desc": "L'application fournit des traductions rapides et précises entre le texte et le code Morse, garantissant que vos messages sont correctement codés ou décodés.",
    "home.advantage3Title": "Compatibilité de ponctuation",
    "home.advantage3Desc": "Traducteur Morse prend en charge les signes de ponctuation, ce qui le rend plus polyvalent pour différents types de messages.",
    "home.advantage4Title": "Logiciel hors ligne avec interface visuelle",
    "home.advantage4Desc": "L'application peut être utilisée hors ligne et dispose d'une interface visuelle qui améliore l'expérience utilisateur.",
    "home.historyTitle": "Qu'est-ce que le code Morse ?",
    "home.explain1": "Le <strong>code Morse</strong> est une méthode de transmission d'informations textuelles sous forme de séries de signaux courts et longs.<br>Il a été inventé par Samuel Morse dans les années 1830 pour transmettre des messages via des lignes télégraphiques.<br>Le message Morse le plus célèbre est le fameux <strong>S.O.S</strong> envoyé par le Titanic. Ce message était <strong>.../---/...</strong>.<br>Ensuite, le code Morse est devenu largement utilisé dans les communications radio et les signaux de détresse maritime.<br>Actuellement, le code Morse est encore utilisé dans les activités des <strong><em><a href=\"https://www.scouts-europe.org/scoutorama/l-apprentissage-du-morse/\">Scouts</a></em></strong>. J'ai réalisé ce traducteur principalement parce que c'était un projet nécessaire pour obtenir le badge informatique des scouts.<br>Dans ce traducteur, j'ai remplacé les caractères courants par des emoji pour une meilleure lisibilité.",
    "downloads.title": "Télécharger Traducteur Morse",
    "downloads.latest": "Version 2.0 (Dernière)",
    "downloads.line1": "La dernière version de Traducteur Morse est maintenant disponible pour Windows, Linux et macOS*.",
    "downloads.heroText": "La façon la plus rapide de traduire le Morse sur desktop ⚡",
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
    "reviews.pageTitle": "Avis sur Traducteur Morse",
    "reviews.metaDescription": "Lisez et laissez des avis sur Traducteur Morse.",
    "reviews.metaKeywords": "avis traducteur morse, retours traducteur morse, avis utilisateurs",
    "reviews.ogTitle": "Avis sur Traducteur Morse",
    "reviews.ogDescription": "Partagez votre expérience avec Traducteur Morse.",
    "reviews.twitterTitle": "Avis sur Traducteur Morse",
    "reviews.twitterDescription": "Lisez et laissez des avis sur Traducteur Morse.",
    "reviews.title": "Traducteur Morse",
    "reviews.subtitle": "Partagez votre expérience",
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
    "footer.emailLabel": "Email :",
      "online.title": "Traducteur Morse en ligne",
    "online.description": "Entrez du texte dans le champ de droite pour le traduire automatiquement en Morse. Pour taper en Morse, écrivez \"/\" pour afficher un clavier Morse à 4 symboles.",
    "online.inputPlaceholder": "Entrez du texte ou du code Morse",
    "online.inputLabel": "Entrez du texte",
    "online.outputLabel": "Sortie Morse",
    "online.copyButton": "Copier le Morse",
    "online.copySuccess": "Morse copié dans le presse-papier !",
    "online.copyError": "Erreur lors de la copie du code Morse.",
    "cgu.description": "En utilisant ce site, vous acceptez les termes et conditions suivants : Le Traducteur Morse est fourni tel quel sans aucune garantie. Le développeur n'est pas responsable de tout dommage ou perte de données résultant de l'utilisation de ce site. Les utilisateurs sont responsables de s'assurer que leur utilisation du Traducteur Morse est conforme à toutes les lois et réglementations applicables. En utilisant ce site, vous acceptez également notre Politique de confidentialité, qui explique comment nous collectons et utilisons vos données. Si vous n'acceptez pas ces termes, veuillez ne pas utiliser ce site. Toute reproduction ou redistribution de ce site ou de son contenu est interdite sans l'autorisation écrite préalable du développeur.",
    "cgu.title": "Conditions d'utilisation",
    "cgu.accept": "Accepter",
    "cgu.decline": "Refuser"

  },
  es: {
    "page.title": "Descargar Morse Translator para Windows, Linux y macOS",
    "home.pageTitle": "Morse Translator: Inicio",
    "home.metaDescription": "Descubre Morse Translator: herramientas en línea y fuera de línea para traducir texto a código Morse y código Morse a texto.",
    "home.metaKeywords": "traductor morse, código morse, traductor en línea, aplicación de escritorio, descarga",
    "home.ogTitle": "Morse Translator",
    "home.ogDescription": "Descubre Morse Translator, una herramienta gratuita para traducir texto y código Morse con versiones en línea y de escritorio.",
    "online.pageTitle": "Traductor Morse en línea",
    "online.metaDescription": "Usa el traductor Morse en línea para convertir texto y código Morse al instante en tu navegador.",
    "online.metaKeywords": "traductor morse en línea, código morse, texto a morse, morse a texto, navegador",
    "online.ogTitle": "Traductor Morse en línea",
    "online.ogDescription": "Traduce texto a código Morse y código Morse a texto directamente en línea, sin instalar nada.",
    "download.pageTitle": "Descargar Morse Translator",
    "download.metaDescription": "Descarga las versiones de escritorio de Morse Translator para Windows, Linux y macOS.",
    "download.metaKeywords": "descarga traductor morse, app morse escritorio, windows linux macos",
    "download.ogTitle": "Descargar Morse Translator",
    "download.ogDescription": "Obtén Morse Translator para Windows, Linux y macOS y traduce texto a Morse sin conexión.",
    "meta.description": "Descarga Morse Translator para Windows, Linux y macOS. Traduce texto a código Morse y Morse a texto automáticamente.",
    "og.description": "Traduce texto a Morse y Morse a texto. Descarga versiones de escritorio de Morse Translator.",
    "og.locale": "es_ES",
    "og.siteName": "Morse Translator",
    "all.copyError": "No se permite copiar.",
    "twitter.title": "Descarga Morse Translator",
    "twitter.description": "Descarga Morse Translator y convierte texto y código Morse fácilmente.",
    "nav.label": "Selector de idioma",
    "nav.selectLabel": "Seleccionar idioma",
    "mainNav.label": "Navegación principal",
    "mainNav.home": "Inicio",
    "mainNav.online": "Traductor en línea",
    "mainNav.download": "Descargar",
    "mainNav.reviews": "Reseñas",
    "header.title": "Traductor Morse",
    "about.title": "Sobre la aplicación",
    "about.welcome": "Bienvenido a Morse Translator.",
    "about.line1": "Esta herramienta traduce texto a código Morse y código Morse a texto.",
    "about.line2": "En la aplicación, escribe texto en el panel derecho y se traducirá automáticamente. Para escribir en Morse, escribe \"/\" para mostrar un teclado Morse de 4 símbolos.",
    "about.description": "Morse Translator es una aplicación de escritorio sencilla que permite traducir texto a código Morse y viceversa.",
    "home.ctaDownload": "Ir a descargas e instala el software sin conexión.",
    "home.ctaOnline": "Usa el traductor en línea directamente en el sitio web.",
    "home.ctaReviews": "Ver reseñas!",
    "home.whyTitle": "¿Por qué usar mi Traductor Morse?",
    "home.why1": "Morse Translator es un proyecto gratuito y de código abierto, lo que significa que puedes usarlo sin ningún costo e incluso contribuir a su desarrollo si lo deseas.",
    "home.advantages": "4 ventajas clave:",
    "home.advantage1Title": "¡Sin publicidad!",
    "home.advantage1Desc": "El traductor Morse es un proyecto gratuito, lo que significa que puedes usarlo sin ningún costo.",
    "home.advantage2Title": "Traducción rápida y precisa",
    "home.advantage2Desc": "La aplicación ofrece traducciones rápidas y precisas entre texto y código Morse, asegurando que tus mensajes se codifiquen o decodifiquen correctamente.",
    "home.advantage3Title": "Compatibilidad con puntuación",
    "home.advantage3Desc": "Morse Translator admite signos de puntuación, lo que lo hace más versátil para varios tipos de mensajes.",
    "home.advantage4Title": "Software sin conexión con interfaz visual",
    "home.advantage4Desc": "La aplicación se puede usar sin conexión y cuenta con una interfaz visual que mejora la experiencia del usuario.",
    "home.historyTitle": "¿Qué es el código Morse?",
    "home.explain1": "El <strong>código Morse</strong> es un método de transmisión de información textual como una serie de tonos, cortos y largos.<br>Fue inventado por Samuel Morse en la década de 1830 para transmitir mensajes a través de líneas telegráficas.<br>El mensaje Morse más famoso fue el famoso <strong>S.O.S</strong> enviado por el Titanic. Este mensaje era <strong>.../---/...</strong>.<br>Luego, el código Morse se volvió ampliamente utilizado en la comunicación por radio y las señales de socorro marítimas.<br>Actualmente, el código Morse todavía se utiliza en las actividades de los <strong><em><a href=\"https://www.scouts-europe.org/scoutorama/l-apprentissage-du-morse/\">Scouts</a></em></strong>. Hice este traductor principalmente porque era un proyecto necesario para obtener la insignia informática de los scouts.<br>En este traductor, reemplacé los caracteres comunes por emoji para una mejor legibilidad.",
    "downloads.title": "Descargar Morse Translator",
    "downloads.latest": "Versión 2.0 (Última)",
    "downloads.line1": "La última versión de Morse Translator ahora está disponible para Windows, Linux y macOS*.",
    "downloads.heroText": "La forma más rápida de traducir Morse en el escritorio ⚡",
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
    "downloads.note": "* La versión de macOS no ha sido probada, por lo que puede no funcionar como se espera. Si tienes algún problema, por favor avísame por correo en la sección de contacto.",
    "reviews.link": "Leer y dejar una reseña",
    "reviews.pageTitle": "Reseñas de Morse Translator",
    "reviews.metaDescription": "Lee y deja reseñas sobre Morse Translator.",
    "reviews.metaKeywords": "reseñas morse translator, opiniones morse translator, reseñas usuarios",
    "reviews.ogTitle": "Reseñas de Morse Translator",
    "reviews.ogDescription": "Comparte tu experiencia con Morse Translator.",
    "reviews.twitterTitle": "Reseñas de Morse Translator",
    "reviews.twitterDescription": "Lee y deja reseñas sobre Morse Translator.",
    "reviews.title": "Traductor Morse",
    "reviews.subtitle": "Comparte tu experiencia",
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
    "footer.emailLabel": "Email:",
      "online.title": "Traductor Morse en línea",
    "online.description": "Ingrese texto en el campo de la derecha para traducirlo automáticamente a Morse. Para escribir en Morse, escriba \"/\" para mostrar un teclado Morse de 4 símbolos.",
    "online.inputPlaceholder": "Introduce texto o código Morse",
    "online.inputLabel": "Ingrese texto",
    "online.outputLabel": "Salida Morse",
    "online.copyButton": "Copiar Morse",
    "online.copySuccess": "Morse copiado al portapapeles.",
    "online.copyError": "Error al copiar el código Morse.",
    "cgu.description": "Al usar este sitio web, aceptas los siguientes términos y condiciones: El Traductor Morse se proporciona tal cual sin ninguna garantía. El desarrollador no es responsable de ningún daño o pérdida de datos que resulte del uso de este sitio web. Los usuarios son responsables de asegurarse de que su uso del Traductor Morse cumpla con todas las leyes y regulaciones aplicables. Al usar este sitio web, también aceptas nuestra Política de Privacidad, que explica cómo recopilamos y usamos tus datos. Si no estás de acuerdo con estos términos, por favor no uses este sitio web. Cualquier reproducción o redistribución de este sitio web o su contenido está prohibida sin el permiso previo por escrito del desarrollador.",
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
    "home.ogDescription": "Scopri Morse Translator, uno strumento gratuito per tradurre testo e codice Morse con versioni online e desktop.",
    "online.pageTitle": "Traduttore Morse online",
    "online.metaDescription": "Usa il traduttore Morse online per convertire istantaneamente testo e codice Morse nel browser.",
    "online.metaKeywords": "traduttore morse online, codice morse, testo in morse, morse in testo, browser",
    "online.ogTitle": "Traduttore Morse online",
    "online.ogDescription": "Traduci testo in codice Morse e codice Morse in testo direttamente online, senza installare nulla.",
    "download.pageTitle": "Scarica Morse Translator",
    "download.metaDescription": "Scarica le versioni desktop di Morse Translator per Windows, Linux e macOS.",
    "download.metaKeywords": "download traduttore morse, app morse desktop, windows linux macos",
    "download.ogTitle": "Scarica Morse Translator",
    "download.ogDescription": "Scarica Morse Translator per Windows, Linux e macOS e traduci testo in Morse offline.",
    "meta.description": "Scarica Morse Translator per Windows, Linux e macOS. Traduci testo in codice Morse e Morse in testo automaticamente.",
    "og.description": "Traduci testo in Morse e Morse in testo. Scarica le versioni desktop di Morse Translator.",
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
    "header.title": "Traduttore Morse",
    "about.title": "Informazioni sull'app",
    "about.welcome": "Benvenuto in Morse Translator.",
    "about.line1": "Questo strumento traduce testo in codice Morse e codice Morse in testo.",
    "about.line2": "Nell'app, scrivi il testo nel pannello di destra e verrà tradotto automaticamente. Per scrivere in Morse, digita \"/\" per mostrare una tastiera Morse con 4 simboli.",
    "about.description": "Morse Translator e' una semplice applicazione desktop che consente di tradurre testo in codice Morse e viceversa.",
    "home.ctaDownload": "Vai ai download e installa il software offline!",
    "home.ctaOnline": "Usa il traduttore online direttamente sul sito!",
    "home.ctaReviews": "Vedi le recensioni!",
    "home.whyTitle": "Perché usare il mio Morse Translator?",
    "home.why1": "Morse Translator è un progetto gratuito e open source, il che significa che puoi usarlo senza alcun costo e persino contribuire al suo sviluppo se vuoi.",
    "home.advantages": "4 vantaggi principali:",
    "home.advantage1Title": "Niente pubblicità!",
    "home.advantage1Desc": "Il traduttore Morse è un progetto gratuito, il che significa che puoi usarlo senza alcun costo.",
    "home.advantage2Title": "Traduzione veloce e accurata",
    "home.advantage2Desc": "L'app fornisce traduzioni rapide e accurate tra testo e codice Morse, garantendo che i tuoi messaggi siano codificati o decodificati correttamente.",
    "home.advantage3Title": "Compatibilità con la punteggiatura",
    "home.advantage3Desc": "Morse Translator supporta i segni di punteggiatura, rendendolo più versatile per vari tipi di messaggi.",
    "home.advantage4Title": "Software offline con interfaccia visiva",
    "home.advantage4Desc": "L'app può essere utilizzata offline e dispone di un'interfaccia visiva che migliora l'esperienza utente.",
    "home.historyTitle": "Cos'è il codice Morse?",
    "home.explain1": "Il <strong>codice Morse</strong> è un metodo di trasmissione di informazioni testuali come una serie di toni, corti e lunghi.<br>È stato inventato da Samuel Morse negli anni 1830 per trasmettere messaggi attraverso linee telegrafiche.<br>Il messaggio Morse più famoso è il famoso <strong>S.O.S</strong> inviato dal Titanic. Questo messaggio era <strong>.../---/...</strong>.<br>Successivamente, il codice Morse divenne ampiamente utilizzato nelle comunicazioni radio e nei segnali di soccorso marittimi.<br>Attualmente, il codice Morse è ancora utilizzato nelle attività degli <strong><em><a href=\"https://www.scouts-europe.org/scoutorama/l-apprentissage-du-morse/\">Scouts</a></em></strong>. Ho realizzato questo traduttore principalmente perché era un progetto necessario per ottenere il badge informatico degli scout.<br>In questo traduttore, ho sostituito i caratteri comuni con emoji per una migliore leggibilità.",
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
    "downloads.note": "* La versione macOS non è stata testata, quindi potrebbe non funzionare come previsto. Se riscontri problemi, fammelo sapere via email nella sezione contatto.",
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
    "footer.emailLabel": "Email:",
    "online.title": "Traduttore Morse Online",
    "online.description": "Inserisci il testo nel campo di destra per tradurlo automaticamente in codice Morse. Per digitare in Morse, digita \"/\" per mostrare una tastiera Morse con 4 simboli.",
    "online.inputPlaceholder": "Inserisci testo o codice Morse",
    "online.inputLabel": "Inserisci il testo",
    "online.outputLabel": "Output Morse",
    "online.copyButton": "Copia Morse",
    "online.copySuccess": "Morse copiato negli appunti!",
    "online.copyError": "Errore durante la copia del codice Morse.",
    "cgu.description": "Utilizzando questo sito web, accetti i seguenti termini e condizioni: Il Traduttore Morse è fornito così com'è senza alcuna garanzia. Lo sviluppatore non è responsabile per eventuali danni o perdite di dati derivanti dall'uso di questo sito web. Gli utenti sono responsabili di assicurarsi che il loro uso del Traduttore Morse sia conforme a tutte le leggi e regolamenti applicabili. Utilizzando questo sito web, accetti anche la nostra Informativa sulla privacy, che spiega come raccogliamo e utilizziamo i tuoi dati. Se non accetti questi termini, ti preghiamo di non utilizzare questo sito web. Qualsiasi riproduzione o ridistribuzione di questo sito web o del suo contenuto è proibita senza previa autorizzazione scritta dello sviluppatore.",
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
    "home.ogDescription": "Entdecke Morse Translator, ein kostenloses Tool zum Übersetzen von Text und Morsecode mit Online- und Desktop-Versionen.",
    "online.pageTitle": "Online Morse Übersetzer",
    "online.metaDescription": "Verwende den Online Morse Übersetzer, um Text und Morsecode sofort in deinem Browser zu konvertieren.",
    "online.metaKeywords": "online morse übersetzer, morsecode, text zu morse, morse zu text, browser übersetzer",
    "online.ogTitle": "Online Morse Übersetzer",
    "online.ogDescription": "Übersetze Text in Morsecode und Morsecode in Text direkt online, ohne etwas zu installieren.",
    "download.pageTitle": "Morse Translator herunterladen",
    "download.metaDescription": "Lade die Desktop-Versionen von Morse Translator für Windows, Linux und macOS herunter.",
    "download.metaKeywords": "morse übersetzer herunterladen, morse desktop app, windows linux macos",
    "download.ogTitle": "Morse Translator herunterladen",
    "download.ogDescription": "Hol dir Morse Translator für Windows, Linux und macOS und übersetze Text offline in Morsecode.",
    "meta.description": "Lade Morse Translator für Windows, Linux und macOS herunter. Übersetze Text in Morsecode und Morsecode in Text mit automatischer Übersetzung.",
    "og.description": "Übersetze Text in Morse und Morse in Text. Lade die Desktop-Versionen von Morse Translator herunter.",
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
    "header.title": "Morse-Übersetzer",
    "about.title": "Über die App",
    "about.welcome": "Willkommen bei Morse Translator.",
    "about.line1": "Dieses Tool übersetzt Text in Morsecode und Morsecode zurück in Text.",
    "about.line2": "Schreibe in der App deinen Text in das rechte Feld, dann wird er automatisch übersetzt. Um Morse zu tippen, gib \"/\" ein, um eine Morse-Tastatur mit 4 Symbolen anzuzeigen.",
    "about.description": "Morse Translator ist eine einfache Desktop-Anwendung, mit der du Text in Morsecode und zurueck uebersetzen kannst.",
    "home.ctaDownload": "Gehe zu Downloads und installiere die Offline-Software!",
    "home.ctaOnline": "Verwende den Online-Übersetzer direkt auf der Website!",
    "home.ctaReviews": "Sieh dir Bewertungen an!",
    "home.whyTitle": "Warum meinen Morse Translator verwenden?",
    "home.why1": "Morse Translator ist ein kostenloses Open-Source-Projekt, was bedeutet, dass du es ohne Kosten nutzen und sogar zu seiner Entwicklung beitragen kannst, wenn du möchtest.",
    "home.advantages": "4 Hauptvorteile:",
    "home.advantage1Title": "Keine Werbung!",
    "home.advantage1Desc": "Der Morse Translator ist ein kostenloses Projekt, was bedeutet, dass du es ohne Kosten nutzen kannst.",
    "home.advantage2Title": "Schnelle und genaue Übersetzung",
    "home.advantage2Desc": "Die App bietet schnelle und genaue Übersetzungen zwischen Text und Morsecode und stellt sicher, dass deine Nachrichten korrekt codiert oder decodiert werden.",
    "home.advantage3Title": "Kompatibilität mit Satzzeichen",
    "home.advantage3Desc": "Morse Translator unterstützt Satzzeichen und ist dadurch vielseitiger für verschiedene Nachrichtentypen.",
    "home.advantage4Title": "Offline-Software mit visueller Oberfläche",
    "home.advantage4Desc": "Die App kann offline verwendet werden und verfügt über eine visuelle Oberfläche, die das Benutzererlebnis verbessert.",
    "home.historyTitle": "Was ist der Morsecodes?",
    "home.explain1": "Der <strong>Morsecode</strong> ist eine Methode zur Übertragung von Textinformationen als eine Reihe von kurzen und langen Signalen.<br>Er wurde in den 1830er Jahren von Samuel Morse erfunden, um Nachrichten über Telegrafenleitungen zu übertragen.<br>Die berühmteste Morse-Nachricht war das berühmte <strong>S.O.S</strong>, das von der Titanic gesendet wurde. Diese Nachricht war <strong>.../---/...</strong>.<br>Danach wurde der Morsecode weit verbreitet in der Funkkommunikation und bei Seenotsignalen verwendet.<br>Derzeit wird der Morsecode immer noch in den Aktivitäten der <strong><em><a href=\"https://www.scouts-europe.org/scoutorama/l-apprentissage-du-morse/\">Scouts</a></em></strong> verwendet. Ich habe diesen Übersetzer hauptsächlich erstellt, weil es ein notwendiges Projekt war, um das Informatik-Abzeichen der Pfadfinder zu erhalten.<br>In diesem Übersetzer habe ich häufige Zeichen durch Emojis ersetzt, um die Lesbarkeit zu verbessern.",
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
    "downloads.note": "* Die macOS-Version wurde nicht getestet und funktioniert daher möglicherweise nicht wie erwartet. Wenn du Probleme bemerkst, melde dich bitte per E-Mail im Kontaktbereich.",
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
    "footer.emailLabel": "E-Mail:",
    "online.title": "Online Morse Übersetzer",
    "online.description": "Geben Sie Text in das rechte Feld ein, um ihn automatisch ins Morse zu übersetzen. Um Morse zu schreiben, geben Sie \"/\" ein, um eine Morse-Tastatur mit 4 Symbolen anzuzeigen.",
    "online.inputPlaceholder": "Gib Text oder Morsecode ein",
    "online.inputLabel": "Text eingeben",
    "online.outputLabel": "Morsecode Ausgabe",
    "online.copyButton": "Morsecode kopieren",
    "online.copySuccess": "Morsecode in die Zwischenablage kopiert!",
    "online.copyError": "Fehler beim Kopieren des Morse-Codes.",
    "cgu.description": "Durch die Nutzung dieser Website akzeptieren Sie die folgenden Geschäftsbedingungen: Der Morse Translator wird ohne jegliche Garantien bereitgestellt. Der Entwickler ist nicht verantwortlich für Schäden oder Datenverluste, die durch die Nutzung dieser Website entstehen. Benutzer sind dafür verantwortlich, sicherzustellen, dass ihre Nutzung des Morse Translators allen geltenden Gesetzen und Vorschriften entspricht. Durch die Nutzung dieser Website stimmen Sie auch unserer Datenschutzrichtlinie zu, die erklärt, wie wir Ihre Daten sammeln und verwenden. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie diese Website bitte nicht. Jegliche Vervielfältigung oder Weiterverbreitung dieser Website oder ihres Inhalts ist ohne vorherige schriftliche Genehmigung des Entwicklers untersagt.",
    "cgu.title": "Nutzungsbedingungen",
    "cgu.accept": "Akzeptieren",
    "cgu.decline": "Ablehnen"
  }
};

const DOWNLOAD_PATHS = {
  windows: {
    setup: "latest/win/Traducteur_Morse.msi",
    p: "latest/win/traducteur_morse_2.exe"
  },
  linux: {
    app: "latest/lin/traducteur_morse_2"
  },
  macos: {
    app: "latest/mac/traducteur_morse_2.zip",
    dmg: "latest/mac/Traducteur_Morse.dmg"
  }
};



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

    element.innerHTML = value;
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
    href = DOWNLOAD_PATHS.macos[selectedType] || DOWNLOAD_PATHS.macos.p;
    typeSelect.disabled = false;
  }

  downloadLink.href = href;
  downloadLink.setAttribute("download", "");
  if (document.location.href.endsWith("/403/")) {
    document.location.href = "index.html?lang=" + document.documentElement.lang;
}
}

async function loadReviews() {
  let local = [];
  let server = [];

  // 📦 local
  try {
    const raw = localStorage.getItem(REVIEW_STORAGE_KEY);
    local = raw ? JSON.parse(raw) : [];
  } catch {
    local = [];
  }

  // 🌐 serveur
  try {
    const res = await fetch('reviews.json?cache=' + Date.now());
    server = await res.json();
  } catch {
    server = [];
  }

  // 🔀 fusion (évite doublons simples)
  const all = [...server];

  local.forEach(l => {
    if (!all.find(s =>
      s.name === l.name &&
      s.message === l.message &&
      s.date === l.date
    )) {
      all.push(l);
    }
  });

  // 💾 sauvegarde locale sync
  localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(all));

  return all;
}


async function saveReviewToServer(review) {
  try {
    await fetch('reviews.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
    // ✅ si déjà envoyé → skip
    if (sentIds.includes(review.id)) continue;

    // 🌐 envoi
    await saveReviewToServer(review);

    // 💾 marquer comme envoyé
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
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: "2011", // 🔐 même clé que PHP
        ids: ids
      })
    });

    const result = await res.json();

    if (result.success) {
      console.log("Avis supprimés");

      // 💾 aussi supprimer localement
      let local = JSON.parse(localStorage.getItem("morseTranslatorReviews")) || [];
      local = local.filter(r => !ids.includes(r.id));
      localStorage.setItem("morseTranslatorReviews", JSON.stringify(local));

    } else {
      console.error(result.error);
    }

  } catch (e) {
    console.error("Erreur suppression", e);
  }
}

const isAdmin = localStorage.getItem("isAdmin") === "true";

if (isAdmin) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => {
    deleteReviews([review.id]);
    card.remove();
  };
  card.appendChild(deleteBtn);
}

async function initReviewsPage(language) {
  const form = document.getElementById("reviewForm");
  const status = document.getElementById("reviewStatus");
  const list = document.getElementById("reviewList");

  if (!form || !status || !list) return;

  // 🔄 Charger tout
  const serverReviews = await (async () => {
    try {
      const res = await fetch('reviews.json?cache=' + Date.now());
      return await res.json();
    } catch {
      return [];
    }
  })();

  let localReviews = [];
  try {
    localReviews = JSON.parse(localStorage.getItem(REVIEW_STORAGE_KEY)) || [];
  } catch {
    localReviews = [];
  }

  // 🔁 sync local → serveur
  await syncLocalToServer(localReviews);

  // 🔀 fusion finale
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

    // 💾 local immédiat
    const updated = [newReview, ...await loadReviews()].slice(0, 20);
    saveReviewsLocal(updated);

    // 🌐 envoi serveur
    await saveReviewToServer(newReview);

    status.textContent = strings["reviews.statusSuccess"];
    form.reset();

    renderReviews(updated, langNow);
  });
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
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  alert(I18N[document.documentElement.lang || "en"]["all.copyError"]);
});

// Show a banner to show the CGU
const CGU = "By using this website, you agree to the following terms and conditions: The Morse Translator is provided as is without any warranties. The developer is not responsible for any damage or loss of data resulting from the use of this website. Users are responsible for ensuring that their use of the Morse Translator complies with all applicable laws and regulations. By using this website, you also agree to our Privacy Policy, which explains how we collect and use your data. If you do not agree to these terms, please do not use this website. Any reproduction or redistribution of this website or its content is prohibited without prior written permission from the developer.";
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("cguAccepted")) {
    document.body.insertAdjacentHTML("afterbegin", `
      <div id="overlay" class="cgu-banner">
  <div id="popup" class="cgu-banner">
    <h2 data-i18n="cgu.title">Conditions d'utilisation</h2>
    <p data-i18n="cgu.description">${CGU}</p>
    <button data-i18n="cgu.accept" id="acceptCgu">Accepter</button>
    <button data-i18n="cgu.decline" id="declineCgu">Refuser</button>
  </div>
</div>
      `);
    document.getElementById("acceptCgu").addEventListener("click", () => {
      localStorage.setItem("cguAccepted", "true");
      document.querySelector(".cgu-banner").remove();
    });
    document.getElementById("declineCgu").addEventListener("click", () => {
      window.history.back();
    });
  };
});