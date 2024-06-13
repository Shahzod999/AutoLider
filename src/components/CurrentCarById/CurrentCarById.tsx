import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import CurrentCarImg from "./currentCarImg/CurrentCarImg";
import { car } from "@/state/fakeData";
import "./currentCarById.scss";

const CurrentCarById = () => {
  return (
    <div className="currentCar">
      <Link href="/catalog" className="prevPage">
        <MdOutlineKeyboardArrowLeft className="icon" />
        Return to catalog
      </Link>
      <div className="aboutCar">
        <div className="aboutCarLeft">
          <CurrentCarImg />
          <div className="SPECIFICATIONS"></div>
          <div className="SPECIFICATIONS"></div>
        </div>

        <div className="aboutCarRight">
          <div className="aboutCarRight__nameBox">
            <h2>{car.name}</h2>
            <span>price</span>
            <span>{car.price} UZS</span>
            <span>Minimum payment from {car.MinimumPay} uzs</span>
            <span>View similar models </span>
            <button>BOOK NOW</button>
          </div>
          <div className="aboutCarRight__info">
            {Object.entries(car.information).map(([key, value], index) => (
              <div key={index}>
                {key}:{value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCarById;
