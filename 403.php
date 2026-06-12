<?php
$url = $_SERVER['REQUEST_URI'];
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>403 - Accès refusé</title>

<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Conteneur principal */
.container {
    text-align: center;
    animation: fadeIn 1s ease-in-out;
}

/* Gros 404 */
h1 {
    font-size: 120px;
    margin: 0;
    text-shadow: 0 0 20px rgba(255,255,255,0.3);
}

/* Texte */
p {
    font-size: 20px;
    margin: 10px 0;
    opacity: 0.8;
}

/* URL */
.url {
    font-size: 14px;
    opacity: 0.6;
    margin-bottom: 20px;
}

/* Bouton */
a {
    display: inline-block;
    padding: 12px 25px;
    background: #00c6ff;
    color: white;
    text-decoration: none;
    border-radius: 30px;
    transition: 0.3s;
}

a:hover {
    background: #0072ff;
    transform: scale(1.05);
}

/* Animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.tenor-gif-embed {
    margin: 20px auto;
    max-width: 300px;
}
</style>

</head>
<body>

<div class="container">
    <h1>403</h1>
    <div class="tenor-gif-embed" data-postid="15080574681827523342" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/forbidden-error-gif-15080574681827523342">Forbidden Error GIF</a>from <a href="https://tenor.com/search/forbidden-gifs">Forbidden GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    <p>Oups... vous n'avez pas l'autorisation d'accéder à cette page 😅</p>
    <div class="url"><?php echo htmlspecialchars($url); ?></div>
    <a href="/">Retour à l'accueil</a>
</div>

</body>
</html>
