<?php
session_start();
require_once __DIR__ . '/../models/storeModel.php';

class StoreController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    private function requireSeller() {
    if (!isset($_SESSION["role"]) || $_SESSION["role"] !== "seller") {
        echo json_encode([
            "ok" => false, 
            "msg" => "incorrectUserType"
        ]);
        exit;
    }
}

    //como se trata de um get, não tem valores, no corpo
    function showStoreProductsController() {
        $storeModel = new StoreModel($this->db);
        $products = $storeModel->showStoreProductsModel();

        return [
            "ok" => true,
            "msg" => $products,
        ];
    }

    function sellerShowStoreProductsController() {
        $this->requireSeller();
        $storeModel = new StoreModel($this->db);
        $products = $storeModel->sellerShowStoreProductsModel();

        return [
            "ok" => true,
            "msg" => $products,
        ];
    }

    function addProductPromotionController() {
        $this->requireSeller();
        $req = json_decode(file_get_contents("php://input"), true);
        $body = $req["body"] ?? null;

        $productId = $body["productId"] ?? "";
        $percentagePromotion = $body["percentagePromotion"] ?? "";

        $storeModel = new StoreModel($this->db);
        $products = $storeModel->addProductPromotionModel($productId, $percentagePromotion);

        return [
            "ok" => true,
            "msg" => "Promoção adicionada com sucesso",
        ];
    }

    function removeProductPromotionController() {
        $this->requireSeller();
        $req = json_decode(file_get_contents("php://input"), true);
        $body = $req["body"] ?? null;

        $productId = $body["productId"] ?? "";

        $storeModel = new StoreModel($this->db);
        $products = $storeModel->removeProductPromotionModel($productId);

        return [
            "ok" => true,
            "msg" => "Promoção removida com sucesso",
        ];
    }
    
}
?>