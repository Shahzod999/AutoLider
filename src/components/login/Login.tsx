"use client";
import React, { useState } from "react";
import "./login.scss";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface RequestACallProps {
  request: boolean;
  requestCallSubmit: () => void;
}

const RequestACall: React.FC<RequestACallProps> = ({ request, requestCallSubmit }) => {
  const [time, setTime] = useState(10);

  if (request) {
    const timeToSentCode = () => {
      setTime(time - 1);
    };

    setTimeout(() => {
      timeToSentCode();
    }, 1000);
  }

  return (
    <>
      {!request && (
        <>
          <div className="requestaCall__box__right__text">
            <h2>LOGIN TO PERSONAL CABINET</h2>
            <span>Login to your account to buy and rent cars faster and more conveniently</span>
          </div>
          <form onSubmit={requestCallSubmit}>
            <input type="text" placeholder="+998 ( __ ) - ___-__-__" required />
            <input type="submit" style={{ display: "none" }} />
          </form>
        </>
      )}
      {request && (
        <div className="requestaCall__box__right__text">
          <h2>THANK YOU FOR APPLICATION</h2>
          <form onSubmit={requestCallSubmit} className="requestaCall__SendCode">
            <input type="text" maxLength={1} required />
            <input type="text" maxLength={1} required />
            <input type="text" maxLength={1} required />
            <input type="text" maxLength={1} required />
            <input type="submit" style={{ display: "none" }} />
          </form>
          <span className="timeSendAgainCode">You will be able to request an SMS code after 00:{time}</span>

          <div className="turnBackToLogin">
            <Link href="/submits/login" className="prevPage">
              <MdOutlineKeyboardArrowLeft className="icon" />
              <span>To change number</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestACall;
