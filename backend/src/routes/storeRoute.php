<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, whitchfunction, whitch-function");
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../controllers/storeController.php';

//acima, apenas importações e configurações gerais

//pega o conteúdo do corpo e armazena qual função deve ser chamada
$req = json_decode(file_get_contents("php://input"), true);
$whitchFunction = $req["whitchFunction"] ?? null;

//armazena qual função deve ser chamada em get's
$getWhitchFunction = $_SERVER['HTTP_WHITCHFUNCTION'] ?? null;

//cria instância do controller
$storeController = new StoreController($db);

//verifica o método e escolhe a função da instância deve ser executada no switch
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    switch ($getWhitchFunction) {
        case 'showStoreProducts':
            echo json_encode($storeController->showStoreProductsController());
            break;
        case 'sellerShowStoreProducts':
            echo json_encode($storeController->sellerShowStoreProductsController());
            break;

        default:
            echo json_encode(["ok" => false, "msg" => "Função inválida"]);
    }
}
else if ($_SERVER["REQUEST_METHOD"] === "POST") {
    switch ($whitchFunction) {
        case 'addProductPromotion':
            echo json_encode($storeController->addProductPromotionController());
            break;
        case 'removeProductPromotion':
            echo json_encode($storeController->removeProductPromotionController());
            break;

        default:
            echo json_encode(["ok" => false, "msg" => "Função inválida"]);
    }
}
else {
    echo json_encode(["ok" => false, "msg" => "Método inválido"]);
}
?>