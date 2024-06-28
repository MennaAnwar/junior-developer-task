import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

const ProductList = () => {
  return (
    <>
      <Header title="Product List" btn1="ADD" btn2="MASS DELETE" />
      <Card SKU="xxxx" Name="Product" Price={10} Props="Weight: 10" />
    </>
  );
};

export default ProductList;
