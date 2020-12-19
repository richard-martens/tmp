import React from "react";
import "./Parallax.css";

export default function ParallaxGroup(props) {
    let className = props.darkFooter ? "parallax dark_footer" : "parallax";
    return (
        <div className={className} style={{ "background-image": "url(" + props.imageSrc + ")" }}>
            {props.children}
        </div>
    );
} 
