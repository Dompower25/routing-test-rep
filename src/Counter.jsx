import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementBy, increment, incrementBy } from "./redux/slices/counterSlice";


const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => {dispatch(increment())}}>inctrement</button>
            <button onClick={() => {dispatch(decrement())}}>decrement</button>
            <button onClick={() => {dispatch(incrementBy(100))}}>increment by 100</button>
            <button onClick={() => {dispatch(decrementBy(50))}}>decrement by 50</button>
        </div>
    )
}

export default Counter