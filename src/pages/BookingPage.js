import React, { useReducer, useState } from "react";
import { BookingForm } from "../forms/booking/BookingForm";
import { BasicFooter } from "../footer/BasicFooter";
import { Header } from "../header/Header";
import { ContactForm } from "../forms/contact/ContactForm";

export const updateTimes = (state, action) => {
    if(action.type === "GET_AVAILABLE_TIMES") {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    } else {
        return [];
    }
}

export const initializeTimes = (date) => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, "2023-01-31", initializeTimes);

    const [reservationInfo, setReservationInfo] = useState({
        occasion: "birthday",
        noOfGuests: 1,
        reservationDate: "2023-01-30",
        reservationTime: "17:00"
    });
    const handleChange = (e) => {
        setReservationInfo((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("reservation form > submitted");
        setSubmitted(true);
    }

    return (
        <>
            <Header />
            {
                submitted ? 
                <ContactForm 
                    occasion={reservationInfo.occasion}
                    noOfGuests={reservationInfo.noOfGuests} 
                    reservationDate={reservationInfo.reservationDate} 
                    reservationTime={reservationInfo.reservationTime} 
                /> : 
                <BookingForm 
                    handleChange={handleChange}
                    handleSubmit={handleSubmit} 
                    dispatch={dispatch}
                    availableTimes={availableTimes}
                    occasion={reservationInfo.occasion}
                    noOfGuests={reservationInfo.noOfGuests} 
                    reservationDate={reservationInfo.reservationDate} 
                    reservationTime={reservationInfo.reservationTime} 
                />
            }
            <BasicFooter />
        </>
    );
}