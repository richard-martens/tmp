import React from "react";
import "./Parallax.css";

export default function Parallax(props) {
    return (
        <div className="parallax">
            <div className="parallax__layer parallax__layer--back">
                <img src={props.imageSrc} alt={props.imageAlt} />
            </div>
            <div className="parallax__layer parallax__layer--base">
                {props.children}
            </div>
        </div>
    );
} 