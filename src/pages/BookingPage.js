import React from "react";
import { BookingForm } from "../booking-form/BookingForm";
import { Header } from "../header/Header";

export function BookingPage() {
    return (
        <>
            <Header />
            <BookingForm />
        </>
    );
}