import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface toggleCard {
  status: boolean
}

const initialState: toggleCard = {
  status: false
}

export const modalCardToggleSlice = createSlice({
  name: "modalToggle",
  initialState,
  reducers: {
    modalToggleStatus: (state) => {
      state.status = !state.status
    }
  }
})

export const { modalToggleStatus } = modalCardToggleSlice.actions
export const selectedStatusModal = (state: RootState) => state.modalToggle.status
export default modalCardToggleSlice.reducer