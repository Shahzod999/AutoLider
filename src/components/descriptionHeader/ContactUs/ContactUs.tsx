import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="contactus__box">
        <span>CHOOSE AUTOMOBILE</span>
        <div className="arrow">
          <div className="arrowInside">
            <div className="longArrow">
              <MdOutlineArrowForwardIos fill="#BF3535" />
            </div>
          </div>
        </div>
        <p>Choose a car from our catalog or offer your own option</p>
      </div>
      <div className="contactus__box">
        <span>CONTACT TO US</span>
        <div className="arrow">
          <div className="arrowInside">
            <div className="longArrow">
              <MdOutlineArrowForwardIos fill="#BF3535" />
            </div>
          </div>
        </div>
        <p>Contact us at any convenient time for you</p>
      </div>
      <div className="contactus__box">
        <span>TO CONCLUDE AGREEMENT</span>
        <div className="arrow">
          <div className="arrowInside">
            <div className="longArrow">
              <MdOutlineArrowForwardIos fill="#BF3535" />
            </div>
          </div>
        </div>
        <p>The contract is concluded within one day</p>
      </div>
    </div>
  );
};

export default ContactUs;
