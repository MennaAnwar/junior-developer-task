import { FC } from "react";
import "./Footer.scss";

const Footer: FC = () => {
  return (
    <div
      id="footer"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <hr className="hr" />
      <p>Scandiweb Test Assignment</p>
    </div>
  );
};

export default Footer;
