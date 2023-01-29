import React from "react";
import { Link } from "react-router-dom";

export function Nav({ className }) {
    return (
        <section className={"nav-list" + ` ${className}`}>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/menu">menu</Link></li>
                <li><Link to="/booking">reservations</Link></li>
                <li><Link to="/order">order online</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>
        </section>
    );
}