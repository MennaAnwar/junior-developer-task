import { FC, useState } from "react";
import Header from "../../components/Header/Header";
import { useForm } from "react-hook-form";

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
    const completeData = { ...fixedAttributes, ...productAttributes };
    console.log(completeData);
  };

  return (
    <>
      <form
        id="product_form"
        className="mx-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Header title="Product Add" btn1="Save" btn2="Cancel" />

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
            {errors.sku && <p>SKU is required.</p>}
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
            {errors.name && <p>Name is required.</p>}
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
            {errors.price && <p>Price is required.</p>}
          </div>
        </div>
        <div className="form-group row mt-3">
          <label className="col-sm-2 col-form-label fw-bold">
            Type Switcher
          </label>
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
            {errors.productType && <p>Select a valid product type.</p>}
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
                {errors.size && <p>Size is required.</p>}
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
                {errors.height && <p>Height is required.</p>}
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
                {errors.width && <p>Width is required.</p>}
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
                {errors.length && <p>Length is required.</p>}
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
                {errors.weight && <p>Weight is required.</p>}
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
