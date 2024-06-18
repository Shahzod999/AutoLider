"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const PersonalManager = () => {
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
    <div className="personalArea">
      <div className="personalArea__Name">
        <div className="personalArea__Name__Info">
          <img src="" alt="" />
          <h2>John Doe</h2>
        </div>
        <form>
          <label htmlFor="">FULL NAME</label>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Surname" />

          <label htmlFor="">CONTACTS</label>
          <input type="text" placeholder="+998 ( __ ) - ___-__-__" />
          <input type="email" placeholder="E-mail" />
        </form>
      </div>

      <div className="personalManager">
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
        
        
        <div className="personalManager__info">
          <div className="personalManager__info__namebox">
            <h3>Your manager</h3>
            <div>
              <span>Lorem Ipsum</span>
              <span>+998 ( __ ) ___ - __ - __</span>
              <span>loremipsum.ii@mail.uz</span>
            </div>
          </div>

          <div className="personalManager__info__accauntBox">
            <p>We are in touch every day from 09:00 to 18:00</p>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalManager;
