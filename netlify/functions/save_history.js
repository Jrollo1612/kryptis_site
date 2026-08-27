const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://vilnoaavchxxilffsfrn.supabase.co";

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
        const cookies = getCookies(event);

        if (!cookies.access_token) {
            return {
                statusCode: 401,
                body: JSON.stringify({
                    error: "Utilisateur non connecté"
                })
            };
        }

        const supabase = createClient(
            SUPABASE_URL,
            process.env.SUPABASE_KEY
        );

        // Vérifier la session
        const {
            data: { user },
            error: userError
        } = await supabase.auth.getUser(
            cookies.access_token
        );

        if (userError || !user) {
            return {
                statusCode: 401,
                body: JSON.stringify({
                    error: "Session invalide"
                })
            };
        }

        const {
            action,
            cipher,
            input,
            output
        } = JSON.parse(event.body || "{}");

        if (!action || !cipher || input === undefined) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: "Données manquantes"
                })
            };
        }

        const { data, error } = await supabase
            .from("history")
            .insert({
                user_id: user.id,
                action,
                cipher,
                input,
                output: output ?? null
            })
            .select()
            .single();

        if (error) {
            console.error("Supabase:", error);

            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: "Impossible de sauvegarder l'historique"
                })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                history: data
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