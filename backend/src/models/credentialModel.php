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
    $user = $this->db->users->findOne(["name" => $name]);
    if (!$user) {
        return false;
    }

    if (password_verify($password, $user["password"])) {
        $_SESSION["userId"] = (string) $user["_id"];
        $_SESSION["role"] = (string) $user["role"];
        
        return true;
    }

    return false;
}
}
?>