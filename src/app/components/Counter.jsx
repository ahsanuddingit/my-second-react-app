'use client';
import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1 className="text-2xl font-bold">Counter : {count}</h1>
            <button onClick={handleIncrement} className='text-white font-bold bg-amber-400 px-4 py-2 rounded'>Increment</button>
        </div>
    );
};

export default Counter;