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

    function sellerShowStoreProductsModel() {
        $response = $this->db->products->find();
        return $response->toArray();
    }//pegar somente os produtos que sejam desse vendedor

    function addProductPromotionModel($productId, $percentagePromotion){
        try {
            $id = new MongoDB\BSON\ObjectId($productId);
            
            return $this->db->products->updateOne(
                ["productId" => $id],
                ["percentagePromotion" => $percentagePromotion]
            );
        } catch (Exception $e) {
            return null;
        }
    }

    function removeProductPromotionModel($productId){
        try {
            $id = new MongoDB\BSON\ObjectId($productId);
            
            return $this->db->products->updateOne(
                ["productId" => $id],
                ["percentagePromotion" => 0]
            );
        } catch (Exception $e) {
            return null;
        }
    }
}
?>