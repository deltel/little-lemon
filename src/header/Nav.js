import React from "react";

export function Nav({ className }) {
    return (
        <section className={"nav-list" + ` ${className}`}>
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">menu</a></li>
                <li><a href="#">reservations</a></li>
                <li><a href="#">order online</a></li>
                <li><a href="#">login</a></li>
            </ul>
        </section>
    );
}