<?php
require_once __DIR__ . '/../models/storeModel.php';

class StoreController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
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
}
?>