import React from "react";
import "./IconButton.css";

export function IconButton({ handleClick, btnClass = "", ariaLabel, children }) {
    return (
        <button aria-label={ariaLabel} onClick={handleClick} className={"icon-button " + btnClass}>
            {children}
        </button>
    );
}