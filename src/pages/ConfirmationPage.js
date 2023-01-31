import React from "react";
import { ConfirmedBooking } from "../confirmation/ConfirmedBooking";
import { BasicFooter } from "../footer/BasicFooter";
import { Header } from "../header/Header";

export function ConfirmationPage() {
    return (
        <>
            <Header />
            <ConfirmedBooking />
            <BasicFooter />
        </>
    );
}