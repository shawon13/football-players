import React from 'react';
import './Cart.css'
import PlayerName from '../PlayerName/PlayerName';
const Cart = ({ cart }) => {
    let totalPrice = 0;
    for (const player of cart) {
        totalPrice = totalPrice + player.price;
    }
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h4>Selected player:{cart.length}</h4>
            <h4>Total Price: ${totalPrice}</h4>
            {
                cart.map(p => <PlayerName key={p.id} p={p}></PlayerName>)
            }
        </div>
    );
};

export default Cart;