import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import "./ProductList.scss";

interface Product {
  id: number;
  productName: string;
  price: number;
  sku: string;
  productDescription?: string;
}

const ProductList: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost/api/getAllProducts.php"
      );
      if (response.data.success) {
        setProducts(response.data.products);
        console.log(response.data);
      } else {
        console.error("Failed to fetch products:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="mx-4">
      <Header
        title="Product List"
        btns={
          <>
            <button id="add-product-btn" className="mx-3 btn btn-success">
              <Link to="/addproduct">ADD</Link>
            </button>
            <button id="delete-product-btn" className="btn btn-danger">
              MASS DELETE
            </button>
          </>
        }
      />
      {products.map((product) => (
        <Card
          key={product.id}
          SKU={product.sku}
          Name={product.productName}
          Price={product.price}
          Props={
            product.productDescription
              ? `Description: ${product.productDescription}`
              : ""
          }
        />
      ))}
    </div>
  );
};

export default ProductList;
