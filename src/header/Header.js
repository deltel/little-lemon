import React, { useState } from "react";

import { Nav } from "./Nav";
import { IconButton } from "../common/button/icon-button/IconButton";

import logo from "./logo.svg";
import hamburger from "./hamburger-menu.svg";
import basket from "./basket.svg";

import "./Header.css";

export function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const navListClass = showMenu ? "" : "closed";

    return (
        <header>
            <nav>
                <section className="nav-icons">
                    <IconButton handleClick={() => setShowMenu(prev => !prev)} btnClass="nav-button">
                        <img src={hamburger} alt="menu" />
                    </IconButton>
                    <img src={logo} alt="logo" className="logo" />
                    <IconButton btnClass="nav-button">
                        <img src={basket} alt="basket" />
                    </IconButton>
                </section>
                <Nav className={navListClass} />
            </nav>
        </header>
    );
}