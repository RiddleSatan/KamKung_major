import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/slice.js"

export const store=configureStore({
    reducer
})