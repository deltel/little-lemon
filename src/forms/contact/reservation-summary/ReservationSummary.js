import React from "react";
import "./ReservationSummary.css";

export function ReservationSummary({ occasion, reservationDate, reservationTime, noOfGuests }) {
    return (
        <section className="summary">
            <div>
                <p>Occasion</p>
                <p>Date</p>
                <p>Time</p>
                <p>Number of Guests</p>
            </div>
            <div>
                <p>{occasion}</p>
                <p>{reservationDate}</p>
                <p>{reservationTime}</p>
                <p>{noOfGuests}</p>
            </div>
        </section>
    );
}