import { configureStore } from "@reduxjs/toolkit"
import paymentCardDataSlice from "./features/paymentCardDataSlice"
import modalCardToggleSlice from "./features/modalCardToggleSlice"

export const carStore = () => {
  return configureStore({
    reducer: {
      allCards: paymentCardDataSlice,
      modalToggle: modalCardToggleSlice,
    },
  })
}

export type AppStore = ReturnType<typeof carStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']