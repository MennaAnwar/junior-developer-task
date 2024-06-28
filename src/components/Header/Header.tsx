import { FC, ReactElement } from "react";
import "./Header.scss";

interface Props {
  title: string;
  btns: ReactElement;
}

const Header: FC<Props> = ({ title, btns }) => {
  return (
    <div id="header">
      <div className="d-flex flex-column mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <h3>{title}</h3>
          <div className="action-buttons d-flex justify-content-between align-items-center">
            {btns}
          </div>
        </div>
        <hr className="hr" />
      </div>
    </div>
  );
};

export default Header;
