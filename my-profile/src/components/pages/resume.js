import React from 'react';
import resumePdf from '../../resume/resume.pdf'

export default function Resume() {

    return (
        <div>
            <h1 id="header3">Resume</h1>

            <div><p>Veiw and download my <a id="link-text" href={resumePdf}>Resume</a>!</p></div>

            <div id ="tech">
                <p id="tech-title">Front-End</p>
                <ul >
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>Bootstrap</li>
                </ul>

                <p id="tech-title">Back-End</p>
                <ul>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequalize</li>
                    <li>MongoDB, Mongoose</li>
                </ul>
            </div>
        </div>
    );
}