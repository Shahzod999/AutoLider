"use client";
import React from "react";
import "./lizing.scss";
import Image from "next/image";
import Link from "next/link";
import LizingPrice from "./lizingPrice/LizingPrice";
import { usePathname } from "next/navigation";

const LizingCard = () => {
  const params = usePathname();

  return (
    <Link href="/catalog/modelX">
      <div className="lizing">
        {params == "/rent" ? (
          <div className="rentBlocks">
            <span>Available</span>
            <span>Comfort</span>
          </div>
        ) : (
          <div className="blocks">
            <span>Leasing up to 5 years</span>
            <span>Advance 0%</span>
            <span>Warranty up to 150 thousand km</span>
          </div>
        )}

        <div className="picture">
          <Image src="/carBlock.png" width={340} height={190} alt="carImage" />
        </div>
        <LizingPrice />
      </div>
    </Link>
  );
};

export default LizingCard;
