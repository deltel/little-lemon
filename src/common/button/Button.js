import React from "react";
import "./Button.css";

export function Button({ type = "button", disabled, children }) {
    return (
        <button className="btn" type={type} disabled={disabled}>
            {children}
        </button>
    );
}