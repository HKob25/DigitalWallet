<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "walletdb";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

header('Content-Type: application/json');
$action = $_GET['action'] ?? $_POST['action'] ?? '';

switch ($action) {
    case 'checkEmail':
        $email = $_POST['email'] ?? '';
        echo json_encode(email_in_db($conn, $email));
        break;
    
    case 'addUser':
        $email = $_POST['email'] ?? '';
        echo json_encode(add_user($conn, $email));
        break;
    }

function email_in_db($conn, $email) {
    $email = $conn->real_escape_string($email);
    $sql = "SELECT email FROM useremails WHERE email = '$email' LIMIT 1";
    $result = $conn->query($sql);
    return $result && $result->num_rows > 0;
}

function add_user($conn, $email) {
    $email = $conn->real_escape_string($email);
    if (email_in_db($conn, $email))
        return false;

    $sql = "INSERT INTO useremails (email) VALUES ('$email')";
    $conn->query($sql);
    return true;
}

?>
