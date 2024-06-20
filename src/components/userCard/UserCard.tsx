"use client";
import "./userCard.scss";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addNewCard, addSpecialCard, selectedSpecialCards } from "@/lib/features/paymentCardDataSlice";
import { modalToggleStatus } from "@/lib/features/modalCardToggleSlice";

const UserCard = ({ color }) => {
  const dispatch = useAppDispatch();
  const specialCards = useAppSelector(selectedSpecialCards);
  console.log(specialCards, "asfasd");

  const handleToggleModal = () => {
    dispatch(modalToggleStatus());
  };

  return (
    <>
      <div className="cardHolderMain">
        {specialCards.map((card, i) => (
          <div className="cardHolder" key={i}>
            <div className={`cardHolder__card  ${color}`}>
              <div className="cardHolder__card__name">
                <span>
                  Card
                  <FaStar />
                </span>
              </div>
              <div className="cardHolder__card__numbers">
                <span>{card.inputFirst}</span>
                <span>{card.inputSecond}</span>
                <span>{card.inputThird}</span>
                <span>{card.inputDate}</span>
              </div>
            </div>
          </div>
        ))}
        <button onClick={handleToggleModal}>+</button>
      </div>
    </>
  );
};

export default UserCard;
