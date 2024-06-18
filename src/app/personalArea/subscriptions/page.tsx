import React from "react";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./subscriptions.scss";

const page = () => {
  return (
    <div className="socialSites">
      <div className="socialSites__box">
        <FaTelegram fill="#28A8EA" className="subscIcon" />
        <div>
          <h4>Telegram</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Magna enim eget ornare aliquam nam habitant odio. Et vitae dignissim convallis tempor at aliquam.</p>
          <MdOutlineArrowForwardIos fill="#28A8EA" className="subscIcon" size={20} />
        </div>
      </div>

      <div className="socialSites__box">
        <IoLogoWhatsapp fill="#008517" className="subscIcon" />
        <div>
          <h4>Telegram</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Magna enim eget ornare aliquam nam habitant odio. Et vitae dignissim convallis tempor at aliquam.</p>
          <MdOutlineArrowForwardIos fill="#28A8EA" className="subscIcon" size={20} />
        </div>
      </div>
      <div className="socialSites__box">
        <BsFacebook fill="#185397" className="subscIcon" />
        <div>
          <h4>Telegram</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Magna enim eget ornare aliquam nam habitant odio. Et vitae dignissim convallis tempor at aliquam.</p>
          <MdOutlineArrowForwardIos fill="#28A8EA" className="subscIcon" size={20} />
        </div>
      </div>
    </div>
  );
};

export default page;
