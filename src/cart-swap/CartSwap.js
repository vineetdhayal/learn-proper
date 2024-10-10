import React, { useState } from 'react';
import Cart from './Cart';
import './cart.css';

const CartSwap = () => {
    const cart1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const cart2 = [9, 10, 11, 12, 13, 14, 15, 16];

    const [cartA, setCartA] = useState(cart1);
    const [cartB, setCartB] = useState(cart2);

    const swapData = () => {
        const newCartA = [...cartA];
        const newCartB = [...cartB];
        for (let i = 0; i < cartA.length; i++) {
            newCartA[i] = cartB[i];
            newCartB[i] = cartA[i];
        }

        setCartA(newCartA);
        setCartB(newCartB);
    }

    return (
        <div className='cartSwap'>
            <Cart data={cartA} />
            <button onClick={swapData}>Swap Data</button>
            <Cart data={cartB} />
        </div>
    )
}

export default CartSwap
