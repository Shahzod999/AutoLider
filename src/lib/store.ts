import { configureStore } from "@reduxjs/toolkit"
import paymentCardDataSlice from "./features/paymentCardDataSlice"

export const carStore = () => {
  return configureStore({
    reducer: {
      allCards: paymentCardDataSlice,
    },
  })
}

export type AppStore = ReturnType<typeof carStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']