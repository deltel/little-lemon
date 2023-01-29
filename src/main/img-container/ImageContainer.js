import React from "react";

export function ImageContainer({ className, img, altText, imgClassName="" }) {
    return (
        <div className={className}>
            <img src={img} alt={altText} className={imgClassName} />
        </div>
    );
}