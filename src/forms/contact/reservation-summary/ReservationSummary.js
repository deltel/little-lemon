import React from "react";
import "./ReservationSummary.css";

export function ReservationSummary({ reservationDate, reservationTime, noOfGuests }) {
    return (
        <section className="summary">
            <div>
                <p>Date</p>
                <p>Time</p>
                <p>Number of Guests</p>
            </div>
            <div>
                <p>{reservationDate}</p>
                <p>{reservationTime}</p>
                <p>{noOfGuests}</p>
            </div>
        </section>
    );
}