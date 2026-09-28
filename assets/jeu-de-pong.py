from browser import document, window
from browser.timer import set_interval
import random


# =========================
# Configuration
# =========================

WIDTH = 500
HEIGHT = 500

BALL_SIZE = 15
PADDLE_WIDTH = 100
PADDLE_HEIGHT = 10

BALL_SPEED_X = 3
BALL_SPEED_Y = 3

PADDLE_SPEED = 6


# =========================
# Canvas
# =========================

canvas = document.createElement("canvas")
canvas.width = WIDTH
canvas.height = HEIGHT

canvas.style.display = "block"
canvas.style.margin = "auto"

document["brython-game"].parentNode.insertBefore(
    canvas,
    document["brython-game"]
)

ctx = canvas.getContext("2d")


# =========================
# Balle
# =========================

class Ball:

    def __init__(self):
        self.x = WIDTH / 2 - BALL_SIZE / 2
        self.y = 100

        self.dx = random.choice([-3, -2, 2, 3])
        self.dy = 3

        self.ground = False

    def reset(self):
        self.x = WIDTH / 2 - BALL_SIZE / 2
        self.y = 100

        self.dx = random.choice([-3, -2, 2, 3])
        self.dy = 3

    def draw(self):
        ctx.beginPath()
        ctx.arc(
            self.x + BALL_SIZE / 2,
            self.y + BALL_SIZE / 2,
            BALL_SIZE / 2,
            0,
            2 * 3.14159
        )
        ctx.fillStyle = "#0092F9"
        ctx.fill()
        ctx.closePath()

    def update(self):

        self.x += self.dx
        self.y += self.dy

        # Mur gauche
        if self.x <= 0:
            self.x = 0
            self.dx = abs(self.dx)

        # Mur droit
        if self.x + BALL_SIZE >= WIDTH:
            self.x = WIDTH - BALL_SIZE
            self.dx = -abs(self.dx)

        # Mur supérieur
        if self.y <= 0:
            self.y = 0
            self.dy = abs(self.dy)

        # Collision avec la raquette
        if (
            self.y + BALL_SIZE >= paddle.y
            and self.y <= paddle.y + PADDLE_HEIGHT
            and self.x + BALL_SIZE >= paddle.x
            and self.x <= paddle.x + PADDLE_WIDTH
            and self.dy > 0
        ):
            self.y = paddle.y - BALL_SIZE
            self.dy = -abs(self.dy)

        # Sol
        if self.y > HEIGHT:
            self.ground = True


# =========================
# Raquette
# =========================

class Paddle:

    def __init__(self):
        self.x = WIDTH / 2 - PADDLE_WIDTH / 2
        self.y = HEIGHT - 40

        self.dx = 0

    def draw(self):
        ctx.fillStyle = "#FEB920"

        ctx.fillRect(
            self.x,
            self.y,
            PADDLE_WIDTH,
            PADDLE_HEIGHT
        )

    def update(self):

        self.x += self.dx

        if self.x <= 0:
            self.x = 0

        if self.x + PADDLE_WIDTH >= WIDTH:
            self.x = WIDTH - PADDLE_WIDTH


# =========================
# Clavier
# =========================

keys = set()


def key_down(event):
    keys.add(event.key)


def key_up(event):
    keys.discard(event.key)


window.bind("keydown", key_down)
window.bind("keyup", key_up)


# =========================
# Jeu
# =========================

paddle = Paddle()
ball = Ball()

game_over = False

# État de l'animation
animation = False
animation_progress = 0


# =========================
# Clic sur la boule
# =========================

def on_canvas_click(event):

    global animation

    # Si l'animation est déjà lancée,
    # on ignore les clics
    if animation:
        return

    # Position réelle du canvas à l'écran
    rect = canvas.getBoundingClientRect()

    # Gestion du cas où le canvas est redimensionné en CSS
    scale_x = WIDTH / rect.width
    scale_y = HEIGHT / rect.height

    click_x = (event.clientX - rect.left) * scale_x
    click_y = (event.clientY - rect.top) * scale_y

    # Centre de la boule
    ball_center_x = ball.x + BALL_SIZE / 2
    ball_center_y = ball.y + BALL_SIZE / 2

    # Distance entre le clic et le centre
    distance = (
        (click_x - ball_center_x) ** 2
        + (click_y - ball_center_y) ** 2
    ) ** 0.5

    # Si le clic est sur la boule
    if distance <= BALL_SIZE:
        start_animation()


canvas.bind("click", on_canvas_click)


# =========================
# Dessin de la boule pendant
# l'animation
# =========================

def draw_animation():

    global animation_progress

    # Progression entre 0 et 1
    progress = animation_progress

    # Petite accélération / décélération
    progress = progress * progress * (3 - 2 * progress)

    # Centre de la boule
    center_x = ball.x + BALL_SIZE / 2
    center_y = ball.y + BALL_SIZE / 2

    # Taille de départ de la boule
    start_radius = 30

    # Taille finale = balle de Pong
    end_radius = BALL_SIZE / 2

    # Interpolation de la taille
    radius = start_radius + (
        end_radius - start_radius
    ) * progress

    # Couleur de départ : gris
    start_r = 180
    start_g = 180
    start_b = 180

    # Couleur finale : bleu Kryptis
    end_r = 0
    end_g = 146
    end_b = 249

    # Interpolation de la couleur
    r = int(start_r + (end_r - start_r) * progress)
    g = int(start_g + (end_g - start_g) * progress)
    b = int(start_b + (end_b - start_b) * progress)

    ctx.beginPath()

    ctx.arc(
        center_x,
        center_y,
        radius,
        0,
        2 * 3.14159
    )

    ctx.fillStyle = "rgb(%d, %d, %d)" % (r, g, b)
    ctx.fill()

    ctx.closePath()


# =========================
# Boucle principale
# =========================

def game_loop():

    global game_over
    global animation_progress
    global animation

    # Effacer le canvas
    ctx.clearRect(
        0,
        0,
        WIDTH,
        HEIGHT
    )

    # Fond
    ctx.fillStyle = "#0f172a"

    ctx.fillRect(
        0,
        0,
        WIDTH,
        HEIGHT
    )

    # =====================
    # Animation
    # =====================

    if animation:

        # Faire avancer l'animation
        animation_progress += 0.025

        # Dessiner la transformation
        draw_animation()

        # Animation terminée
        if animation_progress >= 1:

            animation_progress = 1

            # Passer au jeu
            start_game()

        return


    # =====================
    # Jeu
    # =====================

    # Contrôle de la raquette
    paddle.dx = 0

    if "ArrowLeft" in keys:
        paddle.dx = -PADDLE_SPEED

    if "ArrowRight" in keys:
        paddle.dx = PADDLE_SPEED


    # Mise à jour
    if not game_over:

        paddle.update()
        ball.update()

        if ball.ground:
            game_over = True


    # Dessin
    paddle.draw()
    ball.draw()


    # =====================
    # Game Over
    # =====================

    if game_over:

        ctx.fillStyle = "red"

        ctx.font = "24px Arial"

        ctx.textAlign = "center"

        ctx.fillText(
            "Game Over !",
            WIDTH / 2,
            HEIGHT / 2
        )


# =========================
# Démarrer l'animation
# =========================

def start_animation():

    global animation
    global animation_progress

    # Éviter plusieurs animations
    if animation:
        return

    animation = True
    animation_progress = 0


# =========================
# Démarrer le jeu
# =========================

def start_game():

    global animation
    global animation_progress
    global game_over
    global ball
    global paddle

    # Fin de l'animation
    animation = False
    animation_progress = 0

    # Réinitialiser le jeu
    game_over = False

    ball = Ball()
    paddle = Paddle()


# =========================
# Lancer la boucle
# =========================

set_interval(game_loop, 10)