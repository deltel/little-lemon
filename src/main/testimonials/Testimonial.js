import React from "react";
import "./Testimonial.css";

import profilePic from "./profile-pic.png";

export function Testimonial() {
    return (
        <section className="card">
            <h5 className="heading">Rating</h5>
            <div>
                <img src={profilePic} alt="" />
                <p className="rating">4/5</p>
            </div>
            <p className="comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </section>
    );
}