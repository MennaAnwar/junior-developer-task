import { FC, useState } from "react";
import Header from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import "./AddProduct.scss";
import { Link } from "react-router-dom";
import axios from "axios";

type ProductType = "DVD" | "Furniture" | "Book";

const AddProduct: FC = () => {
  const [productType, setProductType] = useState<ProductType | "">("");
  const [fixedAttributes, setFixedAttributes] = useState({
    sku: "",
    name: "",
    price: "",
  });
  const [productAttributes, setProductAttributes] = useState<{
    [key: string]: string | number;
  }>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductType(e.target.value as ProductType);
    setProductAttributes({});
  };

  const handleFixedAttributeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFixedAttributes({
      ...fixedAttributes,
      [e.target.name]: e.target.value,
    });
  };

  const handleAttributeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductAttributes({
      ...productAttributes,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    let completeData;
    if (productType === "Furniture") {
      const Dimension =
        productAttributes.length +
        "x" +
        productAttributes.width +
        "x" +
        productAttributes.height;
      completeData = {
        ...fixedAttributes,
        Dimension,
        productType,
      };
    } else if (productType === "Book") {
      completeData = {
        ...fixedAttributes,
        ...productAttributes,
        productType,
      };
    } else if (productType === "DVD") {
      completeData = {
        ...fixedAttributes,
        ...productAttributes,
        productType,
      };
    }
    console.log(completeData);
    saveProduct(completeData);
  };

  const saveProduct = async (
    productData:
      | {
          Dimension: string;
          productType: "Furniture";
          sku: string;
          name: string;
          price: string;
        }
      | { productType: "Book"; sku: string; name: string; price: string }
      | { productType: "DVD"; sku: string; name: string; price: string }
      | undefined
  ) => {
    try {
      const response = await axios.post(
        "http://localhost/api/saveProduct.php",
        productData
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error saving product:", error);
      throw error; // Throw error to handle in calling component
    }
  };

  return (
    <form id="product_form" className="mx-4" onSubmit={handleSubmit(onSubmit)}>
      <Header
        title="Product Add"
        btns={
          <>
            <button
              id="add-product-btn"
              className="mx-3 btn btn-success"
              type="submit"
            >
              Add
            </button>
            <button id="delete-product-btn" className="btn btn-danger">
              <Link to="/">Cancel</Link>
            </button>
          </>
        }
      />

      <div className="form-group row mt-3">
        <label className="col-sm-2 col-form-label fw-bold">SKU:</label>
        <div className="col-sm-4">
          <input
            type="text"
            id="sku"
            className="form-control"
            {...register("sku", { required: true })}
            onChange={handleFixedAttributeChange}
          />
        </div>
        <div className="col-sm-6">
          {errors.sku && <p className="error_msg">SKU is required.</p>}
        </div>
      </div>
      <div className="form-group row mt-3">
        <label className="col-sm-2 col-form-label fw-bold">Name:</label>
        <div className="col-sm-4">
          <input
            type="text"
            id="name"
            className="form-control"
            {...register("name", { required: true })}
            onChange={handleFixedAttributeChange}
          />
        </div>
        <div className="col-sm-6">
          {errors.name && <p className="error_msg">Name is required.</p>}
        </div>
      </div>
      <div className="form-group row mt-3">
        <label className="col-sm-2 col-form-label fw-bold">Price ($):</label>
        <div className="col-sm-4">
          <input
            type="number"
            id="price"
            className="form-control"
            {...register("price", { required: true })}
            onChange={handleFixedAttributeChange}
          />
        </div>
        <div className="col-sm-6">
          {errors.price && <p className="error_msg">Price is required.</p>}
        </div>
      </div>
      <div className="form-group row mt-3">
        <label className="col-sm-2 col-form-label fw-bold">Type Switcher</label>
        <div className="col-sm-4">
          <select
            id="productType"
            value={productType}
            {...register("productType", { required: true })}
            onChange={handleTypeChange}
            className="form-select"
          >
            <option value="" disabled>
              Type Switcher
            </option>
            <option value="DVD">DVD</option>
            <option value="Furniture">Furniture</option>
            <option value="Book">Book</option>
          </select>
        </div>
        <div className="col-sm-6">
          {errors.productType && (
            <p className="error_msg">Select a valid product type.</p>
          )}
        </div>
      </div>
      {productType === "DVD" && (
        <div id="DVD">
          <div className="form-group row mt-3">
            <label className="col-sm-2 col-form-label fw-bold">
              Size (MB):
            </label>
            <div className="col-sm-4">
              <input
                type="number"
                id="size"
                value={productAttributes.size || ""}
                {...register("size", { required: true })}
                onChange={handleAttributeChange}
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              {errors.size && <p className="error_msg">Size is required.</p>}
            </div>
          </div>
          <p className="mt-3 fw-bold">Please provide product size in MB.</p>
        </div>
      )}
      {productType === "Furniture" && (
        <div id="Furniture">
          <div className="form-group row mt-3">
            <label className="col-sm-2 col-form-label fw-bold">
              Height (CM):
            </label>
            <div className="col-sm-4">
              <input
                type="number"
                id="height"
                value={productAttributes.height || ""}
                {...register("height", { required: true })}
                onChange={handleAttributeChange}
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              {errors.height && (
                <p className="error_msg">Height is required.</p>
              )}
            </div>
          </div>
          <div className="form-group row mt-3">
            <label className="col-sm-2 col-form-label fw-bold">
              Width (CM):
            </label>
            <div className="col-sm-4">
              <input
                type="number"
                id="width"
                {...register("width", { required: true })}
                value={productAttributes.width || ""}
                onChange={handleAttributeChange}
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              {errors.width && <p className="error_msg">Width is required.</p>}
            </div>
          </div>
          <div className="form-group row mt-3">
            <label className="col-sm-2 col-form-label fw-bold">
              Length (CM):
            </label>
            <div className="col-sm-4">
              <input
                type="number"
                id="length"
                {...register("length", { required: true })}
                value={productAttributes.length || ""}
                onChange={handleAttributeChange}
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              {errors.length && (
                <p className="error_msg">Length is required.</p>
              )}
            </div>
          </div>
          <p className="mt-3 fw-bold">
            Please provide dimensions in HxWxL format.
          </p>
        </div>
      )}
      {productType === "Book" && (
        <div id="Book">
          <div className="form-group row mt-3">
            <label className="col-sm-2 col-form-label fw-bold">
              Weight (KG):
            </label>
            <div className="col-sm-4">
              <input
                type="number"
                id="weight"
                {...register("weight", { required: true })}
                value={productAttributes.weight || ""}
                onChange={handleAttributeChange}
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              {errors.weight && (
                <p className="error_msg">Weight is required.</p>
              )}
            </div>
          </div>
          <p className="mt-3 fw-bold">Please provide product weight in KG.</p>
        </div>
      )}
    </form>
  );
};

export default AddProduct;
