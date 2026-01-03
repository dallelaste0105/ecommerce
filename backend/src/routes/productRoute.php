<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../controllers/productController.php';

//acima, apenas importações e configurações gerais

//pega o conteúdo do corpo e armazena qual função deve ser chamada
$req = json_decode(file_get_contents("php://input"), true);
$whitchFunction = $req["whitchFunction"] ?? null;

//cria instância
$productController = new ProductController($db);

//verifica qual método da instância deve ser executado no switch a partir do valor de whitchFunction
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    switch ($whitchFunction) {
        case 'createProduct':
            echo json_encode($productController->createProductController());
            break;

        case 'addProductCart':
            echo json_encode($productController->addProductCartController());
            break;

        case 'getProductDetails':
            echo json_encode($productController->getProductDetailsController());
            break;

        case 'publicProductRate':
            echo json_encode($productController->publicProductRateController());
            break;

        case 'getProductComments':
            echo json_encode($productController->getProductCommentsController());
            break;

        case 'getStoreSearchedProducts':
            echo json_encode($productController->getStoreSearchedProductsController());
            break;
        case 'sellerGetStoreSearchedProducts':
            echo json_encode($productController->sellerGetStoreSearchedProductsController());
            break;

        default:
            echo json_encode(["ok" => false, "msg" => "Função inválida"]);
    }
}

else {
    echo json_encode(["ok" => false, "msg" => "Método inválido"]);
}
?>