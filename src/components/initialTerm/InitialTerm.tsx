import React from "react";
import { car } from "@/state/fakeData";

const InitialTerm = () => {
  return (
    <>
      {Object.entries(car.scroll).map(([key, value]) => (
        <div key={key} className="aboutCarRight__scroll">
          <div className="initial">
            <strong>{key}</strong>
            <span>{value}</span>
          </div>
          <input type="range" id="initialFee" className="slider" min="100000" max="5000000" />
        </div>
      ))}
    </>
  );
};

export default InitialTerm;
