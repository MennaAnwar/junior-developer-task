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
  productProps?: string;
  productType?: string;
}

const ProductList: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedSkus, setSelectedSkus] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://octupled-duty.000webhostapp.com/api/getAllProducts.php"
      );
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        console.error("Failed to fetch products:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCheckboxChange = (sku: string, checked: boolean) => {
    setSelectedSkus((prevSelectedSkus) =>
      checked
        ? [...prevSelectedSkus, sku]
        : prevSelectedSkus.filter((s) => s !== sku)
    );
  };

  const handleMassDelete = async () => {
    setIsDeleting(true); // Set isDeleting to true before starting the delete operation
    try {
      await axios.post(
        "https://octupled-duty.000webhostapp.com/api/deleteProducts.php",
        {
          skus: selectedSkus,
        }
      );
      setProducts((prevProducts) =>
        prevProducts.filter((product) => !selectedSkus.includes(product.sku))
      );
      setSelectedSkus([]);
    } catch (error) {
      console.error("Error deleting products:", error);
    } finally {
      setIsDeleting(false); // Set isDeleting to false after the delete operation is completed
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
            <button
              id="delete-product-btn"
              className="btn btn-danger"
              onClick={handleMassDelete}
            >
              MASS DELETE
            </button>
          </>
        }
      />
      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <Card
            key={product.id}
            SKU={product.sku}
            Name={product.productName}
            Price={product.price}
            Props={product.productProps ? ` ${product.productProps}` : ""}
            Type={product.productType || "Default Type"}
            onCheckboxChange={handleCheckboxChange}
            isChecked={selectedSkus.includes(product.sku)}
            isDeleting={isDeleting} // Pass isDeleting to Card component
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
