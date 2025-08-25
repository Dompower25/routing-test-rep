import { configureStore } from "@reduxjs/toolkit";
import counterReduser from './slices/counterSlice';


export const store = configureStore({
    reducer: {
        counter: counterReduser,
    }
})