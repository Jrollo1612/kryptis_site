const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://vilnoaavchxxilffsfrn.supabase.co";

function getSupabase() {
    return createClient(
        SUPABASE_URL,
        process.env.SUPABASE_KEY
    );
}

function getCookies(event) {
    const cookies = {};
    const cookieHeader = event.headers.cookie || "";

    for (const cookie of cookieHeader.split(";")) {
        const [name, ...value] = cookie.trim().split("=");

        if (name) {
            cookies[name] = decodeURIComponent(value.join("="));
        }
    }

    return cookies;
}

function createAuthCookies(accessToken, refreshToken) {
    return [
        `access_token=${encodeURIComponent(accessToken)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=3600`,
        `refresh_token=${encodeURIComponent(refreshToken)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=2592000`
    ];
}

function clearAuthCookies() {
    return [
        "access_token=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0",
        "refresh_token=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0"
    ];
}

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({
                error: "Method not allowed"
            })
        };
    }

    try {
        const body = JSON.parse(event.body || "{}");
        const action = body.action;

        const supabase = getSupabase();

        // ─────────────────────────────
        // CONNEXION
        // ─────────────────────────────
        if (action === "login") {
            const { email, password } = body;

            if (!email || !password) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({
                        error: "Email et mot de passe requis"
                    })
                };
            }

            const { data, error } =
                await supabase.auth.signInWithPassword({
                    email,
                    password
                });

            if (error || !data.session) {
                return {
                    statusCode: 401,
                    body: JSON.stringify({
                        error: "Email ou mot de passe incorrect"
                    })
                };
            }

            return {
                statusCode: 200,

                multiValueHeaders: {
                    "Set-Cookie": createAuthCookies(
                        data.session.access_token,
                        data.session.refresh_token
                    )
                },

                body: JSON.stringify({
                    success: true,
                    user: {
                        id: data.user.id,
                        email: data.user.email
                    }
                })
            };
        }

        // ─────────────────────────────
        // RÉCUPÉRER L'UTILISATEUR
        // ─────────────────────────────
        if (action === "get_user") {
            const cookies = getCookies(event);

            if (!cookies.access_token) {
                return {
                    statusCode: 401,
                    body: JSON.stringify({
                        error: "Utilisateur non connecté"
                    })
                };
            }

            const {
                data: { user },
                error
            } = await supabase.auth.getUser(cookies.access_token);

            if (error || !user) {
                return {
                    statusCode: 401,
                    body: JSON.stringify({
                        error: "Session invalide"
                    })
                };
            }

            return {
                statusCode: 200,
                body: JSON.stringify({
                    success: true,
                    user: {
                        id: user.id,
                        email: user.email
                    }
                })
            };
        }

        // ─────────────────────────────
        // RAFRAÎCHIR LA SESSION
        // ─────────────────────────────
        if (action === "refresh") {
            const cookies = getCookies(event);

            if (!cookies.refresh_token) {
                return {
                    statusCode: 401,
                    body: JSON.stringify({
                        error: "Aucune session à rafraîchir"
                    })
                };
            }

            const { data, error } =
                await supabase.auth.refreshSession({
                    refresh_token: cookies.refresh_token
                });

            if (error || !data.session) {
                return {
                    statusCode: 401,
                    multiValueHeaders: {
                        "Set-Cookie": clearAuthCookies()
                    },
                    body: JSON.stringify({
                        error: "Session expirée"
                    })
                };
            }

            return {
                statusCode: 200,

                multiValueHeaders: {
                    "Set-Cookie": createAuthCookies(
                        data.session.access_token,
                        data.session.refresh_token
                    )
                },

                body: JSON.stringify({
                    success: true
                })
            };
        }

        // ─────────────────────────────
        // DÉCONNEXION
        // ─────────────────────────────
        if (action === "logout") {
            const cookies = getCookies(event);

            if (cookies.access_token) {
                await supabase.auth.signOut({
                    scope: "local"
                });
            }

            return {
                statusCode: 200,

                multiValueHeaders: {
                    "Set-Cookie": clearAuthCookies()
                },

                body: JSON.stringify({
                    success: true
                })
            };
        }

        return {
            statusCode: 400,
            body: JSON.stringify({
                error: "Action inconnue"
            })
        };

    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "Erreur serveur"
            })
        };
    }
};