import React from "react";
import restaurantFood from "./restaurantfood.jpg";
import { Button } from "../common/button/Button";

export function Main() {
    return (
        <main>
            <section className="main-section">
                <h1 className="title">Little Lemon</h1>
                <h3 className="sub-title">Chicago</h3>
                <div>
                    <div className="main-left">
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Button>Reserve a table</Button>
                    </div>
                    <div className="main-img-container">
                        <img src={restaurantFood} alt="sample food" className="main-img" />
                    </div>
                </div>
            </section>
            <section className="main-section">second</section>
            <section className="main-section">third</section>
            <section className="main-section">fourth</section>
        </main>
    );
}