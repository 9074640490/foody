import React, { useState } from 'react';

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);

    const pleaseIncrement = () => {
        if (counterValue < 10) {
            // setCounterValue(counterValue + 1);
        }
    };

    const pleaseDecrement = () => {
        if (counterValue > 0) setCounterValue(counterValue - 1);
    };

    return (
        <div>
            <button onClick={pleaseIncrement}>increment</button>

            <div>counter value :{counterValue}</div>

            <button onClick={pleaseDecrement}>decrement</button>
        </div>)
};
export default Counter;