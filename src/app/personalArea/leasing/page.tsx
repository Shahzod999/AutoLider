"use client";
import YourCars from "@/components/yourCars/YourCars";
import "./leasing.scss";
import Pagination from "@/components/pagination/Pagination";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import LeasingPersonalArea from "@/components/leasingPersonalArea/LeasingPersonalArea";

// сюда линк будет переходить по конкретной машине

const page = () => {
  const [arrow, setArrow] = useState(false);

  const handleOpen = () => {
    setArrow(!arrow);
  };
  return (
    <div className="rentedCars">
      <div className="yourCars">
        <h2>Your cars</h2>
        <YourCars payment={true} />

        <div className="leasingSchedule">
          <div className="leasingPagination">
            <h2>PAYMENT SCHEDULE</h2>

            <div className="leasingPagination__buttons">
              {arrow && <Pagination />}

              <div onClick={handleOpen} className="leasingPagination__Arrow">
                {arrow ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
            </div>
          </div>

          {arrow && <LeasingPersonalArea />}
        </div>
      </div>
    </div>
  );
};

export default page;
