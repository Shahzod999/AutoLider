import React from "react";
import "./greatOffer.scss";
import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import LizingCard from "./lizingCards/LizingCard";
import Link from "next/link";

const GreatOffer = () => {
  return (
    <div className="container">
      <div className="greatOffer">
        <h2>GreatOffer</h2>

        <div className="anotherCars">
          <Link href="/catalog">another cars</Link>
          <div className="arrow">
            <div className="arrowInside">
              <div className="longArrow">
                <MdOutlineArrowForwardIos fill="#BF3535" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lizingCards">
        <LizingCard />
        <LizingCard />
        <LizingCard />
        <LizingCard />
      </div>

      <div className="carModels">
        <div className="carModels__emb">
          <Image src="/mers.png" width={500} height={500} alt="carImage" />
        </div>
        <div className="carModels__emb">
          <Image src="/shevrolet.png" width={185} height={80} alt="carImage" />
        </div>
        <div className="carModels__emb">
          <Image src="/toyota.png" width={130} height={130} alt="carImage" />
        </div>

        <div className="carModels__emb">
          <Image src="/byd.png" width={250} height={130} alt="carImage" />
        </div>

        <div className="carModels__emb">
          <Image src="/bmw.png" width={130} height={130} alt="carImage" />
        </div>
        <div className="carModels__emb">
          <Image src="/zeekr.png" width={250} height={130} alt="carImage" />
        </div>
      </div>
    </div>
  );
};

export default GreatOffer;
