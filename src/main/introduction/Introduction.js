import React from "react";
import { Button } from "../../common/button/Button";
import restaurantFood from "./restaurantfood.jpg";

export function Introduction() {
    return (
        <section className="main-section">
            <h1 className="title">Little Lemon</h1>
            <h3 className="sub-title">Chicago</h3>
            <div className="intro-main">
                <div className="main-left">
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Button>Reserve a table</Button>
                </div>
                <div className="main-img-container">
                    <img src={restaurantFood} alt="sample food" className="main-img" />
                </div>
            </div>
        </section>
    );
}