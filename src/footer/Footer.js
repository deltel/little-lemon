import React from "react";
import { Nav } from "../header/Nav";
import Logo from "./footer-logo.svg";
import "./Footer.css";

export function Footer() {
    return (
        <footer className="main">
            <img src={Logo} alt="logo" className="logo" />
            <section className="footer-section">
                <h6 className="footer-heading">DOORMAT NAVIGATION</h6>
                <Nav />
            </section>
            <section className="footer-section">
                <h6 className="footer-heading">CONTACT</h6>
                <p>Address</p>
                <p>Telephone</p>
                <p>Email</p>
            </section>
            <section className="footer-section">
                <h6 className="footer-heading">SOCIAL MEDIA LINKS</h6>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </section>
        </footer>
    );
}