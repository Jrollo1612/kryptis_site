const { createClient } = require("@supabase/supabase-js");

// Connexion Supabase
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

exports.handler = async (event) => {

    // Autoriser seulement POST
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({
                error: "Method not allowed"
            })
        };
    }

    try {

        // Lire données envoyées
        const data = JSON.parse(event.body);

        // Vérification ID
        if (!data.id) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: "Missing ID"
                })
            };
        }

        // Vérifier doublon
        const { data: existingReview } = await supabase
            .from("reviews")
            .select("id")
            .eq("id", data.id)
            .single();

        if (existingReview) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    status: "duplicate"
                })
            };
        }

        // Ajouter avis
        const { error } = await supabase
            .from("reviews")
            .insert([
                {
                    id: data.id,
                    author: data.author || "Anonymous",
                    message: data.message || "",
                }
            ]);

        // Erreur SQL
        if (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: error.message
                })
            };
        }

        // Succès
        return {
            statusCode: 200,
            body: JSON.stringify({
                status: "ok"
            })
        };

    } catch (err) {

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: err.message
            })
        };

    }
};