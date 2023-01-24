import React from "react";
import bruchetta from "./bruchetta.jpg";
import { Delivery } from "./delivery/Delivery";
import greekSalad from "./greek-salad.jpg";
import grilledFish from "./grilled-fish.jpg";
import lemonDessert from "./lemon-dessert.jpg";

export function Dishes() {
    return (
        <section className="main-section dishes">
            <Delivery />
            <section className="dish">
                <div>
                    <h4 className="dish-name">Greek Salad</h4>
                    <p className="dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <p className="dish-price">$12.99</p>
                </div>
                <div className="dish-img-container">
                    <img src={greekSalad} alt="greek salad" className="dish-img" />
                </div>
            </section>
            <section className="dish">
                <div>
                    <h4 className="dish-name">Brushetta</h4>
                    <p className="dish-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.</p>
                    <p className="dish-price">$7.99</p>
                </div>
                <div className="dish-img-container">
                    <img src={bruchetta} alt="brushetta" className="dish-img" />
                </div>
            </section>
            <section className="dish">
                <div>
                    <h4 className="dish-name">Grilled Fish</h4>
                    <p className="dish-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.</p>
                    <p className="dish-price">$10.99</p>
                </div>
                <div className="dish-img-container">
                    <img src={grilledFish} alt="grilled fish" className="dish-img" />
                </div>
            </section>
            <section className="dish">
                <div>
                    <h4 className="dish-name">Lemon Dessert</h4>
                    <p className="dish-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.</p>
                    <p className="dish-price">$7.99</p>
                </div>
                <div className="dish-img-container">
                    <img src={lemonDessert} alt="lemon dessert" className="dish-img" />
                </div>
            </section>
        </section>
    );
}