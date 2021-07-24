import React from 'react';
import resumePdf from '../../resume/resume.pdf'

export default function Resume() {

    return (
        <div>
            <h1 id="header2">Resume</h1>

            <div><p>Download my <a id="nav-text" href={resumePdf}>Resume</a>!</p></div>

            <div>
                <p>
                    Node.js, Express, MySQL, Javascript
                </p>
            </div>
        </div>
    );
}