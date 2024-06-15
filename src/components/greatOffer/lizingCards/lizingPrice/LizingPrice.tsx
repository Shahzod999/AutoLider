import React from "react";
import { car } from "@/state/fakeData";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./lizingPrice.scss";

const LizingPrice = () => {
  return (
    <div className="aboutCarRight__nameBox">
      <h2>{car.name}</h2>
      <span>Minimum payment</span>
      <strong>{car.MinimumPay} uzs</strong>
      <span>Price from {car.price} uzs</span>
      <div className="aboutCarRight__nameBox">
        <div className="view">
          <span>View similar models</span>
          <MdOutlineKeyboardArrowRight className="icon" />
        </div>
        <button>BOOK NOW</button>
      </div>
    </div>
  );
};

export default LizingPrice;
