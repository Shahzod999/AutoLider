"use client";
import MainCard from "@/components/userCard/mainCard/MainCard";
import UserCard from "@/components/userCard/UserCard";
import { selectCar } from "@/lib/features/paymentCardDataSlice";
import { useAppSelector } from "@/lib/hooks";
import "./paymentCards.scss";
import { PiNotePencil } from "react-icons/pi";
import AccauntName from "@/components/accaunName/AccauntName";

const page = () => {
  const cards = useAppSelector(selectCar);

  return (
    <div className="paymentCards">
      <div className="paymentCards__select">
        <div className="paymentCards__select__text">
          <h2>Selected сards</h2>
          <div>
            <span>To change </span>
            <PiNotePencil size={22} />
          </div>
        </div>
        <div>
          <UserCard color={"selectedCard"} />
        </div>
      </div>

      <div className="paymentCards__otherCards">
        <h2>Your other cards</h2>
        <div className="paymentCards__otherCards__added">
          {cards.map((numbers, index) => (
            <MainCard key={index} numbers={numbers} />
          ))}
        </div>
      </div>

      <div className="paymentCards__accauntName">
        <h2>Account name</h2>
        <div className="paymentCards__accauntName__box">
          <AccauntName />
          <AccauntName />
          <AccauntName />
          <AccauntName />
          <AccauntName />
        </div>
      </div>
    </div>
  );
};

export default page;
