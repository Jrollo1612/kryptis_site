<?php

$mail = json_decode(file_get_contents('php://input'), true);
if (isset($mail['to']) && isset($mail['subject']) && isset($mail['body'])) {
    $to = $mail['to'];
    $subject = $mail['subject'];
    $body = $mail['body'];

    // Send the email
    if (mail($to, $subject, $body)) {
        echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
}
?>
