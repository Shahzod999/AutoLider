"use client";

import React, { useState } from "react";
import "./navig.scss";
import { PiUserCircleThin } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
const Navigation = () => {
  const [user, setUser] = useState({
    userState: false,
    userInfo: false,
  });
  console.log(user);

  const toggleUser = () => {
    setUser((prevState) => ({
      ...prevState,
      userState: !prevState.userState,
    }));
  };

  return (
    <div className="container">
      <div className="navigation">
        <strong>
          Auto <span>Lider</span>
        </strong>
        <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/catalog">CATALOG</a>
            </li>
            <li>
              <a href="/rent">RENT</a>
            </li>
            <li>
              <a href="/questions">QUESIONS</a>
            </li>
          </ul>
        </nav>
        <div className="user">
          <div className="userMenu">
            <PiUserCircleThin size={40} onClick={toggleUser} className={`${user.userState && "buttonActive"} buttonHover`} />
            {user.userState &&
              (user.userInfo ? (
                <div className="personalArea">
                  <div className="personalInfo">
                    <span>John Doe</span>
                    <strong>+998 ( __ ) ___ - __ - __</strong>
                    <button>
                      <span>+</span>Add account
                    </button>
                    <button>
                      <span>
                        <MdLogout />
                      </span>
                      Log out
                    </button>
                  </div>
                </div>
              ) : (
                <button className="button personalArea">
                  <div className="personal">Personal Area</div>

                  <span>|</span>

                  <div className="logIn">
                    <span>Log - In</span>
                    <FaArrowRightLong />
                  </div>
                </button>
              ))}
          </div>

          <div className="button">
            Request a call <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
