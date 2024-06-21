"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./mainCard.scss";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addSpecialCard, selectedSpecialCards } from "@/lib/features/paymentCardDataSlice";

interface MainCardProps {
  numbers: {
    inputFirst: string;
    inputSecond: string;
    inputThird: string;
    inputDate: string;
  };
}

const MainCard: React.FC<MainCardProps> = ({ numbers }) => {
  const dispatch = useAppDispatch();
  const specialCards = useAppSelector(selectedSpecialCards);
  const { inputFirst, inputSecond, inputThird, inputDate } = numbers;

  const isSpecialCard = specialCards.some((card) => card.inputFirst === inputFirst && card.inputSecond === inputSecond && card.inputThird === inputThird && card.inputDate === inputDate);

  const fastarHandler = () => {
    dispatch(addSpecialCard(numbers));
  };

  return (
    <div className="cardHolderMain">
      <div className="cardHolder__card otherCards">
        <div className="cardHolder__card__name otherCards__name">
          <span onClick={fastarHandler}>
            Card
            {isSpecialCard ? <FaStar fill="#3D3D3D" /> : <FaStar fill="white" />}
          </span>
        </div>

        <div className="cardHolder__card__numbers otherCards__numbers">
          <span>{inputFirst}</span>
          <span>{inputSecond}</span>
          <span>{inputThird}</span>
          <span>{inputDate}</span>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
