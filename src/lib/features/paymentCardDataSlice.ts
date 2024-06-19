import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

interface Card {
  inputFirst: string,
  inputSecond: string,
  inputThird: string,
  inputDate: string,
}

export interface CardState {
  value: Card[]
}

const initialState: CardState = {
  value: []
}

export const paymentCardDataSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addNewCard: (state, action: PayloadAction<Card>) => {
      state.value.push(action.payload)
    }
  }
})

export const { addNewCard } = paymentCardDataSlice.actions
export const selectCar = (state: RootState) => state.allCards.value

export default paymentCardDataSlice.reducer