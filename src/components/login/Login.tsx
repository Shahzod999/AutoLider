"use client";
import "./login.scss";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const RequestACall = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [time, setTime] = useState(10);
  const [request, setRequest] = useState(false);
  const router = useRouter();

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };
  const handleRequest = () => {
    setRequest(!request);
  };

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {});
  }, [auth]);

  const handleSentOtp = async (e) => {
    const appVerifier = window.recaptchaVerifier;
    e.preventDefault();
    handleRequest();
    try {
      const formatedPhoneNumber = `+${phoneNumber.replace(/\D/g, "")}`;
      const confirmation = await signInWithPhoneNumber(auth, formatedPhoneNumber, appVerifier);
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

  return (
    <>
      <div id="recaptcha-container"></div>

      {!request && (
        <>
          <div className="requestaCall__box__right__text">
            <h2>LOGIN TO PERSONAL CABINET</h2>
            <span>Login to your account to buy and rent cars faster and more conveniently</span>
          </div>
          <form onSubmit={handleSentOtp}>
            <input type="tel" placeholder="+998 ( __ ) - ___-__-__" value={phoneNumber} onChange={handlePhoneNumberChange} required />
            <input type="submit" style={{ display: "none" }} />
          </form>
        </>
      )}

      {request && (
        <div className="requestaCall__box__right__text">
          <h2>THANK YOU FOR APPLICATION</h2>
          <form onSubmit={handleOtpsubmit} className="requestaCall__SendCode">
            <input type="text" placeholder="code" required onChange={handleOtpChange} />
            <input type="submit" style={{ display: "none" }} />
          </form>
          <span className="timeSendAgainCode">You will be able to request an SMS code after 00:{time}</span>

          <div className="turnBackToLogin">
            <div className="prevPage" onClick={handleRequest}>
              <MdOutlineKeyboardArrowLeft className="icon" />
              <span>To change number</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestACall;
