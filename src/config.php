<?php
header("Access-Control-Allow-Origin: *"); // Allow all origins (modify for security)
header("Content-Type: application/json");

$accessToken = "your-smtpjs-access-token"; // Replace with your actual token

echo json_encode(["token" => $accessToken]);
?>
