<?php

namespace Product;

use Config\DatabaseConfig;
use mysqli;

class Product extends AbstractProduct {
    private $conn;

    public function __construct() {
        $config = new DatabaseConfig();
        $this->conn = new mysqli(
            $config->getServername(),
            $config->getUsername(),
            $config->getPassword(),
            $config->getDbname()
        );

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }

        $this->createDatabaseIfNotExists($config->getDbname());
        $this->createTableIfNotExists();
    }

    private function createDatabaseIfNotExists($dbname) {
        $sql = "CREATE DATABASE IF NOT EXISTS $dbname";
        if ($this->conn->query($sql) !== TRUE) {
            die("Error creating database: " . $this->conn->error);
        }
    }

    private function createTableIfNotExists() {
        $sql = "CREATE TABLE IF NOT EXISTS products (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            product_name VARCHAR(255) NOT NULL,
            product_props VARCHAR(100),
            product_type TEXT,
            price DECIMAL(10, 2) NOT NULL,
            sku VARCHAR(100) NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";

        if ($this->conn->query($sql) !== TRUE) {
            die("Error creating table: " . $this->conn->error);
        }
    }

    public function saveProduct($productName, $productType, $productProps, $price, $sku) {
        // Escape and quote the values
        $productName = $this->conn->real_escape_string($productName);
        $productType = $this->conn->real_escape_string($productType);
        $productProps = $this->conn->real_escape_string($productProps);
        $price = $this->conn->real_escape_string($price);
        $sku = $this->conn->real_escape_string($sku);

        $query = "INSERT INTO products (product_name, product_props, product_type, price, sku) VALUES ('$productName', '$productProps', '$productType', '$price', '$sku')";
        echo "Query: " . $query; // Check the output to ensure column names and values are correct

        $result = $this->conn->query($query);
        if ($result === TRUE) {
            echo "Record inserted successfully!";
        } else {
            echo "Error: " . $this->conn->error;
        }
    }

    public function getAllProducts() {
        $products = [];

        $sql = "SELECT * FROM products";
        $result = $this->conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $products[] = [
                    'id' => $row['id'],
                    'productName' => $row['product_name'],
                    'productType' => $row['product_type'],
                    'productProps' => $row['product_props'],
                    'price' => $row['price'],
                    'sku' => $row['sku'],
                    'createdAt' => $row['created_at']
                ];
            }
        }

        return $products;
    }

    public function deleteProductsBySKUs(array $skus) {
        // Escape each SKU and join them into a comma-separated string
        $escapedSKUs = array_map([$this->conn, 'real_escape_string'], $skus);
        $inClause = "'" . implode("','", $escapedSKUs) . "'";

        $sql = "DELETE FROM products WHERE sku IN ($inClause)";

        if ($this->conn->query($sql) === TRUE) {
            echo "Records deleted successfully!";
        } else {
            echo "Error deleting records: " . $this->conn->error;
        }
    }

}

?>
