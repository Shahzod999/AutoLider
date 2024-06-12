import React from "react";
import { category } from "@/state/fakeData";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./category.scss";

interface Category {
  Brand: string[];
  Model: {
    [key: string]: string[];
  };
  Body: string[];
  Engine: string[];
  Transmission: string[];
  "Drive unit": string[];
  "Type of fuel": string[];
}

const CatalogCategory: React.FC = () => {
  return (
    <div className="categoryPrice">
      <div className="range">
        <input type="text" placeholder="50000" />
        <input type="text" placeholder="50000" />
      </div>

      <div className="sliderMinMax">
        <input type="range" id="initialFee" className="sliderReverse" min="100000" max="5000000" />
        <input type="range" id="initialFee" className="slider" min="100000" max="5000000" />
      </div>

      <div className="category">
        {Object.keys(category).map((categoryName, index) => (
          <div key={index} className="categoryBox">
            <h3>{categoryName}</h3>
            {Array.isArray(category[categoryName]) ? (
              <ul>
                {category[categoryName].map((option, i) => (
                  <li key={i}>
                    <input type="checkbox" name="" id="" />
                    {option}
                  </li>
                ))}
              </ul>
            ) : (
              Object.keys(category[categoryName]).map((brand, i) => (
                <div key={i}>
                  <h5>{brand}</h5>
                  <ul>
                    {category[categoryName][brand].map((model, i) => (
                      <li key={i}>
                        <input type="checkbox" name="" id="" />
                        {model}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        ))}
      </div>

      <h3>Year of issue</h3>
      <div className="range">
        <input type="text" placeholder="50000" />
        <input type="text" placeholder="50000" />
      </div>

      <div className="sliderMinMax">
        <input type="range" id="initialFee" className="sliderReverse" min="100000" max="5000000" />
        <input type="range" id="initialFee" className="slider" min="100000" max="5000000" />
      </div>
    </div>
  );
};

export default CatalogCategory;
