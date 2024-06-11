import React from "react";
import Image from "next/image";
import "./descriptionHeader.scss";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const DescriptionHeader = () => {
  return (
    <>
      <div className="container">
        <div className="descriptionHeader">
          <div className="descBox">
            <h2>Like a loan only easier</h2>

            <div className="descBox__calc">
              <div className="descBox__calc__box">
                <span>Car cost</span>
                <span>50000000</span>
              </div>
              <input type="range" id="initialFee" className="slider" min="100000" max="50000000" value="250000000" />
            </div>

            <div className="descBox__calc">
              <div className="descBox__calc__box">
                <span>An initial fee</span>
                <span>5000000</span>
              </div>
              <input type="range" id="initialFee" className="slider" min="100000" max="5000000" value="2500000" />
            </div>

            <div className="descBox__calc">
              <div className="descBox__calc__box">
                <span>Term</span>
                <span>12 months</span>
              </div>
              <input type="range" id="initialFee" className="slider" min="0" max="12" value="4" />
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
      </div>

      <div className="contactUs">
        <div className="contactus__box">
          <span>CHOOSE AUTOMOBILE</span>
          <div className="arrow">
            <div className="arrowInside">
              <div className="longArrow">
                <MdOutlineArrowForwardIos fill="#BF3535" />
              </div>
            </div>
          </div>
          <p>Choose a car from our catalog or offer your own option</p>
        </div>
        <div className="contactus__box">
          <span>CONTACT TO US</span>
          <div className="arrow">
            <div className="arrowInside">
              <div className="longArrow">
                <MdOutlineArrowForwardIos fill="#BF3535" />
              </div>
            </div>
          </div>
          <p>Contact us at any convenient time for you</p>
        </div>
        <div className="contactus__box">
          <span>TO CONCLUDE AGREEMENT</span>
          <div className="arrow">
            <div className="arrowInside">
              <div className="longArrow">
                <MdOutlineArrowForwardIos fill="#BF3535" />
              </div>
            </div>
          </div>
          <p>The contract is concluded within one day</p>
        </div>
      </div>
    </>
  );
};

export default DescriptionHeader;
