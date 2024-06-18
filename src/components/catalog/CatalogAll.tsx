import React from "react";
import "./catalog.scss";
import CatalogCategory from "./category/CatalogCategory";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import LizingCard from "../greatOffer/lizingCards/LizingCard";
import Pagination from "../pagination/Pagination";

const CatalogAll = () => {
  return (
    <div className="catalogAll">
      <h2 className="catalogAll__title">
        Price
        <MdKeyboardArrowDown />
      </h2>

      <div className="catalogAllBox">
        <div className="category">
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
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogAll;
