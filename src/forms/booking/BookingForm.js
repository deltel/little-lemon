import React, { useState } from "react";

import { ImageContainer } from "../../main/img-container/ImageContainer";
import { IconButton } from "../../common/button/icon-button/IconButton";
import { Button } from "../../common/button/Button";

import diningArea from "../dining-area.jpg";
import backIcon from "../back-button.png";
import clockIcon from "./clock-icon.png";
import calendarIcon from "./calendar-icon.png";
import personIcon from "./person-icon.png";
import wineGlassesIcon from "./wine-glasses-icon.png";

import "./BookingForm.css";

export function BookingForm() {
    const [occasion, setOccasion] = useState("birthday");
    const [date, setDate] = useState("2023-01-30");
    const [availableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const [selectedTime, setSelectedTime] = useState("17:00");
    const [noOfGuests, setNoOfGuests] = useState(1);

    return (
        <>
            <h2 className="title section-heading reservation-title">Reserve a table</h2>
            <section className="form-section">
                <section className="form-companion">
                    <IconButton btnClass="back-btn">
                        <img src={backIcon} alt="" className="" />
                    </IconButton>
                    <ImageContainer className="reservation-img-container" img={diningArea} altText="dining area" imgClassName="reservation-img" />
                    <p className="reservation-description">Here you can fill in all the details required for your reservation. You choose the date, the time and the number of guests.</p>
                </section>
                <form className="form">
                    <h2>Reserve a table</h2>
                    <p className="description">Here you can fill in all the details required for your reservation. You choose the date, the time and the number of guests.</p>
                    <section className="form-group">
                        <span className="label-group">
                            <img src={wineGlassesIcon} alt="wine glasses icon" />
                            <label htmlFor="occasion">Occasion</label>
                        </span>
                        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </section>
                    <section className="form-group">
                        <span className="label-group">
                            <img src={calendarIcon} alt="calendar icon" />
                            <label htmlFor="res-date">Choose date</label>
                        </span>
                        <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </section>
                    <section className="form-group">
                        <span className="label-group">
                            <img src={clockIcon} alt="clock icon" />
                            <label htmlFor="res-time">Choose time</label>
                        </span>
                        <select id="res-time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                            {availableTimes.map((time) => (<option key={time} value={time}>{time}</option>))}
                        </select>
                    </section>
                    <section className="form-group">
                        <span className="label-group">
                            <img src={personIcon} alt="person icon" />
                            <label htmlFor="guests">Number of guests</label>
                        </span>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} />
                    </section>
                    <Button type="submit">Make Reservation</Button>
                </form>
            </section>
        </>
    );
}