const { Resend } = require("resend");

const resend = new Resend("re_WwDDT9N7_5dZCzepD622SQTLn37iBw9uw");

exports.handler = async (event) => {

    // POST uniquement
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({
                error: "Method not allowed"
            })
        };
    }

    try {

        // Lire données
        const mail = JSON.parse(event.body);

        // Vérification
        if (!mail.to || !mail.subject || !mail.body) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: "Invalid input"
                })
            };
        }

        // Envoyer email
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: mail.to,
            subject: mail.subject,
            text: mail.body
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                status: "success",
                data
            })
        };

    } catch (err) {

        return {
            statusCode: 500,
            body: JSON.stringify({
                status: "error",
                message: err.message
            })
        };

    }
};