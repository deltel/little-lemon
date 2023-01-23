import React from "react";
import { Nav } from "../header/Nav";
import Logo from "./footer-logo.svg";

export function Footer() {
    return (
        <footer>
            <img src={Logo} alt="logo" />
            <section>
                <h6>DOORMAT NAVIGATION</h6>
                <Nav />
            </section>
            <section>
                <h6>CONTACT</h6>
                <p>Address</p>
                <p>Telephone</p>
                <p>Email</p>
            </section>
            <section>
                <h6>SOCIAL MEDIA LINKS</h6>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </section>
        </footer>
    );
}