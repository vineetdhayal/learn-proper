import React, { useState } from 'react'
import '../styles.css';

const Tictac = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    const data = ['', '', '', '', '', '', '', '', ''];

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = <span className='imgg'>cross</span>;
            data[num] = 'x';
            setCount(++count);
        }
        else {
            e.target.innerHTML = <span className='imgg'>circle</span>;
            data[num] = 'o';
            setCount(++count);
        }
    }
    return (
        <div className='container'>
            <div className='title'>
                <span>Tic Tac Toe game in react</span>
            </div>
            <div className='board'>
                <div className='row1'>
                    <div className='boxes' onClick={(e) => toggle(e, 0)}></div>
                    <div className='boxes' onClick={(e) => toggle(e, 1)}></div>
                    <div className='boxes' onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className='row2'>
                    <div className='boxes' onClick={(e) => toggle(e, 3)}></div>
                    <div className='boxes' onClick={(e) => toggle(e, 4)}></div>
                    <div className='boxes' onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className='row3'>
                    <div className='boxes' onClick={(e) => toggle(e, 6)}></div>
                    <div className='boxes' onClick={(e) => toggle(e, 7)}></div>
                    <div className='boxes' onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
        </div>
    )
}

export default Tictac;
