"use client";
import FinesPersonalArea from "@/components/finesPersonalArea/FinesPersonalArea";
import React, { useState } from "react";
import "./fines.scss";
import Pagination from "@/components/pagination/Pagination";
import { IoCalendar } from "react-icons/io5";
import Calendar from "@/components/calendar/Calendar";

const page = () => {
  const [calendar, setCalendar] = useState(false);

  const toggleSwitch = (e) => {
    e.target.classList.contains("switch-on") ? e.target.classList.remove("switch-on") : e.target.classList.add("switch-on");
  };

  return (
    <div className="rentedCars">
      <div className="yourCars">
        <h2>Your Fines</h2>

        <span className="borderHorizontal"></span>

        <div className="finesPagination">
          <div className="finesPagination__box">
            <IoCalendar
              className="iconCalendar"
              onClick={() => {
                setCalendar(!calendar);
              }}
            />
            {calendar && (
              <div className="mainCalendar">
                <Calendar />
              </div>
            )}
            <div className="finesPagination__box__switch">
              <span>Paid for</span>
              <div className="switch-btn switch-on" onClick={toggleSwitch}></div>
              <span>Not paid for</span>
            </div>
          </div>

          <Pagination />
        </div>

        <FinesPersonalArea />
      </div>
    </div>
  );
};

export default page;
