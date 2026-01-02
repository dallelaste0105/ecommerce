<?php
session_start();

class CredentialModel {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    function signupModel($name, $password, $role) {
        $hashed = password_hash($password, PASSWORD_DEFAULT);

        $response = $this->db->users->insertOne([
            "name"=> $name,
            "password"=> $hashed, 
            "role"=> $role,
        ]);

        return $response->getInsertedId();
    }

    function loginModel($name, $password) {
        $res = $this->db->users->findOne(["name" => $name]);

        if (!$res) {
            return false;
        }

        $userId = $this->db->users->findOne([
            "name"=> $name
        ]);

        if (password_verify($password, $res["password"])) {
            $_SESSION["userId"] = $userId;
            return true;
        }

        return false;
    }
}
?>