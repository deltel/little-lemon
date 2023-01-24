import React, { useState } from "react";
import { Nav } from "./Nav";
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
                    <button onClick={() => setShowMenu(prev => !prev)} className="nav-button hamburger">
                        <img src={hamburger} alt="menu" />
                    </button>
                    <img src={logo} alt="logo" className="logo" />
                    <button className="nav-button basket">
                        <img src={basket} alt="basket" />
                    </button>
                </section>
                <Nav className={navListClass} />
            </nav>
        </header>
    );
}