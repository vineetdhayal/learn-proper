import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const NextQuestion = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count - 1);
    }
    const decreaseCount = () => {
        setCount(count + 1);
    }
    async function call() {
        await fetch('https://s3-us-west-2.amazonaws.com/digicode-interview/Q1.json').then((res) => res.json()).then((result) => {
            console.log('123', result);
        })
    }
    useEffect(() => {
       call();
    }, [])
    return (
        <div>
            <button onClick={increaseCount}>Prev</button>
            {count}
            <button onClick={decreaseCount}>Next</button>
        </div>
    )
}

export default NextQuestion;
