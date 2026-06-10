require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();

app.use(cors());
app.use(express.json());
// netlify/functions/user_info.js
if (process.env.NETLIFY !== 'true') {
  try {
    // dynamic require so bundler doesn't require it at build-time in the cloud
    const dotenv = require && require('dotenv');
    dotenv && dotenv.config();
  } catch (e) {
    // ignore if dotenv is not present
  }
}

// then use process.env.SUPABASE_KEY etc.
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.post("/track", async (req, res) => {
  try {
    const {
      userAgent,
      language,
      platform,
      screenWidth,
      screenHeight,
      timezone,
      cookiesEnabled
    } = req.body;

    // IP utilisateur
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress;

    const { error } = await supabase
      .from("visitor_logs")
      .insert([
        {
          ip,
          user_agent: userAgent,
          language,
          platform,
          screen_width: screenWidth,
          screen_height: screenHeight,
          timezone,
          cookies_enabled: cookiesEnabled
        }
      ]);

    if (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }

    res.json({
      success: true
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
