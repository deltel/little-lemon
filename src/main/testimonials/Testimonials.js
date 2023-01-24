import React from "react";
import { Testimonial } from "./Testimonial";

export function Testimonials() {
    return (
        <section className="main-section">
            <h2 className="title section-heading">Testimonials</h2>
            <Testimonial />
            <Testimonial />
        </section>
    );
}