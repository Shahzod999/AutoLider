"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import CurrentCarImg from "./currentCarImg/CurrentCarImg";
import { car } from "@/state/fakeData";
import "./currentCarById.scss";
import InitialTerm from "../initialTerm/InitialTerm";
import LizingPrice from "../greatOffer/lizingCards/lizingPrice/LizingPrice";

const CurrentCarById = () => {
  const [engine, setEngine] = useState("standartEquipment");

  return (
    <div className="currentCar">
      <div className="aboutCar">
        <div className="aboutCarLeft">
          <Link href="/catalog" className="prevPage">
            <MdOutlineKeyboardArrowLeft className="icon" />
            Return to catalog
          </Link>
          <CurrentCarImg />
          <div className="aboutCarLeft__options">
            <h2 className={engine === "specifications" ? `optionsActive` : ""} onClick={() => setEngine("specifications")}>
              specifications
            </h2>
            <h2 className={engine === "standartEquipment" ? `optionsActive` : ""} onClick={() => setEngine("standartEquipment")}>
              STANDARD EQUIPMENT
            </h2>
          </div>

          {engine === "specifications" && (
            <div className="specifications">
              {Object.entries(car.specifications).map(([key, value]) => (
                <div className="specificEngine" key={key}>
                  <h3>{key}</h3>
                  {Object.entries(value).map(([subKey, subValue]) => (
                    <div key={subKey} className="infoHolder">
                      <span>{subKey}</span>
                      <strong>{subValue}</strong>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {engine === "standartEquipment" && (
            <div className="standartEquipment">
              {Object.entries(car.standartEquipment).map(([key, value]) => (
                <div className="specificEngine" key={key}>
                  <h3>{key}</h3>
                  {Object.entries(value).map(([subKey, subValue]) => (
                    <div key={subKey} className="infoHolder">
                      <span>{subKey}</span>
                      <strong>{subValue}</strong>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="aboutCarRight">
          <LizingPrice />

          <div className="aboutCarRight__info">
            {Object.entries(car.information).map(([key, value]) => (
              <div key={key} className="infoHolder">
                <span>{key}</span>
                <strong>{value}</strong>
              </div>
            ))}
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
      </div>
    </div>
  );
};

export default CurrentCarById;
