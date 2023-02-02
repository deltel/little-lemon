import React, { useEffect } from "react";


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

export function BookingForm({ availableTimes, occasion, noOfGuests, reservationDate, reservationTime, errors, touched, isSubmitting, dispatch, handleChange, handleBlur, handleSubmit }) {

    useEffect(() => {
        dispatch({ type: "GET_AVAILABLE_TIMES", payload: reservationDate });
    }, [reservationDate]);

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

                <form title="booking form" className="form" onSubmit={handleSubmit}>
                    <h2>Reserve a table</h2>
                    <p className="description">Here you can fill in all the details required for your reservation. You choose the date, the time and the number of guests.</p>
                    <section className="form-group">
                        <span className="label-group">
                            <img src={wineGlassesIcon} alt="wine glasses icon" />
                            <label htmlFor="occasion">Occasion</label>
                        </span>
                        <span className="feedback-errors">
                            <select
                                className={errors.occasion && touched.occasion ? "error-highlight" : ""}
                                name="occasion"
                                id="occasion"
                                value={occasion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            >
                                <option value="birthday">Birthday</option>
                                <option value="engagement">Engagement</option>
                                <option value="anniversary">Anniversary</option>
                            </select>
                            <span className="error">{errors.occasion && touched.occasion && errors.occasion}</span>
                        </span>
                    </section>
                    <section className="form-group">
                        <span className="label-group">
                            <img src={calendarIcon} alt="calendar icon" />
                            <label htmlFor="reservationDate">Choose date</label>
                        </span>
                        <span className="feedback-errors">
                            <input
                                className={errors.reservationDate && touched.reservationDate ? "error-highlight" : ""}
                                type="date"
                                name="reservationDate"
                                id="reservationDate"
                                value={reservationDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            <span className="error">{errors.reservationDate && touched.reservationDate && errors.reservationDate}</span>
                        </span>
                    </section>
                    <section className="form-group">
                        <span className="label-group">
                            <img src={clockIcon} alt="clock icon" />
                            <label htmlFor="reservationTime">Choose time</label>
                        </span>
                        <span className="feedback-errors">
                            <select
                                className={errors.reservationTime && touched.reservationTime ? "error-highlight" : ""}
                                name="reservationTime"
                                id="reservationTime"
                                value={reservationTime}
                                onChange={handleChange}
                                required
                            >
                                {availableTimes.map((time) => (<option key={time} value={time}>{time}</option>))}
                            </select>
                            <span className="error">{errors.reservationTime && touched.reservationTime && errors.reservationTime}</span>
                        </span>
                    </section>
                    <section className="form-group">
                        <span className="label-group">
                            <img src={personIcon} alt="person icon" />
                            <label htmlFor="noOfGuests">Number of guests</label>
                        </span>
                        <span className="feedback-errors">
                            <input
                                className={errors.noOfGuests && touched.noOfGuests ? "error-highlight" : ""}
                                type="number"
                                name="noOfGuests"
                                id="noOfGuests"
                                value={noOfGuests}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                min="1"
                                max="10"
                                required
                            />
                            <span className="error">{errors.noOfGuests && touched.noOfGuests && errors.noOfGuests}</span>
                        </span>
                    </section>
                    <Button type="submit" disabled={isSubmitting || Object.keys(errors).length > 0}>Make Reservation</Button>
                </form>
            </section>
        </>
    );
}