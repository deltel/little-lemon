import React from "react";
import { Button } from "../../common/button/Button";
import { ImageContainer } from "../img-container/ImageContainer";
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
                <ImageContainer className="main-img-container" img={restaurantFood} altText="sample food" imgClassName="main-img" />
            </div>
        </section>
    );
}