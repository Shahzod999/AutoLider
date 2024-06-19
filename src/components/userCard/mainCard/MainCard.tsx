import React from "react";
import { FaStar } from "react-icons/fa";

const MainCard = ({ numbers }) => {
  const { inputFirst, inputSecond, inputThird, inputDate } = numbers;

  return (
    <div className="cardHolder__card">
      <div className="cardHolder__card__name">
        <span>
          Card
          <FaStar />
        </span>
      </div>

      <div className="cardHolder__card__numbers">
        <span>{inputFirst}</span>
        <span>{inputSecond}</span>
        <span>{inputThird}</span>
        <span>{inputDate}</span>
      </div>
    </div>
  );
};

export default MainCard;
