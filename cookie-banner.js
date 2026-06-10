// ════════════════════════════════════════════════════════════════
// cookie-banner.js — Bandeau RGPD conforme (Kryptis)
// Catégories : essentiels | préférences | analytiques
// ════════════════════════════════════════════════════════════════

const COOKIE_CONSENT_KEY = "kryptis_cookie_consent";
const COOKIE_MAX_AGE     = 60 * 60 * 24 * 365; // 1 an

// ── Structure du consentement ────────────────────────────────────
// { version: 1, date: ISO, essential: true, preferences: bool, analytics: bool }

export function getConsent() {
    try {
        return JSON.parse(localStorage.getItem(COOKIE_CONSENT_KEY)) ?? null;
    } catch {
        return null;
    }
}

function saveConsent(prefs) {
    const consent = {
        version:     1,
        date:        new Date().toISOString(),
        essential:   true, // toujours vrai
        preferences: !!prefs.preferences,
        analytics:   !!prefs.analytics,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));

    // Supprimer les cookies analytiques si refusés
    if (!consent.analytics) {
        deleteCookie("source");
        deleteCookie("DeviceOs");
    }

    return consent;
}

// ════════════════════════════════════════════════════════════════
// COOKIES helpers
// ════════════════════════════════════════════════════════════════

export function setCookie(name, value, maxAge = COOKIE_MAX_AGE) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function getCookie(name) {
    const match = document.cookie.match(new RegExp("(?:^|;\\s*)" + name + "=([^;]*)"));
    return match ? decodeURIComponent(match[1]) : null;
}

function deleteCookie(name) {
    document.cookie = `${name}=; path=/; max-age=0`;
}

// ── Utiliser ces wrappers à la place des document.cookie directs ─
export function setCookieIfAllowed(name, value, category = "analytics") {
    const consent = getConsent();
    if (!consent) return; // pas encore de choix
    if (category === "essential" || consent[category]) {
        setCookie(name, value);
    }
}

// ════════════════════════════════════════════════════════════════
// BANDEAU HTML
// ════════════════════════════════════════════════════════════════

function buildBanner() {
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-modal", "false");
    banner.setAttribute("aria-label", "Gestion des cookies");
    banner.innerHTML = `
        <div class="cb-inner">
            <div class="cb-text">
                <strong>🍪 Ce site utilise des cookies</strong>
                <p>
                    Nous utilisons des cookies pour mémoriser tes préférences et analyser les visites.
                    Tu peux accepter tout, choisir les catégories, ou tout refuser
                    (seuls les cookies essentiels seront conservés).
                    <a href="#" id="cb-learn-more" class="cb-link">En savoir plus</a>
                </p>
            </div>
            <div class="cb-actions">
                <button class="cb-btn cb-customize" id="cb-customize">Personnaliser</button>
                <button class="cb-btn cb-refuse"    id="cb-refuse">Tout refuser</button>
                <button class="cb-btn cb-accept"    id="cb-accept">Tout accepter</button>
            </div>
        </div>

        <!-- Panneau détaillé (masqué par défaut) -->
        <div class="cb-detail" id="cb-detail" hidden>
            <div class="cb-detail-inner">
                <h3>Personnaliser mes préférences</h3>
                <div class="cb-category">
                    <div class="cb-cat-header">
                        <label class="cb-cat-label">
                            <span>Cookies essentiels</span>
                            <span class="cb-badge always">Toujours actifs</span>
                        </label>
                    </div>
                    <p class="cb-cat-desc">Nécessaires au fonctionnement du site : langue, session de connexion. Ne peuvent pas être désactivés.</p>
                </div>
                <div class="cb-category">
                    <div class="cb-cat-header">
                        <label class="cb-cat-label" for="cb-toggle-prefs">
                            <span>Cookies de préférences</span>
                            <div class="cb-toggle-wrap">
                                <input type="checkbox" id="cb-toggle-prefs" role="switch" aria-checked="true" checked>
                                <span class="cb-toggle-slider"></span>
                            </div>
                        </label>
                    </div>
                    <p class="cb-cat-desc">Mémorisent tes préférences d'interface (thème, code sélectionné, etc.).</p>
                </div>
                <div class="cb-category">
                    <div class="cb-cat-header">
                        <label class="cb-cat-label" for="cb-toggle-analytics">
                            <span>Cookies analytiques</span>
                            <div class="cb-toggle-wrap">
                                <input type="checkbox" id="cb-toggle-analytics" role="switch" aria-checked="true" checked>
                                <span class="cb-toggle-slider"></span>
                            </div>
                        </label>
                    </div>
                    <p class="cb-cat-desc">Permettent de savoir si tu accèdes au site depuis l'application ou un autre outil (source de visite). Aucune donnée personnelle n'est partagée avec des tiers.</p>
                </div>
                <div class="cb-detail-actions">
                    <button class="cb-btn cb-save" id="cb-save">Enregistrer mes choix</button>
                </div>
            </div>
        </div>
    `;
    return banner;
}

// ════════════════════════════════════════════════════════════════
// LOGIQUE
// ════════════════════════════════════════════════════════════════

function hideBanner() {
    const b = document.getElementById("cookie-banner");
    if (b) {
        b.classList.add("cb-hidden");
        setTimeout(() => b.remove(), 400);
    }
}

function bindBannerEvents() {
    // Tout accepter
    document.getElementById("cb-accept").addEventListener("click", () => {
        const consent = saveConsent({ preferences: true, analytics: true });
        dispatchConsentEvent(consent);
        hideBanner();
    });

    // Tout refuser
    document.getElementById("cb-refuse").addEventListener("click", () => {
        const consent = saveConsent({ preferences: false, analytics: false });
        dispatchConsentEvent(consent);
        hideBanner();
    });

    // Personnaliser (affiche le panneau détaillé)
    document.getElementById("cb-customize").addEventListener("click", () => {
        const detail = document.getElementById("cb-detail");
        const isOpen = !detail.hidden;
        detail.hidden = isOpen;
        document.getElementById("cb-customize").textContent = isOpen ? "Personnaliser" : "Masquer";
    });

    // Enregistrer mes choix
    document.getElementById("cb-save").addEventListener("click", () => {
        const prefs     = document.getElementById("cb-toggle-prefs").checked;
        const analytics = document.getElementById("cb-toggle-analytics").checked;
        const consent   = saveConsent({ preferences: prefs, analytics: analytics });
        dispatchConsentEvent(consent);
        hideBanner();
    });

    // En savoir plus (peut pointer vers une page de politique de confidentialité)
    document.getElementById("cb-learn-more").addEventListener("click", (e) => {
        e.preventDefault();
        // Si tu crées une page privacy.html, pointe vers elle ici
        alert("Politique de confidentialité\n\n• Aucune donnée personnelle n'est vendue à des tiers.\n• Les données analytiques (source de visite) sont utilisées uniquement par l'auteur du site.\n• Tu peux modifier ton consentement à tout moment via le lien 'Cookies' en bas de page.\n• Conformément au RGPD, tu peux demander la suppression de tes données à jojotheboss184@outlook.fr");
    });
}

function dispatchConsentEvent(consent) {
    // Événement personnalisé que d'autres scripts peuvent écouter
    document.dispatchEvent(new CustomEvent("kryptis:consent", { detail: consent }));
}

// ════════════════════════════════════════════════════════════════
// LIEN "Gérer mes cookies" (à injecter dans le footer)
// ════════════════════════════════════════════════════════════════

export function injectCookieLinkInFooter() {
    const footer = document.querySelector(".footer .bloc");
    if (!footer || document.getElementById("footer-cookie-link")) return;

    const link = document.createElement("a");
    link.id   = "footer-cookie-link";
    link.href = "#";
    link.textContent = "🍪 Gérer les cookies";
    link.style.cursor = "pointer";

    link.addEventListener("click", (e) => {
        e.preventDefault();
        reopenBanner();
    });

    footer.appendChild(link);
}

function reopenBanner() {
    // Supprimer l'ancien consentement pour forcer le réaffichage
    const old = getConsent();
    const banner = buildBanner();
    document.body.appendChild(banner);

    // Pré-cocher selon les choix précédents
    if (old) {
        document.getElementById("cb-toggle-prefs").checked    = old.preferences;
        document.getElementById("cb-toggle-analytics").checked = old.analytics;
    }

    bindBannerEvents();

    // Afficher le panneau de détail directement
    document.getElementById("cb-detail").hidden = false;
    document.getElementById("cb-customize").textContent = "Masquer";
}

// ════════════════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════════════════

export function initCookieBanner() {
    // Si le consentement existe déjà et est récent : ne pas réafficher
    const existing = getConsent();
    if (existing) {
        // Consentement trouvé — appliquer les règles sans afficher la bannière
        dispatchConsentEvent(existing);
        injectCookieLinkInFooter();
        return;
    }

    // Premier visit ou consentement expiré : afficher la bannière
    const banner = buildBanner();
    document.body.appendChild(banner);
    bindBannerEvents();
    injectCookieLinkInFooter();

    // Apparition avec une légère transition
    requestAnimationFrame(() => banner.classList.add("cb-visible"));
}
