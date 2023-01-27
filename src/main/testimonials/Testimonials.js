import React from "react";
import { Testimonial } from "./Testimonial";
import "./Testimonials.css";

export function Testimonials() {
    return (
        <section className="main-section">
            <h2 className="title section-heading">Testimonials</h2>
            <section className="testimonials">
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </section>
        </section>
    );
}