import React from "react";
import "./MoreInfo.css";

import marioAndAdrianA from "./mario-and-adrian-a.jpg";
import marioAndAdrianB from "./mario-and-adrian-b.jpg";
import { ImageContainer } from "../img-container/ImageContainer";

export function MoreInfo() {
    return (
        <section className="main-section">
            <div className="more-info">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="more-info-images">
                <ImageContainer className="img-container" img={marioAndAdrianA} altText="mario and adrian" />
                <ImageContainer className="img-container" img={marioAndAdrianB} altText="mario and adrian" />
            </div>
        </section>
    );
}