import Link from "next/link";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <Link href="rent" className="contactus__box">
        <span>CHOOSE AUTOMOBILE</span>
        <div className="arrow">
          <div className="arrowInside">
            <div className="longArrow">
              <MdOutlineArrowForwardIos fill="#BF3535" />
            </div>
          </div>
        </div>
        <p>Choose a car from our catalog or offer your own option</p>
        <strong className="contactus__box__backNumbers">01</strong>
      </Link>
      <Link href="/requestACall" className="contactus__box">
        <span>CONTACT TO US</span>
        <div className="arrow">
          <div className="arrowInside">
            <div className="longArrow">
              <MdOutlineArrowForwardIos fill="#BF3535" />
            </div>
          </div>
        </div>
        <p>Contact us at any convenient time for you</p>
        <strong className="contactus__box__backNumbers">02</strong>
      </Link>

      <Link href="/personalArea" className="contactus__box">
        <span>TO CONCLUDE AGREEMENT</span>
        <div className="arrow">
          <div className="arrowInside">
            <div className="longArrow">
              <MdOutlineArrowForwardIos fill="#BF3535" />
            </div>
          </div>
        </div>
        <p>The contract is concluded within one day</p>
        <strong className="contactus__box__backNumbers">03</strong>
      </Link>
    </div>
  );
};

export default ContactUs;
