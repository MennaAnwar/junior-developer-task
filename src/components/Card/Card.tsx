import { FC } from "react";
import "./Card.scss";

interface Props {
  SKU: string;
  Name: string;
  Price: number;
  Props: string;
  Type: string;
}

const Card: FC<Props> = ({ SKU, Name, Price, Props, Type }) => {
  // Adjust Props display based on Type
  const displayProps =
    Type === "Furniture"
      ? `Dimension: ${Props}`
      : Type === "Book"
      ? `Weight: ${Props} KG`
      : `Size: ${Props} MB`;

  return (
    <div className="ProductCard">
      <div className="card-content d-flex flex-column justify-content-center align-items-center">
        <label htmlFor={SKU}>{SKU}</label>
        <h4>{Name}</h4>
        <span>{Price} $</span>
        <span>{displayProps}</span>
      </div>
      <div className="card-check">
        <input type="checkbox" id={SKU} />
      </div>
    </div>
  );
};

export default Card;
