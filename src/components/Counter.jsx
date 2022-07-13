import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' })
    }
    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' })
    }
    const handleReset = () => {
        dispatch({ type: 'RESET' })
    }
    return (
        <div>
            <h1>count:{count}</h1>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

export default Counter;