"use client";
import "./userCard.scss";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { addNewCard, selectCar } from "@/lib/features/paymentCardDataSlice";

const UserCard = ({ color }) => {
  const cards = useAppSelector(selectCar);
  console.log(cards);
  const dispatch = useAppDispatch();

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
      <div className="cardHolderMain">
        <form className="cardHolder" onSubmit={newCardAddStore}>
          <div className={`cardHolder__card  ${color}`}>
            <div className="cardHolder__card__name">
              <span>
                Card
                <FaStar />
              </span>
            </div>

            <div className="cardHolder__card__numbers">
              <input
                type="password"
                placeholder="****"
                maxLength={4}
                onChange={(e) => inputChange("inputFirst", e)}
                value={inputData.inputFirst}
                required
              />
              <input
                type="password"
                placeholder="****"
                maxLength={4}
                onChange={(e) => inputChange("inputSecond", e)}
                value={inputData.inputSecond}
                required
              />
              <input
                type="password"
                placeholder="****"
                maxLength={4}
                onChange={(e) => inputChange("inputThird", e)}
                value={inputData.inputThird}
                required
              />
              <input
                type="text"
                placeholder="**/**"
                maxLength={4}
                onChange={(e) => inputChange("inputDate", e)}
                value={inputData.inputDate}
                required
              />
            </div>
          </div>
          <input type="submit" style={{ display: "none" }} />
        </form>
        <button type="submit">+</button>
      </div>

      {error && <span className="ErrorMessage">Error write only number</span>}
    </>
  );
};

export default UserCard;
