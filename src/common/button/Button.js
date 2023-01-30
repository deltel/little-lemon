import React from "react";
import "./Button.css";

export function Button({ type = "button", children }) {
    return (
        <button className="btn" type={type}>
            {children}
        </button>
    );
}