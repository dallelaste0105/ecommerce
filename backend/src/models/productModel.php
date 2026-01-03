<?php

class ProductModel {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    function createProductModel($name, $price) {
        $response = $this->db->products->insertOne([
            "name"=> $name,
            "price"=> $price
        ]);
        return $response;
    }

    function addProductCartModel($userId, $productId){
        try {
            $objProductId = new MongoDB\BSON\ObjectId($productId);
        } catch (Exception $e) {
            return false;
        }

        $product = $this->db->products->findOne(["_id"=> $objProductId]);
        
        if (!$product) return false;

        $userCart = $this->db->cart->findOne(["userId"=> $userId]);

        if ($userCart) {
            $result = $this->db->cart->updateOne(
                ["userId" => $userId],
                ['$push' => ['products' => ["productId" => $objProductId, "name" => $product['name']]]]
            );
            return $result->getModifiedCount() > 0;
        } else {
            $result = $this->db->cart->insertOne([
                "userId"=> $userId,
                "products" => [
                    ["productId" => $objProductId, "name" => $product['name']]
                ]
            ]);
            return $result->getInsertedCount() > 0;
        }
    }

    function getProductDetailsModel($productId) {
        try {
            //converte a string do $productId em uma instância de ObjectId compatível com o MongoDB
            $id = new MongoDB\BSON\ObjectId($productId);
            
            return $this->db->products->findOne([
                "_id" => $id
            ]);
        } catch (Exception $e) {
            return null;
        }
    }

    function publicProductRateModel($userId, $productId, $comment) {
        try {
            $id = new MongoDB\BSON\ObjectId($productId);
            
            return $this->db->reviews->insertOne([
                "userId" => $userId,
                "productId" => $id,
                "comment" => $comment
            ]);
        } catch (Exception $e) {
            return null;
        }
    }

    function getProductCommentsModel($productId) {
    try {
        $id = new MongoDB\BSON\ObjectId($productId);
        
        $cursor = $this->db->reviews->find([
            "productId" => $id
        ]);

        return $cursor->toArray(); 

    } catch (Exception $e) {
        return [];
    }
}

    function getStoreSearchedProductsModel($searchedWord){
        $products = $this->db->products->find([
            "name" => new MongoDB\BSON\Regex($searchedWord, 'i')
        ]);
        return $products->toArray();
    }

    function sellerGetStoreSearchedProductsModel($searchedWord){
        $products = $this->db->products->find([
            "name" => new MongoDB\BSON\Regex($searchedWord, 'i')
        ]);
        return $products->toArray();
    }//pegar somente os produtos do vendedor

}
?>