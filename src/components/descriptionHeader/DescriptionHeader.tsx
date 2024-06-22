import React from "react";
import Image from "next/image";
import "./descriptionHeader.scss";
import ContactUs from "./ContactUs/ContactUs";
import InitialTerm from "../initialTerm/InitialTerm";
import CurrentCarImg from "../CurrentCarById/currentCarImg/CurrentCarImg";

const DescriptionHeader = () => {
  return (
    <>
      <div className="container">
        <div className="descriptionHeader">
          <div className="descBox">
            <h2>Like a loan only easier</h2>

            <div className="aboutCarRight__scroll">
              <div className="initial">
                <strong>Car cost</strong>
                <span>5000000</span>
              </div>
              <input type="range" id="initialFee" className="slider" min="100000" max="5000000" />
            </div>

            <InitialTerm />

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
            <CurrentCarImg/>
            {/* <Image src="/car1.png" width={900} height={480} alt="Picture of the author" /> */}
          </div>
        </div>
      </div>

      <ContactUs />
    </>
  );
};

export default DescriptionHeader;
