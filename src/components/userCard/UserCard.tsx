"use client";
import "./userCard.scss";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const UserCard = () => {
  const [inputData, setInputDate] = useState({
    inputFirst: "",
    inputSecond: "",
    inputThird: "",
    inputDate: "",
  });
  const [error, setError] = useState(false);

  const inputChange = (name, e) => {
    if (!isNaN(e.target.value)) {
      setInputDate({ ...inputData, [name]: e.target.value });
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="cardHolder">
        <div className="cardHolder__card">
          <div className="cardHolder__card__name">
            <span>
              Card
              <FaStar />
            </span>
          </div>

          <div className="cardHolder__card__numbers">
            <input type="password" name="" id="" placeholder="****" maxLength={4} onChange={(e) => inputChange("inputFirst", e)} value={inputData.inputFirst} />
            <input type="password" name="" id="" placeholder="****" maxLength={4} onChange={(e) => inputChange("inputSecond", e)} value={inputData.inputSecond} />
            <input type="password" name="" id="" placeholder="****" maxLength={4} onChange={(e) => inputChange("inputThird", e)} value={inputData.inputThird} />
            <input type="text" placeholder="12/12" maxLength={4} onChange={(e) => inputChange("inputDate", e)} value={inputData.inputDate} />
          </div>
        </div>

        <button onClick={() => console.log(inputData)}>+</button>
      </div>

      {error && <span className="ErrorMessage">Error write only number</span>}
    </>
  );
};

export default UserCard;
