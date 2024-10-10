import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'
import { useCustomMemo } from './use-custom-memo';

const Example = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const callMe = () => {
        console.log('hello');
        setCounter(counter + 1);
    }

    // const squareNumber = () => {
    //     console.log(counter * counter);
    // }

    const memoizedSquare = useCustomMemo(() => {
        console.log(counter * counter);

        console.log(' ai am getting called');
    }, [counter])

    return (
        <div>
            <h1>{memoizedSquare}</h1>
            <button onClick={callMe}>First</button>
            <button onClick={() => setCounter2(counter2 + 1)}>Second</button>
            {counter}{counter2}
        </div>
    )
}

export default Example
