import React from "react";
import "./IconButton.css";

export function IconButton({ handleClick, btnClass = "", children }) {
    return (
        <button onClick={handleClick} className={"icon-button " + btnClass}>
            {children}
        </button>
    );
}