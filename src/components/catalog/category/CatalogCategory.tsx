"use client";
import React, { useState } from "react";
import { category } from "@/state/fakeData";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./category.scss";

const CatalogCategory: React.FC = () => {
  const [arrowUp, setArrowUp] = useState([]);

  const handleArrow = (category) => {
    setArrowUp((prevArrowUp) => {
      const isCategory = prevArrowUp.includes(category);
      if (isCategory) {
        return prevArrowUp.filter((item) => item !== category);
      } else {
        return [...prevArrowUp, category];
      }
    });
  };

  console.log(arrowUp, "sdsd");

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
            <div className="yearofIssue" onClick={() => handleArrow(categoryName)}>
              <h3>{categoryName}</h3>
              <span>{arrowUp.includes(categoryName) ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
            </div>

            {arrowUp.includes(categoryName) &&
              (Array.isArray(category[categoryName]) ? (
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
              ))}
          </div>
        ))}
      </div>

      <div className="yearofIssue" onClick={() => handleArrow("yearofIssue")}>
        <h3>Year of issue </h3>
        <span>{arrowUp.includes("yearofIssue") ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
      </div>
      {arrowUp.includes("yearofIssue") && (
        <>
          <div className="range">
            <input type="text" placeholder="50000" />
            <input type="text" placeholder="50000" />
          </div>

          <div className="sliderMinMax">
            <input type="range" id="initialFee" className="sliderReverse" min="100000" max="5000000" />
            <input type="range" id="initialFee" className="slider" min="100000" max="5000000" />
          </div>
        </>
      )}
    </div>
  );
};

export default CatalogCategory;
