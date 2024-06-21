import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface Card {
  inputFirst: string;
  inputSecond: string;
  inputThird: string;
  inputDate: string;
}

export interface CardState {
  value: Card[];
  specialCards: Card[];
  status: boolean;
}

const initialState: CardState = {
  value: [],
  specialCards: [],
  status: false,
};

export const paymentCardDataSlice = createSlice({
  name: "allCards",
  initialState,
  reducers: {
    addNewCard: (state, action: PayloadAction<Card>) => {
      const cardExists = state.value.some(card =>
        card.inputFirst === action.payload.inputFirst &&
        card.inputSecond === action.payload.inputSecond &&
        card.inputThird === action.payload.inputThird &&
        card.inputDate === action.payload.inputDate
      );
      if (!cardExists) {
        state.value.push(action.payload);
        state.status = true
      } else {
        alert("Card already exist")
      }
    },
    addSpecialCard: (state, action: PayloadAction<Card>) => {
      const cardExists = state.specialCards.some(card =>
        card.inputFirst === action.payload.inputFirst &&
        card.inputSecond === action.payload.inputSecond &&
        card.inputThird === action.payload.inputThird &&
        card.inputDate === action.payload.inputDate
      );//проверка

      if (!cardExists) {
        state.specialCards.push(action.payload);
      } else {//дел
        state.specialCards = state.specialCards.filter(card =>
          card.inputFirst !== action.payload.inputFirst ||
          card.inputSecond !== action.payload.inputSecond ||
          card.inputThird !== action.payload.inputThird ||
          card.inputDate !== action.payload.inputDate
        );
      }
    },
    changeStatusSuccess: (state) => {
      state.status = false
    }
  },
});

export const { addNewCard, addSpecialCard, changeStatusSuccess } = paymentCardDataSlice.actions;
export const selectCar = (state: RootState) => state.allCards.value;
export const selectedStatus = (state: RootState) => state.allCards.status;
export const selectedSpecialCards = (state: RootState) => state.allCards.specialCards;
export default paymentCardDataSlice.reducer;
