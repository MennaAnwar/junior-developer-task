<?php

// Allow from any origin
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

require 'vendor/autoload.php';

use Product\Product;

header('Content-Type: application/json');

// Create a new instance of the Product class
$product = new Product();

// Call getAllProducts method to fetch products
$products = $product->getAllProducts();

// Return JSON response
echo json_encode(['success' => true, 'products' => $products]);

?>
