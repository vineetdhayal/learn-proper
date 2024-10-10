import React from 'react';
import './cart.css'

const Cart = ({ data }) => {
    return (
        <div className='cart'>
            {data.map((d, index) => {
                return <span key={index}>{d}</span>
            })}
        </div>
    )
}

export default Cart
