<?php

// Allow from any origin
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}
// Include autoload or any necessary files
require 'vendor/autoload.php';

use Product\Product;

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Get JSON content from the request body
    $json = file_get_contents('php://input');
    
    // Decode JSON to associative array
    $data = json_decode($json, true);

    // Create a new instance of the Product class
    $product = new Product();

    // Extract product data from the received JSON data
    $productName = $data['name'];
    $productType = $data['productType'];
    $productProps = $data['size'];
    $price = $data['price'];
    $sku = $data['sku'];

    // Call saveProduct method to save the product
    $newProductId = $product->saveProduct($productName, $productType, $productProps, $price, $sku);

    if ($newProductId !== false) {
        echo json_encode(['success' => true, 'message' => 'Product saved successfully.', 'productId' => $newProductId]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to save product.']);
    }

} else {
    // Handle invalid request method
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Method Not Allowed']);
}

?>