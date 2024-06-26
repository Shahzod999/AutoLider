"use client";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import "./modalAddCard.scss";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { modalToggleStatus, selectedStatusModal } from "@/lib/features/modalCardToggleSlice";
import { addNewCard } from "@/lib/features/paymentCardDataSlice";
import Successfully from "@/components/successfully/Successfully";

interface InputData {
  inputFirst: string;
  inputSecond: string;
  inputThird: string;
  inputDate: string;
}

const ModalAddCard = () => {
  const dispatch = useAppDispatch();
  const modalStatus = useAppSelector(selectedStatusModal);
  const agreeCheckBox = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const [inputData, setInputDate] = useState<InputData>({
    inputFirst: "",
    inputSecond: "",
    inputThird: "",
    inputDate: "",
  });

  const inputChange = (name: keyof InputData, e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!isNaN(Number(value))) {
      setInputDate({ ...inputData, [name]: e.target.value });
      setError(false);
    } else {
      setError(true);
    }
  };

  const newCardAddStore = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreeCheckBox.current?.checked) {
      alert("Вы должны согласиться с условиями обработки персональных данных");
      return;
    }

    dispatch(addNewCard(inputData));
  };

  const handleToggleModal = () => {
    dispatch(modalToggleStatus());
  };

  if (!modalStatus) {
    return;
  }

  return (
    <>
      <div className="modalAddCard">
        <form className="modalAddCard__cardAdder" onSubmit={newCardAddStore}>
          <div onClick={handleToggleModal} className="prevPage">
            <MdOutlineKeyboardArrowLeft className="icon" size={30} />
            <span>Return</span>
          </div>

          <div className="modalAddCard__cardAdder__text">
            <h2>ADD A CARD</h2>
            <p>Register to buy and rent cars faster and more conveniently</p>
          </div>

          <div className="addNewCard">
            <div className="addNewCard__inputNumber">
              <input type="text" className="addNewCard__inputNumber__input" placeholder="****" maxLength={4} required onChange={(e) => inputChange("inputFirst", e)} value={inputData.inputFirst} />
              <input type="text" className="addNewCard__inputNumber__input" placeholder="****" maxLength={4} required onChange={(e) => inputChange("inputSecond", e)} value={inputData.inputSecond} />
              <input type="text" className="addNewCard__inputNumber__input" placeholder="****" maxLength={4} required onChange={(e) => inputChange("inputThird", e)} value={inputData.inputThird} />
              <input type="text" className="addNewCard__inputNumber__input" placeholder="**/**" maxLength={4} required onChange={(e) => inputChange("inputDate", e)} value={inputData.inputDate} />
            </div>

            <div className="addNewCard__checkbox">
              <input type="checkbox" />
              <span>Make the main one</span>
            </div>
          </div>
          {error && <span className="ErrorMessage">Error write only number</span>}

          <div className="button__addnewCard">
            <button type="submit">FURTHER</button>
            <div className="button__addnewCard__checkbox">
              <input type="checkbox" ref={agreeCheckBox} />
              <p>I agree to the Terms of Personal Data Processing</p>
            </div>
          </div>
        </form>
        <Successfully />
      </div>
    </>
  );
};

export default ModalAddCard;
