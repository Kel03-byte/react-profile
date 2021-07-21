import React from 'react';
import Image from "../images/headshot.JPG"

export default function Header() {
    return (
        <div>
            <div>Kellie Ryan</div>
            <img id="headshot" src={Image} alt="Headshot of a lady"></img>
            </div>
        
    );
}