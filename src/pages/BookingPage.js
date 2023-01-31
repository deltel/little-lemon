import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookingForm } from "../forms/booking/BookingForm";
import { BasicFooter } from "../footer/BasicFooter";
import { Header } from "../header/Header";
import { fetchAPI, submitAPI } from "../temp";

export const updateTimes = (_, action) => {
    if (action.type === "GET_AVAILABLE_TIMES") {
        return fetchAPI(new Date(action.payload));
    } else {
        return [];
    }
}

export const initializeTimes = (date) => fetchAPI(new Date(date));

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

    const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        const submitted = submitAPI(reservationInfo);
        if(submitted) {
            const data = localStorage.getItem("data") ?? "[]";
            const jsonData = JSON.parse(data);
            const updatedData = [...jsonData, reservationInfo];
            localStorage.setItem("data", JSON.stringify(updatedData));
            navigate("/confirmation");
        }
    }

    return (
        <>
            <Header />
            <BookingForm
                handleChange={handleChange}
                handleSubmit={submitForm}
                dispatch={dispatch}
                availableTimes={availableTimes}
                occasion={reservationInfo.occasion}
                noOfGuests={reservationInfo.noOfGuests}
                reservationDate={reservationInfo.reservationDate}
                reservationTime={reservationInfo.reservationTime}
            />
            <BasicFooter />
        </>
    );
}