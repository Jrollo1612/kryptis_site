const { createClient } = require("@supabase/supabase-js");

exports.handler = async (event) => {
    // Autoriser uniquement POST
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({
                error: "Method not allowed"
            })
        };
    }

    try {
        // Récupérer le token Supabase
        const authHeader = event.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return {
                statusCode: 401,
                body: JSON.stringify({
                    error: "Unauthorized"
                })
            };
        }

        const token = authHeader.replace("Bearer ", "");

        // Client Supabase
        const supabase = createClient(
            "https://vilnoaavchxxilffsfrn.supabase.co",
            process.env.SUPABASE_KEY,
            {
                global: {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            }
        );

        // Vérifier l'utilisateur
        const {
            data: { user },
            error: userError
        } = await supabase.auth.getUser();

        if (userError || !user) {
            return {
                statusCode: 401,
                body: JSON.stringify({
                    error: "Invalid session"
                })
            };
        }

        // Récupérer les données envoyées
        const {
            action,
            cipher,
            input,
            output
        } = JSON.parse(event.body);

        // Vérifications basiques
        if (!action || !cipher || input === undefined) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: "Missing required fields"
                })
            };
        }

        // Enregistrer dans l'historique
        const { data, error } = await supabase
            .from("history")
            .insert({
                user_id: user.id,
                action: action,
                cipher: cipher,
                input: input,
                output: output ?? null
            })
            .select()
            .single();

        if (error) {
            console.error(error);

            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: "Failed to save history"
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
                error: "Internal server error"
            })
        };
    }
};