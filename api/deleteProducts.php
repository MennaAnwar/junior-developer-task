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

$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['skus']) || !is_array($input['skus'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}

$product = new Product();
$product->deleteProductsBySKUs($input['skus']);

echo json_encode(['success' => true, 'message' => 'Products deleted successfully']);
?>
