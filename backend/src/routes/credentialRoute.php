<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../controllers/credentialController.php';

//acima, apenas importações e configurações gerais

//pega o conteúdo do corpo e armazena qual função deve ser chamada
$req = json_decode(file_get_contents("php://input"), true);
$whitchFunction = $req["whitchFunction"] ?? null;

//cria instância
$credentialController = new CredentialController($db);

//verifica qual método da instância deve ser executado no switch a partir do valor de whitchFunction
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    switch ($whitchFunction) {
        case 'signup':
            echo json_encode($credentialController->signupController());
            break;

        case 'login':
            echo json_encode($credentialController->loginController());
            break;

        default:
            echo json_encode(["ok" => false, "msg" => "Função inválida"]);
    }
} else {
    echo json_encode(["ok" => false, "msg" => "Método inválido"]);
}
?>