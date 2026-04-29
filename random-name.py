import random

# ===== Données =====

PRENOMS_FEMININS = [
    "Émilie", "Léa", "Clara", "Sophie", "Amélie",
    "Camille", "Nina", "Mira", "Zoé",
    "Sarah", "Chloé", "Yasmine", "Marie",
    "Agathe", "Eleonore", "Lucille", "Lola",
    "Mathilde", "Olivia"
]

PRENOMS_MASCULINS = [
    "Lucien", "Théo", "Jules", "Arnaud", "Léo",
    "Yannick", "Mathieu", "Julien", "Raphaël", "Noah",
    "Martin", "Paul", "Alexis", "Jean", 
    "Simon", "Soren", "Timéo", "Hugo", "Axel",
    "Joseph", "Antoine", "Damien",
    "Emmanuel", "Thomas", "Benjamin",
    "Quentin", "Nathan", "Valentin"
]

PRENOMS_ENG = [
    "Eliot", "Avery", "Zayn", "Nova", "Kairo",
    "Dax", "Liam", "Oscar", "Milo", "Remy"
]

NOMS = [
    "Beauchamp", "Leblanc", "Dumas", "Moreau", "Roussel",
    "Poirier", "Tanguy", "Buisson", "Bouchard", "Gauthier",
    "Roux", "Lemaire", "Delorme", "Fontaine", "Vidal",
    "Dupont", "Lefebvre", "Bernard", "Martin", "Leclerc",
    "Rivière", "Dufour", "Chaumont"
]

EMOJIS = ["😊", "🚀", "🔥", "✨", "🎮", "🌸", "😎"]

SEPARATEURS = ["_", "-", ".", "~", ""]

# ===== Générateur =====

def choisir_prenom():
    choix = random.random()
    
    if choix < 0.4:
        return random.choice(PRENOMS_FEMININS)
    elif choix < 0.8:
        return random.choice(PRENOMS_MASCULINS)
    else:
        return random.choice(PRENOMS_ENG)

def generer_pseudo():
    prenom = choisir_prenom()
    nom = random.choice(NOMS)
    sep = random.choice(SEPARATEURS)

    style = random.choice([
        "prenom",                 # Léa
        "prenom_nom",             # Léa Dupont
        "prenom_initiale",        # Léa D.
        "prenom_numero",          # lea_74
        "pseudo_internet",        # lea.dev
        "pseudo_simple",          # MaxPower
        "avec_emoji",             # Léa 😊
        "mix"                     # lea-dupont_38
    ])

    # Nettoyage (minuscules pour certains styles)
    prenom_clean = prenom.lower()
    nom_clean = nom.lower()

    if style == "prenom":
        return prenom

    elif style == "prenom_nom":
        return f"{prenom} {nom}"

    elif style == "prenom_initiale":
        return f"{prenom} {nom[0]}."

    elif style == "prenom_numero":
        return f"{prenom_clean}{sep}{random.randint(10,99)}"

    elif style == "pseudo_internet":
        return f"{prenom_clean}{sep}{random.choice(['dev','pro','yt','x'])}"

    elif style == "pseudo_simple":
        return f"{prenom}{random.choice(['X','Pro',''])}"

    elif style == "avec_emoji":
        return f"{prenom} {random.choice(EMOJIS)}"

    elif style == "mix":
        return f"{prenom_clean}{sep}{nom_clean}{sep}{random.randint(10,99)}"

# ===== Test =====

print("➡️ Générateur de pseudos réalistes :\n")

for _ in range(3):
    print(generer_pseudo())
