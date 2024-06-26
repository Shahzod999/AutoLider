"use client";
import { changeStatusSuccess, selectedStatus } from "@/lib/features/paymentCardDataSlice";
import "./successfully.scss";
import { BiSolidCheckShield } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

const Successfully = () => {
  const dispatch = useAppDispatch();
  const successStatus = useAppSelector(selectedStatus);

  useEffect(() => {
    if (successStatus) {
      setTimeout(() => {
        dispatch(changeStatusSuccess());
      }, 4000);
    }
  }, [successStatus]);

  if (!successStatus) {
    return;
  }

  return (
    <div className="successfully">
      <BiSolidCheckShield />
      <span>The card has been added successfully</span>
    </div>
  );
};

export default Successfully;
