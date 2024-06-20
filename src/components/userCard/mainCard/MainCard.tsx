"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./mainCard.scss";

const MainCard = ({ numbers }) => {
  const [fastar, setFastar] = useState(false);

  const fastarHandler = () => {
    setFastar(!fastar);
  };

  const { inputFirst, inputSecond, inputThird, inputDate } = numbers;

  return (
    <div className="cardHolderMain">
      <div className="cardHolder__card otherCards">
        <div className="cardHolder__card__name otherCards__name">
          <span onClick={fastarHandler}>
            Card
            {fastar ? <FaStar fill="#3D3D3D" /> : <FaStar fill="white" />}
          </span>
        </div>

        <div className="cardHolder__card__numbers otherCards__numbers">
          <span>{inputFirst}</span>
          <span>{inputSecond}</span>
          <span>{inputThird}</span>
          <span>{inputDate}</span>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
