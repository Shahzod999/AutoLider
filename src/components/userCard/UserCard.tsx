"use client";
import "./userCard.scss";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { addNewCard, selectCar } from "@/lib/features/paymentCardDataSlice";
import MainCard from "./mainCard/MainCard";

const UserCard = () => {
  const cards = useAppSelector(selectCar);
  console.log(cards);

  const dispatch = useAppDispatch();
  const store = useAppStore();

  const [error, setError] = useState(false);
  const [inputData, setInputDate] = useState({
    inputFirst: "",
    inputSecond: "",
    inputThird: "",
    inputDate: "",
  });

  const inputChange = (name, e) => {
    if (!isNaN(e.target.value)) {
      setInputDate({ ...inputData, [name]: e.target.value });
      setError(false);
    } else {
      setError(true);
    }
  };

  const newCardAddStore = (e) => {
    e.preventDefault();

    dispatch(addNewCard(inputData));
  };

  return (
    <>
      <form className="cardHolder" onSubmit={newCardAddStore}>
        <div className="cardHolder__card">
          <div className="cardHolder__card__name">
            <span>
              Card
              <FaStar />
            </span>
          </div>

          <div className="cardHolder__card__numbers">
            <input type="password" placeholder="****" maxLength={4} onChange={(e) => inputChange("inputFirst", e)} value={inputData.inputFirst} required />
            <input type="password" placeholder="****" maxLength={4} onChange={(e) => inputChange("inputSecond", e)} value={inputData.inputSecond} required />
            <input type="password" placeholder="****" maxLength={4} onChange={(e) => inputChange("inputThird", e)} value={inputData.inputThird} required />
            <input type="text" placeholder="12/12" maxLength={4} onChange={(e) => inputChange("inputDate", e)} value={inputData.inputDate} required />
          </div>
        </div>

        <button type="submit">+</button>
      </form>

      {error && <span className="ErrorMessage">Error write only number</span>}

      {cards.map((numbers, index) => (
        <MainCard key={index} numbers={numbers} />
      ))}
    </>
  );
};

export default UserCard;
