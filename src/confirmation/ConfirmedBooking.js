import React from "react";
import { ImageContainer } from "../main/img-container/ImageContainer";
import diningArea from "../forms/dining-area.jpg";

import "./ConfirmedBooking.css";

export function ConfirmedBooking() {
    return (
        <section className="confirmation">
            <h2>Booking confirmed</h2>
            <ImageContainer className="reservation-img-container" img={diningArea} altText="dining area" imgClassName="reservation-img" />
        </section>
    );
}