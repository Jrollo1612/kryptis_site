const { createClient } = require("@supabase/supabase-js");

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed" })
        };
    }

    try {
        const { email, password } = JSON.parse(event.body);

        if (!email || !password) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: "Email et mot de passe requis"
                })
            };
        }

        const supabase = createClient(
            "https://vilnoaavchxxilffsfrn.supabase.co",
            process.env.SUPABASE_KEY
        );

        const { data, error } =
            await supabase.auth.signInWithPassword({
                username,
                password
            });

        if (error) {
            return {
                statusCode: 401,
                body: JSON.stringify({
                    error: "Email ou mot de passe incorrect"
                })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                access_token: data.session.access_token,
                refresh_token: data.session.refresh_token,
                user: {
                    id: data.user.id,
                    email: data.user.email
                }
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