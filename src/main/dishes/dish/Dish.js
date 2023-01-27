import React from 'react';

import cyclingIcon from "./cycling.png";
import "./Dish.css";

export function Dish({name, description, price, image, alt}) {
    return (
        <section className="dish">
            <div className="dish-info">
                <h4 className="dish-name">{name}</h4>
                <p className="dish-description">{description}</p>
                <p className="dish-price">{price}</p>
            </div>
            <div className="dish-img-container">
                <img src={image} alt={alt} className="dish-img" />
            </div>
            <div className='dish-footer'>
                <p className='footer-text'>Order a delivery</p>
                <img src={cyclingIcon} alt="cycling icon" className='cycling-icon' />
            </div>
        </section>
    );
}