import React from "react";
import "./Delivery.css";

export function Delivery() {
    return (
        <section className="delivery">
            <h2>Order for Delivery!</h2>
            <ul className="pills">
                <li>Lunch</li>
                <li>Mains</li>
                <li>Desserts</li>
                <li>A La Carte</li>
                <li>Specials</li>
            </ul>
        </section>
    );
}