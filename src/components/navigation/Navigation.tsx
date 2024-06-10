import React from "react";
import "./navig.scss";
import { PiUserCircleThin } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";

const Navigation = () => {
  return (
    <div className="container">
      <div className="navigation">
        <strong>
          Auto <span>Lider</span>
        </strong>

        <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">CATALOG</a>
            </li>
            <li>
              <a href="/">RENT</a>
            </li>
            <li>
              <a href="/">QUESIONS</a>
            </li>
          </ul>
        </nav>

        <div className="user">
          <PiUserCircleThin size={40}  />
          <div className="button">
            Request a call <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
