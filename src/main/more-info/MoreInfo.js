import React from "react";
import "./MoreInfo.css";

import marioAndAdrianA from "./mario-and-adrian-a.jpg";
import marioAndAdrianB from "./mario-and-adrian-b.jpg";

export function MoreInfo() {
    return (
        <section className="main-section">
            <div className="more-info">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="more-info-images">
                <div className="img-container">
                    <img src={marioAndAdrianA} alt="mario and adrian" />
                </div>
                <div className="img-container">
                    <img src={marioAndAdrianB} alt="mario and adrian" />
                </div>
            </div>
        </section>
    );
}