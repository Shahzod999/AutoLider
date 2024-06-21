"use client";
import React, { useState } from "react";
import "./requestAcall.scss";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";

const page = () => {
  const [request, setRequest] = useState(false);
  const requestCallSubmit = () => {
    setRequest(true);
    setTimeout(() => {
      setRequest(false);
    }, 5000);
  };

  return (
    <div className="requestaCall">
      <div className="requestaCall__box">
        <div className="requestaCall__box__left">
          <div className="requestaCall__box__left__text">
            <h2>AVAILABLE CARS</h2>
            <span>IT'S SIMPLE WITH US CUSTOM SOLUTION FOR YOU.</span>
          </div>
        </div>

        <div className="requestaCall__box__right">
          <Link href="/" className="prevPage">
            <MdOutlineKeyboardArrowLeft className="icon" size={30} />
            <span>Return</span>
          </Link>
          {!request && (
            <>
              <div className="requestaCall__box__right__text">
                <h2>REQUEST A CALL</h2>
                <span>Leave your phone number and we will call you back see you soon</span>
              </div>
              <form onSubmit={requestCallSubmit}>
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Surname" required />
                <input type="text" placeholder="+998 ( __ ) - ___-__-__" required />
                <input type="submit" style={{ display: "none" }} />
              </form>
            </>
          )}
          {request && (
            <div className="requestaCall__box__right__text">
              <h2>THANK YOU FOR APPLICATION</h2>
              <span className={`requestaCall__box__right__text ${request ? "submit" : ""}`}>Our specialist will contact you Please wait</span>
            </div>
          )}

          <div className="requestaCall__box__right__checkbox">
            <button onClick={requestCallSubmit}>CALL ME BACK</button>
            <div className="requestaCall__box__right__checkbox__input">
              <input type="checkbox" />
              <p>I agree to the Terms of Personal Data Processing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
