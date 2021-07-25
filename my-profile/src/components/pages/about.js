import React from 'react';
import Image from "../../images/headshot.JPG"

export default function About() {

    return (
        <div>
            <h1 id="header1">About Me</h1>
            <img id="headshot" src={Image} alt="Headshot of a lady"></img>
            <div id="about">
                <p id="about-text">
                    Hi I am a current UWA Coding Bootcamp student and amd enjoying
                    the tough challenges that I have been doing so far. I am also a
                    full time worker at the Airport for a car rental company. I have
                    always been interested in tech and gaming and finally have the
                    opportunity to learn more about the process behind some of my favourite
                    games and tech.
                </p>
                <p id="about-text">You can contact me by email, on GitHub or Linkedin via the links below!</p>
            </div>
        </div>
    );
}