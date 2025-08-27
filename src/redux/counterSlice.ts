import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
   name: 'counter',
   initialState: {
    value: 0
   },
   reducers: {
    increment: (store) => {
        store.value += 1
    },
    decrement: (store) => {
        store.value -= 1
    },
    incrementByMount: (store, action) => {
        store.value += action.payload
    },
    decrementByMount: (store, action) => {
        store.value -= action.payload
    }
   }
});

export const {increment, decrement, decrementByMount, incrementByMount} = counterReducer.actions;
export default counterReducer.reducer;