// ════════════════════════════════════════════════════════════════
// auth.js — Kryptis Auth Module (Supabase Auth + Historique)
// ════════════════════════════════════════════════════════════════

import { createClient } from "@supabase/supabase-js";

// ── Config Supabase ──────────────────────────────────────────────
// Remplace ces valeurs par les tiennes dans le dashboard Supabase
// Settings > API > Project URL & anon public key
const SUPABASE_URL  = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ── État global ──────────────────────────────────────────────────
let currentUser = null;

// ════════════════════════════════════════════════════════════════
// AUTH — Inscription / Connexion / Déconnexion
// ════════════════════════════════════════════════════════════════

export async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data;
}

export async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    currentUser = data.user;
    return data;
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    currentUser = null;
    updateAuthUI(null);
}

export async function getSession() {
    const { data } = await supabase.auth.getSession();
    currentUser = data?.session?.user ?? null;
    return currentUser;
}

// ════════════════════════════════════════════════════════════════
// HISTORIQUE — Sauvegarde / Récupération
// ════════════════════════════════════════════════════════════════

/**
 * Sauvegarde une traduction dans Supabase.
 * Table attendue : history (user_id uuid, code text, direction text, input text, output text, created_at timestamptz)
 */
export async function saveHistory(code, direction, input, output) {
    if (!currentUser) return; // pas connecté = pas de sauvegarde

    // Ne pas sauvegarder si l'input est vide ou trop court
    if (!input || input.trim().length < 2) return;

    const { error } = await supabase.from("history").insert([{
        user_id:   currentUser.id,
        code,
        direction,
        input:     input.slice(0, 500),   // limite raisonnable
        output:    output.slice(0, 1000),
        created_at: new Date().toISOString()
    }]);

    if (error) console.warn("Erreur sauvegarde historique :", error.message);
}

/**
 * Récupère les 30 dernières traductions de l'utilisateur connecté.
 */
export async function fetchHistory() {
    if (!currentUser) return [];

    const { data, error } = await supabase
        .from("history")
        .select("*")
        .eq("user_id", currentUser.id)
        .order("created_at", { ascending: false })
        .limit(30);

    if (error) {
        console.warn("Erreur récupération historique :", error.message);
        return [];
    }
    return data ?? [];
}

/**
 * Supprime une entrée de l'historique (par id).
 */
export async function deleteHistoryEntry(id) {
    if (!currentUser) return;
    await supabase.from("history").delete().eq("id", id).eq("user_id", currentUser.id);
}

/**
 * Vide tout l'historique de l'utilisateur connecté.
 */
export async function clearHistory() {
    if (!currentUser) return;
    await supabase.from("history").delete().eq("user_id", currentUser.id);
}

// ════════════════════════════════════════════════════════════════
// UI — Modale de connexion / inscription
// ════════════════════════════════════════════════════════════════

function createAuthModal() {
    if (document.getElementById("kryptis-auth-modal")) return;

    const modal = document.createElement("div");
    modal.id = "kryptis-auth-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "auth-modal-title");
    modal.innerHTML = `
        <div class="auth-backdrop" id="auth-backdrop"></div>
        <div class="auth-panel">
            <button class="auth-close" id="auth-close" aria-label="Fermer">&times;</button>

            <div class="auth-logo">
                <img src="/kryptis_logo.svg" alt="Kryptis" width="40" height="40">
                <span>Kryptis</span>
            </div>

            <!-- Onglets -->
            <div class="auth-tabs" role="tablist">
                <button class="auth-tab active" id="tab-login"  role="tab" aria-selected="true"  aria-controls="panel-login">Connexion</button>
                <button class="auth-tab"        id="tab-signup" role="tab" aria-selected="false" aria-controls="panel-signup">Inscription</button>
            </div>

            <!-- Connexion -->
            <div class="auth-form-panel" id="panel-login" role="tabpanel">
                <h2 class="auth-title" id="auth-modal-title">Bon retour 👋</h2>
                <p class="auth-sub">Connecte-toi pour retrouver ton historique.</p>
                <form id="form-login" novalidate>
                    <label for="login-email">Email</label>
                    <input type="email" id="login-email" autocomplete="email" placeholder="ton@email.com" required>
                    <label for="login-password">Mot de passe</label>
                    <input type="password" id="login-password" autocomplete="current-password" placeholder="••••••••" required>
                    <p class="auth-error" id="login-error" aria-live="polite"></p>
                    <button type="submit" class="auth-btn" id="login-submit">Se connecter</button>
                </form>
            </div>

            <!-- Inscription -->
            <div class="auth-form-panel hidden" id="panel-signup" role="tabpanel">
                <h2 class="auth-title">Créer un compte</h2>
                <p class="auth-sub">Sauvegarde tes traductions et retrouve-les partout.</p>
                <form id="form-signup" novalidate>
                    <label for="signup-email">Email</label>
                    <input type="email" id="signup-email" autocomplete="email" placeholder="ton@email.com" required>
                    <label for="signup-password">Mot de passe</label>
                    <input type="password" id="signup-password" autocomplete="new-password" placeholder="8 caractères minimum" required minlength="8">
                    <label for="signup-confirm">Confirmer</label>
                    <input type="password" id="signup-confirm" autocomplete="new-password" placeholder="••••••••" required>
                    <p class="auth-error" id="signup-error" aria-live="polite"></p>
                    <button type="submit" class="auth-btn" id="signup-submit">Créer le compte</button>
                </form>
            </div>

            <!-- Message succès inscription -->
            <div class="auth-form-panel hidden" id="panel-verify">
                <div class="auth-verify-icon">✉️</div>
                <h2 class="auth-title">Vérifie ta boîte mail</h2>
                <p class="auth-sub">Un lien de confirmation t'a été envoyé. Clique dessus pour activer ton compte.</p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    bindModalEvents(modal);
}

function bindModalEvents(modal) {
    // Fermeture
    document.getElementById("auth-close").addEventListener("click", closeAuthModal);
    document.getElementById("auth-backdrop").addEventListener("click", closeAuthModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeAuthModal();
    });

    // Onglets
    document.getElementById("tab-login").addEventListener("click", () => switchTab("login"));
    document.getElementById("tab-signup").addEventListener("click", () => switchTab("signup"));

    // Connexion
    document.getElementById("form-login").addEventListener("submit", async (e) => {
        e.preventDefault();
        const btn   = document.getElementById("login-submit");
        const email = document.getElementById("login-email").value.trim();
        const pwd   = document.getElementById("login-password").value;
        const err   = document.getElementById("login-error");

        btn.disabled = true;
        btn.textContent = "Connexion…";
        err.textContent = "";

        try {
            await signIn(email, pwd);
            updateAuthUI(currentUser);
            closeAuthModal();
            renderHistory(); // rafraîchir l'historique si on est sur trad.html
        } catch (e) {
            err.textContent = translateAuthError(e.message);
        } finally {
            btn.disabled = false;
            btn.textContent = "Se connecter";
        }
    });

    // Inscription
    document.getElementById("form-signup").addEventListener("submit", async (e) => {
        e.preventDefault();
        const btn     = document.getElementById("signup-submit");
        const email   = document.getElementById("signup-email").value.trim();
        const pwd     = document.getElementById("signup-password").value;
        const confirm = document.getElementById("signup-confirm").value;
        const err     = document.getElementById("signup-error");

        if (pwd !== confirm) { err.textContent = "Les mots de passe ne correspondent pas."; return; }
        if (pwd.length < 8)  { err.textContent = "Le mot de passe doit faire au moins 8 caractères."; return; }

        btn.disabled = true;
        btn.textContent = "Création…";
        err.textContent = "";

        try {
            await signUp(email, pwd);
            document.getElementById("panel-signup").classList.add("hidden");
            document.getElementById("panel-verify").classList.remove("hidden");
        } catch (e) {
            err.textContent = translateAuthError(e.message);
        } finally {
            btn.disabled = false;
            btn.textContent = "Créer le compte";
        }
    });
}

function switchTab(tab) {
    const isLogin = tab === "login";
    document.getElementById("tab-login").classList.toggle("active", isLogin);
    document.getElementById("tab-signup").classList.toggle("active", !isLogin);
    document.getElementById("tab-login").setAttribute("aria-selected", String(isLogin));
    document.getElementById("tab-signup").setAttribute("aria-selected", String(!isLogin));
    document.getElementById("panel-login").classList.toggle("hidden", !isLogin);
    document.getElementById("panel-signup").classList.toggle("hidden", isLogin);
    document.getElementById("panel-verify").classList.add("hidden");
}

export function openAuthModal() {
    createAuthModal();
    const modal = document.getElementById("kryptis-auth-modal");
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    // Focus sur le premier champ
    setTimeout(() => document.getElementById("login-email")?.focus(), 100);
}

export function closeAuthModal() {
    const modal = document.getElementById("kryptis-auth-modal");
    if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }
}

// ════════════════════════════════════════════════════════════════
// UI — Bouton de connexion dans le header
// ════════════════════════════════════════════════════════════════

export function updateAuthUI(user) {
    let btn = document.getElementById("auth-header-btn");
    if (!btn) return;

    if (user) {
        btn.textContent = user.email.split("@")[0]; // affiche le préfixe de l'email
        btn.title = "Connecté — cliquer pour se déconnecter";
        btn.dataset.state = "connected";
    } else {
        btn.textContent = "Connexion";
        btn.title = "Se connecter / créer un compte";
        btn.dataset.state = "disconnected";
    }
}

export function injectAuthButton() {
    if (document.getElementById("auth-header-btn")) return;

    const btn = document.createElement("button");
    btn.id = "auth-header-btn";
    btn.className = "auth-header-btn";
    btn.textContent = "Connexion";
    btn.dataset.state = "disconnected";

    btn.addEventListener("click", async () => {
        if (btn.dataset.state === "connected") {
            if (confirm("Se déconnecter ?")) {
                await signOut();
                renderHistory(); // vider l'historique affiché
            }
        } else {
            openAuthModal();
        }
    });

    // Insérer dans le header (avant la nav principale si elle existe)
    const header = document.querySelector(".header");
    const mainNav = header?.querySelector("nav[aria-label='Main navigation'], nav[aria-label='Navigation principale']");
    if (mainNav) {
        header.insertBefore(btn, mainNav);
    } else {
        header?.appendChild(btn);
    }
}

// ════════════════════════════════════════════════════════════════
// UI — Panneau historique (trad.html uniquement)
// ════════════════════════════════════════════════════════════════

export async function renderHistory() {
    const container = document.getElementById("history-panel");
    if (!container) return;

    if (!currentUser) {
        container.innerHTML = `
            <div class="history-empty">
                <span>🔒</span>
                <p>Connecte-toi pour sauvegarder et retrouver tes traductions.</p>
                <button class="auth-btn small" id="history-login-btn">Se connecter</button>
            </div>`;
        document.getElementById("history-login-btn")?.addEventListener("click", openAuthModal);
        return;
    }

    container.innerHTML = `<div class="history-loading">Chargement…</div>`;
    const entries = await fetchHistory();

    if (!entries.length) {
        container.innerHTML = `
            <div class="history-empty">
                <span>📭</span>
                <p>Aucune traduction sauvegardée pour le moment.</p>
            </div>`;
        return;
    }

    const clearBtn = `<button class="history-clear-btn" id="history-clear">Tout effacer</button>`;
    const fmt = new Intl.DateTimeFormat(undefined, { day:"2-digit", month:"short", hour:"2-digit", minute:"2-digit" });

    const items = entries.map(e => `
        <div class="history-item" data-id="${e.id}">
            <div class="history-item-meta">
                <span class="history-badge">${e.code} · ${e.direction === "encode" ? "→" : "←"}</span>
                <span class="history-date">${fmt.format(new Date(e.created_at))}</span>
                <button class="history-delete" data-id="${e.id}" aria-label="Supprimer">✕</button>
            </div>
            <div class="history-io">
                <span class="history-input" title="${escHtml(e.input)}">${escHtml(truncate(e.input, 60))}</span>
                <span class="history-arrow">→</span>
                <span class="history-output" title="${escHtml(e.output)}">${escHtml(truncate(e.output, 80))}</span>
            </div>
        </div>
    `).join("");

    container.innerHTML = `<div class="history-header">${clearBtn}</div><div class="history-list">${items}</div>`;

    // Supprimer une entrée
    container.querySelectorAll(".history-delete").forEach(btn => {
        btn.addEventListener("click", async () => {
            await deleteHistoryEntry(btn.dataset.id);
            btn.closest(".history-item").remove();
        });
    });

    // Tout effacer
    document.getElementById("history-clear")?.addEventListener("click", async () => {
        if (confirm("Effacer tout l'historique ?")) {
            await clearHistory();
            await renderHistory();
        }
    });

    // Cliquer sur un item pour le recharger dans le traducteur
    container.querySelectorAll(".history-item").forEach(item => {
        item.addEventListener("click", (e) => {
            if (e.target.classList.contains("history-delete")) return;
            const entry = entries.find(en => en.id === item.dataset.id);
            if (!entry) return;
            // Remplir le traducteur
            const codeSelect = document.getElementById("codeSelect");
            const inputText  = document.getElementById("inputText");
            if (codeSelect && inputText) {
                codeSelect.value = entry.code;
                codeSelect.dispatchEvent(new Event("change"));
                if (entry.direction) window.setDirection?.(entry.direction);
                inputText.value = entry.input;
                inputText.dispatchEvent(new Event("input"));
            }
        });
    });
}

// ════════════════════════════════════════════════════════════════
// UTILS
// ════════════════════════════════════════════════════════════════

function escHtml(str) {
    return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function truncate(str, n) {
    return str.length > n ? str.slice(0, n) + "…" : str;
}

function translateAuthError(msg) {
    const map = {
        "Invalid login credentials": "Email ou mot de passe incorrect.",
        "Email not confirmed":        "Confirme ton email avant de te connecter.",
        "User already registered":    "Cet email est déjà utilisé.",
        "Password should be at least 6 characters": "Mot de passe trop court (6 min).",
    };
    return map[msg] ?? msg;
}

// ════════════════════════════════════════════════════════════════
// INIT — appelé au chargement de la page
// ════════════════════════════════════════════════════════════════

export async function initAuth() {
    injectAuthButton();

    // Récupérer la session existante (si l'utilisateur était déjà connecté)
    const user = await getSession();
    updateAuthUI(user);

    // Écouter les changements d'état auth (ex: lien de confirmation cliqué)
    supabase.auth.onAuthStateChange((_event, session) => {
        currentUser = session?.user ?? null;
        updateAuthUI(currentUser);
        renderHistory();
    });

    // Rendre l'historique si le panneau est présent
    await renderHistory();
}
