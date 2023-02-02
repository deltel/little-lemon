import React, { useReducer, useState } from "react";
import { Formik } from "formik";
import { object, string, number, date } from 'yup';

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
    const submitForm = (values) => {
        const submitted = submitAPI(values);
        if (submitted) {
            const data = localStorage.getItem("data") ?? "[]";
            const jsonData = JSON.parse(data);
            const updatedData = [...jsonData, reservationInfo];
            localStorage.setItem("data", JSON.stringify(updatedData));
        }
    }

    return (
        <>
            <Header />
            <Formik
                initialValues={{
                    occasion: "birthday",
                    noOfGuests: 0,
                    reservationDate: "",
                    reservationTime: ""
                }}
                validationSchema={object({
                    occasion: string().required("Please select an occasion"),
                    noOfGuests: number().required("Please enter the number of guests").positive("Please enter a number greater than 0").max(10, "The number of guests should not be greater than 10").integer(),
                    reservationDate: date().default(() => new Date()),
                    reservationTime: string().required("Please select a time")
                })}
                onSubmit={(values, { setSubmitting }) => {
                    submitForm(values);
                    setSubmitting(false);
                    navigate("/confirmation");
                }}
            >
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting, }) => (
                    <BookingForm
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        handleSubmit={handleSubmit}
                        dispatch={dispatch}
                        availableTimes={availableTimes}
                        occasion={values.occasion}
                        noOfGuests={values.noOfGuests}
                        reservationDate={values.reservationDate}
                        reservationTime={values.reservationTime}
                        errors={errors}
                        touched={touched}
                        isSubmitting={isSubmitting}
                    />
                )}
            </Formik>
            <BasicFooter />
        </>
    );
}