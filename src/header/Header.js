import React from "react";
import { Nav } from "./Nav";
import Logo from "./Logo.svg";

export function Header() {
    return(
        <header>
            <img src={Logo} alt="logo" />
            <Nav />
        </header>
    );
}