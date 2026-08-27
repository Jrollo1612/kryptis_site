const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://vilnoaavchxxilffsfrn.supabase.co";

function getSupabase(accessToken) {
    return createClient(
        SUPABASE_URL,
        process.env.SUPABASE_KEY,
        {
            auth: {
                persistSession: false,
                autoRefreshToken: false,
                detectSessionInUrl: false
            },
            global: accessToken
                ? {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
                : undefined
        }
    );
}

function jsonResponse(statusCode, body, extra = {}) {
    return {
        statusCode,
        ...extra,
        body: JSON.stringify(body)
    };
}

function getCookieSecurity(event) {
    const host = event.headers.host || "";
    return host.startsWith("localhost") || host.startsWith("127.0.0.1")
        ? ""
        : "; Secure";
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

function createAuthCookies(event, accessToken, refreshToken) {
    const secure = getCookieSecurity(event);

    return [
        `access_token=${encodeURIComponent(accessToken)}; HttpOnly${secure}; SameSite=Lax; Path=/; Max-Age=3600`,
        `refresh_token=${encodeURIComponent(refreshToken)}; HttpOnly${secure}; SameSite=Lax; Path=/; Max-Age=2592000`
    ];
}

function clearAuthCookies(event) {
    const secure = getCookieSecurity(event);

    return [
        `access_token=; HttpOnly${secure}; SameSite=Lax; Path=/; Max-Age=0`,
        `refresh_token=; HttpOnly${secure}; SameSite=Lax; Path=/; Max-Age=0`
    ];
}

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return jsonResponse(405, {
            error: "Method not allowed",
            message: "Method not allowed"
        });
    }

    try {
        const body = JSON.parse(event.body || "{}");
        const action = body.action;
        const supabase = getSupabase();

        if (action === "signup") {
            const { email, password, name } = body;

            if (!email || !password) {
                return jsonResponse(400, {
                    error: "Email et mot de passe requis",
                    message: "Email et mot de passe requis"
                });
            }

            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        name: name || ""
                    }
                }
            });

            if (error) {
                return jsonResponse(400, {
                    error: error.message,
                    message: error.message
                });
            }

            const user = data.user
                ? {
                    id: data.user.id,
                    email: data.user.email,
                    name: data.user.user_metadata?.name || ""
                }
                : null;

            if (!data.session) {
                return jsonResponse(200, {
                    success: true,
                    requiresEmailConfirmation: true,
                    user
                });
            }

            return jsonResponse(
                200,
                {
                    success: true,
                    requiresEmailConfirmation: false,
                    user
                },
                {
                    multiValueHeaders: {
                        "Set-Cookie": createAuthCookies(
                            event,
                            data.session.access_token,
                            data.session.refresh_token
                        )
                    }
                }
            );
        }

        if (action === "login") {
            const { email, password } = body;

            if (!email || !password) {
                return jsonResponse(400, {
                    error: "Email et mot de passe requis",
                    message: "Email et mot de passe requis"
                });
            }

            const { data, error } =
                await supabase.auth.signInWithPassword({
                    email,
                    password
                });

            if (error || !data.session) {
                return jsonResponse(401, {
                    error: "Email ou mot de passe incorrect",
                    message: "Email ou mot de passe incorrect"
                });
            }

            return jsonResponse(
                200,
                {
                    success: true,
                    user: {
                        id: data.user.id,
                        email: data.user.email,
                        name: data.user.user_metadata?.name || ""
                    }
                },
                {
                    multiValueHeaders: {
                        "Set-Cookie": createAuthCookies(
                            event,
                            data.session.access_token,
                            data.session.refresh_token
                        )
                    }
                }
            );
        }

        if (action === "get_user") {
            const cookies = getCookies(event);

            if (!cookies.access_token) {
                return jsonResponse(401, {
                    error: "Utilisateur non connecte",
                    message: "Utilisateur non connecte"
                });
            }

            const {
                data: { user },
                error
            } = await supabase.auth.getUser(cookies.access_token);

            if (error || !user) {
                return jsonResponse(401, {
                    error: "Session invalide",
                    message: "Session invalide"
                });
            }

            return jsonResponse(200, {
                success: true,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.user_metadata?.name || ""
                }
            });
        }

        if (action === "refresh") {
            const cookies = getCookies(event);

            if (!cookies.refresh_token) {
                return jsonResponse(401, {
                    error: "Aucune session a rafraichir",
                    message: "Aucune session a rafraichir"
                });
            }

            const { data, error } =
                await supabase.auth.refreshSession({
                    refresh_token: cookies.refresh_token
                });

            if (error || !data.session) {
                return jsonResponse(
                    401,
                    {
                        error: "Session expiree",
                        message: "Session expiree"
                    },
                    {
                        multiValueHeaders: {
                            "Set-Cookie": clearAuthCookies(event)
                        }
                    }
                );
            }

            return jsonResponse(
                200,
                {
                    success: true,
                    user: data.user
                        ? {
                            id: data.user.id,
                            email: data.user.email,
                            name: data.user.user_metadata?.name || ""
                        }
                        : null
                },
                {
                    multiValueHeaders: {
                        "Set-Cookie": createAuthCookies(
                            event,
                            data.session.access_token,
                            data.session.refresh_token
                        )
                    }
                }
            );
        }

        if (action === "logout") {
            const cookies = getCookies(event);

            if (cookies.access_token) {
                const authenticatedSupabase = getSupabase(cookies.access_token);
                await authenticatedSupabase.auth.signOut({
                    scope: "local"
                });
            }

            return jsonResponse(
                200,
                {
                    success: true
                },
                {
                    multiValueHeaders: {
                        "Set-Cookie": clearAuthCookies(event)
                    }
                }
            );
        }

        return jsonResponse(400, {
            error: "Action inconnue",
            message: "Action inconnue"
        });

    } catch (error) {
        console.error(error);

        return jsonResponse(500, {
            error: "Erreur serveur",
            message: "Erreur serveur"
        });
    }
};
