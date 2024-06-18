"use client";

import React, { useState } from "react";
import "./navig.scss";
import { PiUserCircleThin } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Link from "next/link";

const Navigation = () => {
  const [user, setUser] = useState({
    userState: false,
    userInfo: false,
  });

  const toggleUser = () => {
    setUser((prevState) => ({
      ...prevState,
      userState: !prevState.userState,
    }));
  };

  return (
    <div className="navigWrapper">
      <div className="container">
        <div className="navigation">
          <Link href="/" className="logo">
            Auto <span>Lider</span>
          </Link>
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
              <FaRegUser size={20} onClick={toggleUser} className={`${user.userState && "buttonActive"} buttonHover`} />
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
                    <Link href="/personalArea" className="personal">
                      Personal Area
                    </Link>

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
    </div>
  );
};

export default Navigation;
