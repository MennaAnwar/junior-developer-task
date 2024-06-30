import { FC } from "react";
import "./Card.scss";

interface Props {
  SKU: string;
  Name: string;
  Price: number;
  Props: string;
  Type: string;
  onCheckboxChange: (sku: string, checked: boolean) => void;
  isChecked: boolean;
  isDeleting: boolean; // Add isDeleting prop
}

const Card: FC<Props> = ({
  SKU,
  Name,
  Price,
  Props,
  Type,
  onCheckboxChange,
  isChecked,
  isDeleting,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(SKU, e.target.checked);
  };
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
      {!isDeleting && ( // Render the checkbox only if isDeleting is false
        <input
          type="checkbox"
          className="delete-checkbox"
          id={SKU}
          checked={isChecked}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Card;
