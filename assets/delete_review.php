<?php
header("Content-Type: application/json");

$ADMIN_KEY = "2011"; // change si besoin

$data = json_decode(file_get_contents("php://input"), true);

// 🔐 vérif clé
if (!isset($data["key"]) || $data["key"] !== $ADMIN_KEY) {
    http_response_code(403);
    echo json_encode(["error" => "Unauthorized"]);
    exit;
}

// 🔎 vérif IDs
if (!isset($data["ids"]) || !is_array($data["ids"])) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid request"]);
    exit;
}

$file = "reviews.json";

// 📥 lire
$reviews = [];
if (file_exists($file)) {
    $reviews = json_decode(file_get_contents($file), true) ?? [];
}

// 🔥 suppression
$reviews = array_filter($reviews, function ($review) use ($data) {
    return !in_array($review["id"], $data["ids"]);
});

// 🔄 réindexer
$reviews = array_values($reviews);

// 💾 sauvegarde
file_put_contents($file, json_encode($reviews, JSON_PRETTY_PRINT));

echo json_encode([
    "success" => true,
    "remaining" => count($reviews)
]);
?>