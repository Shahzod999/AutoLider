import React from "react";
import Image from "next/image";
import "./descriptionHeader.scss";

const DescriptionHeader = () => {
  return (
    <div className="container">
      <div className="descriptionHeader">
        <div className="descBox">
          <h2>Like a loan only easier</h2>

          <div className="descBox__calc">
            <div className="descBox__calc__box">
              <span>Car cost</span>
              <span>50000000</span>
            </div>
            <hr />
          </div>

          <div className="descBox__calc">
            <div className="descBox__calc__box">
              <span>An initial fee</span>
              <span>5000000</span>
            </div>
            <hr />
          </div>

          <div className="descBox__calc">
            <div className="descBox__calc__box">
              <span>Term</span>
              <span>12 months</span>
            </div>
            <hr />
          </div>

          <div className="descBox__calc__payment">
            <div>
              <strong>50000</strong>
              <span>UZS</span>
              <span>/ Per day</span>
            </div>

            <div>
              <strong>50000.00</strong>
              <span>UZS</span>
              <span>/ Per day</span>
            </div>
          </div>
        </div>

        <div className="descBoxCar">
          <Image src="/car1.png" width={900} height={480} alt="Picture of the author" />
        </div>
      </div>

      <div className="contactUs">
        <div className="contactusBox">
          <span>CHOOSE AUTOMOBILE</span>
          <hr />
          <p>Choose a car from our catalog or offer your own option</p>
        </div>
        <div className="contactusBox">
          <span>CONTACT TO US</span>
          <hr />
          <p>Contact us at any convenient time for you</p>
        </div>
        <div className="contactusBox">
          <span>TO CONCLUDE AGREEMENT</span>
          <hr />
          <p>The contract is concluded within one day</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionHeader;
