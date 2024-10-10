import React from 'react';
import './grid.css';
import { useState } from 'react';

const Cell = ({ filled, onClick }) => {
    return <button type='button' className={filled ? 'filled' : ''} onClick={onClick}>btn</button>
}

const grid = [[1, 1, 1],
[1, 0, 1], [1, 1, 1]];



const GridLights = () => {
    const [order, setOrder] = useState([]);
    const deactivateCells = () => {
        const timer = setInterval(() => {
            setOrder((newOrder) => {
                console.log('000', newOrder);
                const y = newOrder.slice();
                y.pop();
                if (y.length === 0) {
                    clearInterval(timer);
                }
                return y;
            }
            )
        }, 300)
    }
    const activateCell = (index) => {
        setOrder([...order, index]);
        // console.log(order.length);
        // console.log(grid.flat().filter(Boolean).length);
        if (order.length === grid.flat().filter(Boolean).length-1) {
            deactivateCells();
        }
    }

    return (
        <div className='wrapper'>
            <div className='grid'
                style={{ gridTemplateColumns: `repeat(${grid[0].length}, 1fr)` }}
            >
                {grid.flat(1).map((g, index) => {
                    return g ? <Cell key={index} filled={order?.includes(index)} onClick={() => activateCell(index)} /> : <span></span>
                })}
            </div>
        </div>

    )
}

export default GridLights
