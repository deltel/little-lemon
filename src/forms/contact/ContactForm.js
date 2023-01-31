import React, { useState } from "react";
import { Button } from "../../common/button/Button";
import { IconButton } from "../../common/button/icon-button/IconButton";
import { ImageContainer } from "../../main/img-container/ImageContainer";
import backIcon from "../back-button.png";
import diningArea from "../dining-area.jpg";
import "./ContactForm.css";
import { ReservationSummary } from "./reservation-summary/ReservationSummary";

export function ContactForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");

    return (
        <section className="form-section contact">
            <section className="form-companion">
                <IconButton btnClass="back-btn">
                    <img src={backIcon} alt="" className="" />
                </IconButton>
                <ImageContainer className="reservation-img-container" img={diningArea} altText="dining area" imgClassName="reservation-img" />
                <p className="reservation-description">Here you can fill in all the details required for your reservation. You choose the date, the time and the number of guests.</p>
                <ReservationSummary noOfGuests={1} reservationDate="2023-01-30" reservationTime="17:00" />
            </section>
            <form className="form">
                <h2>Customer Info</h2>
                <p className="description">Please fill in your contact details so we may email you the reservation details and contact you if necessary.</p>
                <section className="form-group contact-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" id="fullname" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </section>
                <section className="form-group contact-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </section>
                <section className="form-group contact-group">
                    <label htmlFor="telephone">Telephone</label>
                    <input type="text" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                </section>
                <Button type="submit">Submit</Button>
            </form>
        </section>
    );
}