<?php

namespace Config;

class DatabaseConfig {
    private $servername = "localhost";
    private $username = "root";
    private $password = "Id:19016729";
    private $dbname = "scandiwebproducts";

    public function getServername() {
        return $this->servername;
    }

    public function getUsername() {
        return $this->username;
    }

    public function getPassword() {
        return $this->password;
    }

    public function getDbname() {
        return $this->dbname;
    }
}
