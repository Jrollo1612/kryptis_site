# app.py

from flask import Flask, send_from_directory, jsonify
import os

# Initialisation de l’application Flask
app = Flask(__name__)

# Chemin vers le dossier où se trouvent vos fichiers statiques (par défaut : /)
STATIC_DIR = os.path.dirname(os.path.abspath(__file__))  # Le dossier du script
ROOT_PATH = os.path.join(STATIC_DIR, "")  # On suppose que vos fichiers sont dans un sous-dossier

# Si tu veux servir directement depuis le répertoire racine (comme /index.html)
@app.route('/')
def serve_index():
    return send_from_directory(ROOT_PATH, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    # Servez tous les fichiers dans le dossier statique
    try:
        return send_from_directory(ROOT_PATH, path)
    except FileNotFoundError:
        return f"<h1>Erreur 404 : Le fichier {path} n'existe pas.</h1>", 404

# Pour tester l’API de santé (facultatif)
@app.route('/api/health')
def health():
    return jsonify({"status": "OK", "time": "2026-05-11T15:30Z"}), 200

if __name__ == '__main__':
    # Assurez que le dossier existe (utile pour éviter des erreurs)
    if not os.path.exists(ROOT_PATH):
        print(f"[!] Dossier {ROOT_PATH} introuvable. Veuillez créer un dossier 'static' dans votre projet.")
        print("👉 Structure recommandée :")
        print("mon-site-web/")
        print("  ├── index.html")
        print("  ├── style.css")
        print("  └── app.py")
        exit(1)

    # Lance le serveur local
    app.run(host='127.0.0.1', port=8000, debug=True)
