import { FC } from "react";
import "./Header.scss";

interface Props {
  title: string;
  btn1: string;
  btn2: string;
}

const Header: FC<Props> = ({ title, btn1, btn2 }) => {
  return (
    <div id="header">
      <div className="d-flex flex-column mx-3 mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <h3>{title}</h3>
          <div className="action-buttons d-flex justify-content-between align-items-center">
            <button
              id="add-product-btn"
              className="mx-3 btn btn-success"
              type="submit"
            >
              {btn1}
            </button>
            <button id="delete-product-btn" className="btn btn-danger">
              {btn2}
            </button>
          </div>
        </div>
        <hr className="hr" />
      </div>
    </div>
  );
};

export default Header;
