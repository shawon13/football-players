import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Player = ({ player, handleAddToCart }) => {
    return (
        <div className="card">
            <img src={player.img} className="card-img-top" alt="" />
            <div className="card-body">
                <h6 className="card-title">{player.name}</h6>
                <p className="card-text">Team: {player.team}</p>
                <p className="card-text">Price: ${player.price}</p>
                <p className="card-text">Ratings: {player.ratings}</p>
            </div>
            <button href="#" className="btn-cart" onClick={() => handleAddToCart(player)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Player;