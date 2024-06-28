import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { FC } from "react";
import "./ProductList.scss";

const ProductList: FC = () => {
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
      <Card SKU="xxxx" Name="Product" Price={10} Props="Weight: 10" />
    </div>
  );
};

export default ProductList;
