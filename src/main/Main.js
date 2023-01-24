import React from "react";
import { Introduction } from "./introduction/Introduction";
import { Dishes } from "./dishes/Dishes";
import { Testimonials } from "./testimonials/Testimonials";
import { MoreInfo } from "./more-info/MoreInfo";

export function Main() {
    return (
        <main>
            <Introduction />
            <Dishes />
            <Testimonials />
            <MoreInfo />
        </main>
    );
}