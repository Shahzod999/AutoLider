"use client";
import React, { useState, useEffect } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

import "./login.scss";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

// interface RequestACallProps {
// request: boolean;
// requestCallSubmit: () => void;
// }
// { request, requestCallSubmit }
// : React.FC<RequestACallProps>

const RequestACall = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [time, setTime] = useState(10);
  const router = useRouter();

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "normal",
      callback: (response) => {
        console.log("recaptcha solved");
      },
      "expired-callback": () => {},
    });
  }, [auth]);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSentOtp = async (e) => {
    e.preventDefault();
    try {
      const formatedPhoneNumber = `+${phoneNumber.replace(/\D/g, "")}`;
      console.log(auth, "s2552");
      const confirmation = await signInWithPhoneNumber(auth, formatedPhoneNumber, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setPhoneNumber("");
      alert("Otp has been sent");
    } catch (err) {
      console.error(err);
    }
  };

  const handleOtpsubmit = async (e) => {
    e.preventDefault();
    try {
      await confirmationResult.confirm(otp);
      setOtp("");
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  // if (request) {
  //   const timeToSentCode = () => {
  //     setTime(time - 1);
  //   };

  //   setTimeout(() => {
  //     timeToSentCode();
  //   }, 1000);
  // }

  return (
    <>
      <>
        <div id="recaptcha-container"></div>

        <div className="requestaCall__box__right__text">
          <h2>LOGIN TO PERSONAL CABINET</h2>
          <span>Login to your account to buy and rent cars faster and more conveniently</span>
        </div>
        <form onSubmit={handleSentOtp}>
          <input type="tel" placeholder="+998 ( __ ) - ___-__-__" value={phoneNumber} onChange={handlePhoneNumberChange} required />
          <input type="submit" style={{ display: "none" }} />
        </form>
      </>
      <div className="requestaCall__box__right__text">
        <h2>THANK YOU FOR APPLICATION</h2>
        <form onSubmit={handleOtpsubmit} className="requestaCall__SendCode">
          <input type="text" placeholder="code" required onChange={handleOtpChange} />
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
    </>
  );
};

export default RequestACall;
