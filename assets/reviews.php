<?php
header("Content-Type: application/json");
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

$file = 'reviews.json';

// 🔄 Lire contenu actuel
$current = [];
if (file_exists($file)) {
    $current = json_decode(file_get_contents($file), true) ?? [];
}

// 📥 Lire nouvel avis
$data = json_decode(file_get_contents("php://input"), true);

// 🔥 sécurité : vérifier ID
if (!isset($data["id"])) {
    echo json_encode(["error" => "Missing ID"]);
    exit;
}

// ❌ éviter doublons
foreach ($current as $review) {
    if ($review["id"] === $data["id"]) {
        echo json_encode(["status" => "duplicate"]);
        exit;
    }
}

// ✅ ajouter
$current[] = $data;

// 💾 sauvegarde
file_put_contents($file, json_encode($current, JSON_PRETTY_PRINT));

echo json_encode(["status" => "ok"]);
?>