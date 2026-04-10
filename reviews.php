<?php
$data = json_decode(file_get_contents("php://input"), true);

$file = 'reviews.json';
$current = json_decode(file_get_contents($file), true);

$current[] = $data;

file_put_contents($file, json_encode($current, JSON_PRETTY_PRINT));

echo json_encode(["status" => "ok"]);
?>