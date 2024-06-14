"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import CurrentCarImg from "./currentCarImg/CurrentCarImg";
import { car } from "@/state/fakeData";
import "./currentCarById.scss";
import InitialTerm from "../initialTerm/InitialTerm";

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
            <h4 tabIndex={0} onClick={() => setEngine("specifications")}>
              specifications
            </h4>
            <h4 tabIndex={0} onClick={() => setEngine("standartEquipment")}>
              STANDARD EQUIPMENT
            </h4>
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
          <div className="aboutCarRight__nameBox">
            <h2>{car.name}</h2>
            <span>Price</span>
            <strong>{car.price} UZS</strong>
            <span>Minimum payment from {car.MinimumPay} uzs</span>
            <div className="aboutCarRight__nameBox">
              <div className="view">
                <span>View similar models</span>
                <MdOutlineKeyboardArrowRight className="icon" />
              </div>
              <button>BOOK NOW</button>
            </div>
          </div>
          <div className="aboutCarRight__info">
            {Object.entries(car.information).map(([key, value]) => (
              <div key={key} className="infoHolder">
                <span>{key}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <InitialTerm />
        </div>
      </div>
    </div>
  );
};

export default CurrentCarById;
