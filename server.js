const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.post("/save-review", (req, res) => {
  const newReview = req.body;

  let reviews = [];
  if (fs.existsSync("reviews.json")) {
    reviews = JSON.parse(fs.readFileSync("reviews.json"));
  }

  reviews.unshift(newReview);
  fs.writeFileSync("reviews.json", JSON.stringify(reviews, null, 2));

  res.send({ success: true });
});

app.get("/reviews", (req, res) => {
  if (!fs.existsSync("reviews.json")) {
    return res.json([]);
  }

  const data = JSON.parse(fs.readFileSync("reviews.json"));
  res.json(data);
});

app.listen(3000, () => console.log("Server running"));