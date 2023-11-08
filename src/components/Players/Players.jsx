import React, { useEffect, useState } from 'react';
import './Players.css'
import Player from '../Player/Player';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Players = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    // saved cart in display
    useEffect(() => {
        const storedCart = getShoppingCart();
        let savedCart = [];
        // step-1: get id added player form storedCart
        for (const id in storedCart) {
            // step-2 get player from players state by using id
            const addedPlayer = players.find(player => player.id === id);
            if (addedPlayer) {
                // step-3 added quantity
                const quantity = storedCart[id];
                addedPlayer.quantity = quantity;
                // step-4 add the addedPlayer to the savedCart
                savedCart.push(addedPlayer)
            }
        }
        // step-5 set the cart
        setCart(savedCart);
    }, [players])
    // handle Add To Cart
    const handleAddToCart = (player) => {
        let newCart = [];
        const exists = cart.find(p => p.id === player.id)
        if (!exists) {
            newCart = [...cart, player];
        }
        else {
            const remainning = cart.filter(p => p.id !== player.id)
            newCart = [...remainning, exists]
            alert('all ready added');
            return;
        }
        setCart(newCart)
        addToDb(player.id)
    }
    return (
        <div className='players-container'>
            <div className='player-container'>
                {
                    players.map(player => <Player
                        key={player.id}
                        player={player}
                        handleAddToCart={handleAddToCart}
                    ></Player>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Players;