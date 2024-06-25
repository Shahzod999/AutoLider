"use client";
import React, { useState } from "react";
import { category } from "@/state/fakeData";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./category.scss";
import { Category } from "@/state/typesFakeData";

const CatalogCategory: React.FC = () => {
  const [arrowUp, setArrowUp] = useState<string[]>([]);

  const handleArrow = (category: string) => {
    setArrowUp((prevArrowUp) => {
      const isCategory = prevArrowUp.includes(category);
      if (isCategory) {
        return prevArrowUp.filter((item) => item !== category);
      } else {
        return [...prevArrowUp, category];
      }
    });
  };

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

      <div className="categoryInSide">
        {Object.keys(category).map((categoryName, index) => (
          <div key={index} className="categoryBox">
            <div className="yearofIssue" onClick={() => handleArrow(categoryName)}>
              <h3>{categoryName}</h3>
              <span>{arrowUp.includes(categoryName) ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
            </div>

            {arrowUp.includes(categoryName) &&
              (Array.isArray(category[categoryName as keyof Category]) ? (
                <ul>
                  {(category[categoryName as keyof Category] as string[]).map((option, i) => (
                    <li key={i}>
                      <input type="checkbox" name="" id="" />
                      {option}
                    </li>
                  ))}
                </ul>
              ) : (
                Object.keys(category[categoryName as keyof Category]).map((brand, i) => (
                  <div key={i}>
                    <h5>{brand}</h5>
                    <ul>
                      {(category[categoryName as keyof Category] as { [key: string]: string[] })[brand].map((model, j) => (
                        <li key={j}>
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
