import { FC, useState } from "react";
import Header from "../../components/Header/Header";

type ProductType = "Type Switcher" | "DVD" | "Furniture" | "Book";

const AddProduct: FC = () => {
  const [productType, setProductType] = useState<ProductType>("Type Switcher");
  const [productAttributes, setProductAttributes] = useState<{
    [key: string]: string | number;
  }>({});

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductType(e.target.value as ProductType);
    setProductAttributes({});
  };

  const handleAttributeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductAttributes({
      ...productAttributes,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header title="Product Add" btn1="Save" btn2="Cancel" />
      <form id="product_form" className="mx-3">
        <div className="form-group row mt-3">
          <label className="col-sm-2 col-form-label fw-bold">SKU:</label>
          <div className="col-sm-10">
            <input type="text" id="sku" name="sku" className="form-control" />
          </div>
        </div>
        <div className="form-group row mt-3">
          <label className="col-sm-2 col-form-label fw-bold">Name:</label>
          <div className="col-sm-10">
            <input type="text" id="name" name="name" className="form-control" />
          </div>
        </div>
        <div className="form-group row mt-3">
          <label className="col-sm-2 col-form-label fw-bold">Price ($):</label>
          <div className="col-sm-10">
            <input
              type="text"
              id="price"
              name="price"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row mt-3">
          <label className="col-sm-2 col-form-label fw-bold">
            Type Switcher
          </label>
          <div className="col-sm-10">
            <select
              id="productType"
              value={productType}
              onChange={handleTypeChange}
              className="form-select"
            >
              <option selected disabled>
                Type Switcher
              </option>
              <option value="DVD">DVD</option>
              <option value="Furniture">Furniture</option>
              <option value="Book">Book</option>
            </select>
          </div>
        </div>
        {productType === "DVD" && (
          <div id="DVD">
            <div className="form-group row mt-3">
              <label className="col-sm-2 col-form-label fw-bold">
                Size (MB):
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  id="size"
                  name="size"
                  value={productAttributes.size || ""}
                  onChange={handleAttributeChange}
                  className="form-control"
                />
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
              <div className="col-sm-10">
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={productAttributes.height || ""}
                  onChange={handleAttributeChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row mt-3">
              <label className="col-sm-2 col-form-label fw-bold">
                Width (CM):
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  id="width"
                  name="width"
                  value={productAttributes.width || ""}
                  onChange={handleAttributeChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row mt-3">
              <label className="col-sm-2 col-form-label fw-bold">
                Length (CM):
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  id="length"
                  name="length"
                  value={productAttributes.length || ""}
                  onChange={handleAttributeChange}
                  className="form-control"
                />
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
              <div className="col-sm-10">
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={productAttributes.weight || ""}
                  onChange={handleAttributeChange}
                  className="form-control"
                />
              </div>
            </div>
            <p className="mt-3 fw-bold">Please provide product weight in KG.</p>
          </div>
        )}
      </form>
    </>
  );
};

export default AddProduct;
