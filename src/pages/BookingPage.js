import React, { useState } from "react";
import { BookingForm } from "../forms/booking/BookingForm";
import { BasicFooter } from "../footer/BasicFooter";
import { Header } from "../header/Header";
import { ContactForm } from "../forms/contact/ContactForm";

export function BookingPage() {
    const [submitted] = useState(false);

    return (
        <>
            <Header />
            {submitted ? <ContactForm /> : <BookingForm />}
            <BasicFooter />
        </>
    );
}