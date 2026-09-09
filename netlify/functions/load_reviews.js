const { createClient } = require("@supabase/supabase-js");

// Connexion Supabase
const supabase = createClient('https://vilnoaavchxxilffsfrn.supabase.co', process.env.SUPABASE_KEY);

exports.handler = async (event) => {

    // Autoriser seulement GET
    if (event.httpMethod !== "GET") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method Not Allowed" })
        };
    }

    try {
        const { data, error } = await supabase.from("reviews").select("*");

        if (error) {
            throw new Error(error.message);
        }

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error("Erreur lors du chargement des avis :", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" })
        };
    }
};