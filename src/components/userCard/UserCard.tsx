"use client";
import "./userCard.scss";
import { useAppDispatch } from "@/lib/hooks";
import { modalToggleStatus } from "@/lib/features/modalCardToggleSlice";
import SpecialCard from "./specialCard/SpecialCard";

const UserCard = ({ color }) => {
  const dispatch = useAppDispatch();
  const handleToggleModal = () => {
    dispatch(modalToggleStatus());
  };

  return (
    <>
      <div className="cardHolderMain">
        <SpecialCard color={color} />
        <button onClick={handleToggleModal}>+</button>
      </div>
    </>
  );
};

export default UserCard;
