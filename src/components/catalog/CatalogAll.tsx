"use client";
import React, { useState } from "react";
import "./catalog.scss";
import CatalogCategory from "./category/CatalogCategory";
import { BsFilterSquareFill } from "react-icons/bs";
import LizingCard from "../greatOffer/lizingCards/LizingCard";
import Pagination from "../pagination/Pagination";

const CatalogAll = () => {
  const [filter, setFilter] = useState(false);

  return (
    <div className="catalogAll">
      <div className="catalogAll__title prevPage" onClick={() => setFilter(!filter)}>
        <span>
          <BsFilterSquareFill className={filter ? "icon" : ""} size={25} />
        </span>
      </div>

      <div className="catalogAllBox">
        <div className={`category ${filter ? "openCategory" : ""}`}>
          <CatalogCategory />
        </div>

        <div className="catalogCars">
          <div className="catalogHeader">
            <div className="catalogButtons">
              <button>All</button>
              <button>New</button>
              <button>Used</button>
            </div>
            <div className="catalogButtons">
              <button>All</button>
              <button>Leasing up to 5 years</button>
              <button>Advance 0%</button>
              <button>Warranty up to 150 thousand km</button>
            </div>
          </div>

          <div className="gridLizingCard">
            <LizingCard />
            <LizingCard />
            <LizingCard />
            <LizingCard />
            <LizingCard />
            <LizingCard />
            <LizingCard />
            <LizingCard />
            <LizingCard />
            <LizingCard />
            <LizingCard />
            <LizingCard />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default CatalogAll;
