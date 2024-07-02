"use client";
import React, { useState, useEffect } from "react";
import "./requestAcall.scss";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import RequestACall from "@/components/requestACall/RequestACall";
import { usePathname } from "next/navigation";
import Login from "@/components/login/Login";
//
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebase";
import { useRouter } from "next/navigation";

//

const page = () => {
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, [auth, router]);
  //

  const pathName = usePathname();
  console.log(pathName);

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

          {pathName == "/submits/request" && <RequestACall request={request} requestCallSubmit={requestCallSubmit} />}

          {pathName == "/submits/login" && <Login request={request} requestCallSubmit={requestCallSubmit} />}

          <div className="requestaCall__box__right__checkbox">
            <button onClick={requestCallSubmit}>
              {pathName == "/submits/request" && "CALL ME BACK"}
              {pathName == "/submits/login" && "SEND CODE"}
            </button>

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
