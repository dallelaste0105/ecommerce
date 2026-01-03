<?php
session_start();
require_once __DIR__ . '/../models/credentialModel.php';

class CredentialController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    function signupController() {
        $req = json_decode(file_get_contents("php://input"), true);
        $body = $req["body"] ?? null;

        $name = $body["name"] ?? "";
        $password = $body["password"] ?? "";
        $role = $body["seller"] ?? "customer";

        if (!$name || !$password) {
            return ["ok" => false, "msg" => "Dados incompletos"];
        }

        $CredentialModel = new CredentialModel($this->db);
        $id = $CredentialModel->signupModel($name, $password, $role);

        return [
            "ok" => true,
            "msg" => "Usuário criado com sucesso",
            "id" => (string)$id
        ];
    }

    function loginController() {
        $req = json_decode(file_get_contents("php://input"), true);
        $body = $req["body"] ?? null;

        $name = $body["name"] ?? "";
        $password = $body["password"] ?? "";
        $role = $body["role"] ?? "";

        if (!$name || !$password) {
            return ["ok" => false, "msg" => "Dados incompletos"];
        }

        $CredentialModel = new CredentialModel($this->db);
        $ok = $CredentialModel->loginModel($name, $password, $role);

        if ($ok) {
            return ["ok" => true, "msg" => "Login realizado com sucesso"];
        }

        return ["ok" => false, "msg" => "Nome ou senha incorretos"];
    }
}
?>