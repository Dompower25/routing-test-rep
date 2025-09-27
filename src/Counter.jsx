import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByMount, increment, incrementByMount } from "./redux/counterSlice";
import useLocalStorage from "./hooks/useLocalStorage";



const Counter = () => {
    const count = useSelector((store) => store.counter.value);
    const dispatch = useDispatch();

    const [value, setValue] = useLocalStorage('count', count)

    useEffect(() => {
        setValue(count)
    }, [count])

    return (

        <div>
            <h2>value in LocalStorage: {value}</h2>
            <h1>{count}</h1>
            <button onClick={() => { dispatch(increment()) }}>increment</button>
            <button onClick={() => { dispatch(decrement()) }}>increment</button>
            <button onClick={() => { dispatch(incrementByMount(50)) }}>+50</button>
            <button onClick={() => { dispatch(decrementByMount(50)) }}>-50</button>
        </div>
    )
}

export default Counter