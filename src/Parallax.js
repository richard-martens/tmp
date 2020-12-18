import React from "react";
import "./Parallax.css";

export default function ParallaxGroup(props) {
    // 
    return (
        <div className="parallax__group">
            <div className="parallax__layer parallax__layer--back">
                <img src={props.imageSrc} alt={props.imageAlt} width="100%" />
            </div>
            <div className="parallax__layer parallax__layer--base">
                {props.children}
            </div>
        </div>
    );
} 
