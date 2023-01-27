import React from "react";

import { Button } from "../../common/button/Button";
import { Delivery } from "./delivery/Delivery";

import bruchetta from "./bruchetta.jpg";
import greekSalad from "./greek-salad.jpg";
import grilledFish from "./grilled-fish.jpg";
import lemonDessert from "./lemon-dessert.jpg";

import "./Dishes.css";
import { Dish } from "./dish/Dish";

export function Dishes() {
    return (
        <section className="main-section">
            <section className="dishes-heading">
                <h3 className="sub-title">This week's specials!</h3>
                <Button>Order Online</Button>
            </section>
            <section className="dishes">
                <Delivery />
                <Dish
                    name="Greek Salad"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    price="$12.99"
                    image={greekSalad}
                    alt="greek salad"
                />
                <Dish
                    name="Brushetta"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta."
                    price="$7.99"
                    image={bruchetta}
                    alt="brushetta"
                />
                <Dish
                    name="Grilled Fish"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus."
                    price="$10.99"
                    image={grilledFish}
                    alt="grilled fish"
                />
                <Dish
                    name="Lemon Dessert"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus."
                    price="$7.99"
                    image={lemonDessert}
                    alt="lemon dessert"
                />
            </section>
        </section>
    );
}