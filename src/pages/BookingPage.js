import React from "react";
import { BookingForm } from "../booking-form/BookingForm";
import { BasicFooter } from "../footer/BasicFooter";
import { Header } from "../header/Header";

export function BookingPage() {
    return (
        <>
            <Header />
            <BookingForm />
            <BasicFooter />
        </>
    );
}