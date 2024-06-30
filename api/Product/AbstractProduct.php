<?php

namespace Product;

abstract class AbstractProduct {
    protected $id;
    protected $productName;
    protected $productType;
    protected $productProps;
    protected $price;
    protected $sku;
    protected $createdAt;

    abstract public function saveProduct($productName, $productType, $productProps, $price, $sku);

    public function getId() {
        return $this->id;
    }

    public function getProductName() {
        return $this->productName;
    }

    public function setProductName($productName) {
        $this->productName = $productName;
    }

    public function getProductType() {
        return $this->productType;
    }

    public function setProductType($productType) {
        $this->productType = $productType;
    }

    public function getProductProps() {
        return $this->productProps;
    }

    public function setProductProps($productProps) {
        $this->productProps = $productProps;
    }

    public function getPrice() {
        return $this->price;
    }

    public function setPrice($price) {
        $this->price = $price;
    }

    public function getSku() {
        return $this->sku;
    }

    public function setSku($sku) {
        $this->sku = $sku;
    }

    public function getCreatedAt() {
        return $this->createdAt;
    }
}

?>
