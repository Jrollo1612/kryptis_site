<?php
http_response_code(404);
$url = $_SERVER['REQUEST_URI'];
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>404 - Page introuvable</title>

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
#game {
  position: relative;
  width: 600px;
  height: 200px;
  margin: 40px auto;
  background: #111;
  overflow: hidden;
  border-radius: 10px;
}

#player {
  position: absolute;
  bottom: 0;
  left: 50px;
  width: 40px;
  height: 40px;
  background: #00ffcc;
  border-radius: 5px;
}

.obstacle {
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 40px;
  background: #ff4d4d;
}

#score {
  margin-top: 10px;
  font-size: 20px;
}
a {
  color: #00ffcc;
  text-decoration: none;
}
</style>

</head>
<body>

<div class="container">
    <h1>404</h1>
    <p>Oups... cette page n'existe pas 😅</p>
    <div class="url"><?php echo htmlspecialchars($url); ?></div>
    <a href="/">Retour à l'accueil</a>
</body>