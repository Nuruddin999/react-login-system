import { configureStore } from '@reduxjs/toolkit'
import userAuthReducer from "./userSlice"
export const store = configureStore({
    reducer: { userAuth: userAuthReducer },
})