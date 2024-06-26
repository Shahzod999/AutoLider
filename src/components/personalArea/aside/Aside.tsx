"use client";
import Link from "next/link";
import { useState } from "react";
import { FaReadme } from "react-icons/fa6";

const Aside = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  return (
    <>
      <aside>
        <div className="prevPage personalAreaIcon" onClick={() => setAsideOpen(!asideOpen)}>
          <FaReadme className="icon" size={25} />
        </div>
        <div className={`asideInside ${asideOpen ? "asidePersonalOpen" : ""}`}>
          <Link href="/personalArea">
            <span>My details</span>
          </Link>
          <Link href="/personalArea/rent">
            <span>Rent</span>
          </Link>
          <Link href="/personalArea/leasing">
            <span>Leasing</span>
          </Link>
          <Link href="/personalArea/paymentCards">
            <span>Payment cards</span>
          </Link>
          <Link href="/personalArea/fines">
            <span>Fines</span>
          </Link>
          <Link href="/personalArea/subscriptions">
            <span>Subscriptions</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Aside;
