import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { TbClockHour5Filled } from "react-icons/tb";
import { BiPhoneCall } from "react-icons/bi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

import "./maps.scss";

const Maps = () => {
  return (
    <div className="maps">
      <div className="contactForm" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/footer.png')" }}>
          <div className="contactForm__holder">
            <h2>Contacts</h2>
            <div className="contactForm__icons">
              <IoLocationSharp />
              <div className="contactInfo">
                <strong>Adress</strong>
                <span>Uzbekistan</span>
              </div>
            </div>
            <div className="contactForm__icons">
              <TbClockHour5Filled />
              <div className="contactInfo">
                <strong>Working House</strong>
                <span>Mon - St : 10:00-18:00</span>
              </div>
            </div>
            <div className="contactForm__icons">
              <BiPhoneCall />
              <div className="contactInfo">
                <strong>Telephone</strong>
                <span>+998 ( __ ) - ___-__-__</span>
              </div>
            </div>
            <div className="contactForm__icons">
              <PiTelegramLogoLight />
              <CiFacebook />
              <FaWhatsapp />
            </div>
          </div>
      </div>

      <div className="adressMap" style={{ backgroundImage: "url('/maps.png')" }}>
        <form className="adressMapForm">
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Surname" required />
          <input type="text" placeholder="+998 ( __ ) - ___-__-__" required />
          <input type="email" name="" id="" placeholder="E-mail" required />
          <input type="text" placeholder="A comment" id="comment" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Maps;
