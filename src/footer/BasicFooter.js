import React from "react";
import Logo from "./footer-logo.svg";
import "./Footer.css";

export function BasicFooter() {
    return (
        <footer className="basic">
            <img src={Logo} alt="logo" className="logo" />
        </footer>
    );
}