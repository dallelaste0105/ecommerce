<?php
class StoreModel {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    function showStoreProductsModel() {
        $response = $this->db->products->find();
        return $response->toArray();
    }
}
?>