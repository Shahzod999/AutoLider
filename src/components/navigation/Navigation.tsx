"use client";

import React, { useEffect, useState } from "react";
import "./navig.scss";
import "./burgerMenu.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCall } from "react-icons/io5";

const Navigation = () => {
  const [burgerMenu, setburgerMenu] = useState(false);
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

  const handleBurgerMenu = () => {
    setburgerMenu(!burgerMenu);
  };

  const pathname = usePathname();

  useEffect(() => {
    setUser((prevState) => ({
      ...prevState,
      userState: false,
    }));
  }, [pathname]);

  return (
    <div className="navigWrapper">
      <div className="container">
        <div className="navigation">
          <div onClick={handleBurgerMenu} className={`burgerMenuHolder ${burgerMenu ? "burgerMenuOpen" : ""}`}>
            <span></span>
          </div>

          <Link href="/" className="logo">
            Auto <span>Lider</span>
          </Link>
          <nav className={`${burgerMenu ? "navBurgerMenu" : ""}`}>
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

                    <Link href="/submits/login" className="logIn">
                      <span>Log - In</span>
                      <FaArrowRightLong />
                    </Link>
                  </button>
                ))}
            </div>

            <Link href="/submits/request" className="button">
              <IoCall />
              <span>
                Request a call <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
