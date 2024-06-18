import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosAlert } from "react-icons/io";
import "./yourCars.scss";

const YourCars = ({ payment }) => {
  return (
    <div className="yourCars__main">
      
      <div className="yourCars__main__info">
        <img src="/car1.png" alt="" />
        <div className="yourCars__main__info__text">
          <h3>
            Chevrolet <span>malibu</span>
          </h3>

          <span>2 TURBO Rent</span>
          <strong>3000000 uzs / day</strong>
          <span>Deposit from 50000000 uzs</span>
        </div>
      </div>

      <div className="yourCars__main__payment">
        <div className="yourCars__main__payment__box">
          <div className="yourCars__main__payment__box__checkMark">
            {payment ? (
              <>
                <IoIosCheckmarkCircle size={45} fill="#51b04f" />
                <span>Paid for</span>
              </>
            ) : (
              <>
                <IoIosAlert size={45} fill="red" />
                <span>Not paid for</span>
              </>
            )}
          </div>

          {payment ? (
            <div className="yourCars__main__payment__box__price">
              <span>Next payment: </span>
              <span>01/24/2024 to 12:45 p.m.</span>
            </div>
          ) : (
            <div className="yourCars__main__payment__box__price">
              <span>To avoid blocking the car, make a payment before </span>
              <span style={{ color: "red" }}>05/11/2024</span>
            </div>
          )}
        </div>

        <div className="yourCars__main__payment__box">
          <div className="yourCars__main__payment__box__checkMark">
            <strong>3000000 uzs</strong>
          </div>
          <div className="yourCars__main__payment__box__price">
            <span>Payment: daily until 00:00</span>
            <strong>Pay Now</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCars;
