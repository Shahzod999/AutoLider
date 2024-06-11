import React from "react";
import "./lizing.scss";
import Image from "next/image";

const LizingCard = () => {
  return (
    <div className="lizing">
      <div className="blocks">
        <span>Leasing up to 5 years</span>
        <span>Advance 0%</span>
        <span>Warranty up to 150 thousand km</span>
      </div>
      <div className="picture">
        <Image src="/carBlock.png" width={340} height={190} alt="carImage" />
      </div>
      <div className="prices">
        <p className="disc">
          CHEVROLET <span>MALIBU</span>
        </p>
        <span>Minimum payment</span>
        <strong>3000000 uzs</strong>
        <span>Price from 15,000,000 uzs</span>
        <span>View similar models</span>

        <button>BOOK NOW</button>
      </div>
    </div>
  );
};

export default LizingCard;
