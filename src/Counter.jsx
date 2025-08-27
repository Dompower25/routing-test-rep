import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByMount, increment, incrementByMount } from "./redux/counterSlice";



const Counter = () => {

    const count = useSelector((store) => store.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => {dispatch(increment())}}>increment</button>
            <button onClick={() => {dispatch(decrement())}}>decrement</button>
            <button onClick={() => {dispatch(incrementByMount(10))}}>+10</button>
            <button onClick={() => {dispatch(decrementByMount(10))}}>-10</button>

        </div>
    )
}

export default Counter