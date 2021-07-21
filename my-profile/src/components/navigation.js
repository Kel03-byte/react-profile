import React from 'react';
import Resume from '../resume/resume.pdf'

export default function Navigation({ handlePageChange }) {

  return (
    <nav>
      <ul>
        <li><a id="nav-text" href={Resume}>Resume</a></li>
        <li><a id="nav-text" href="#header1" onClick={() => handlePageChange('About')}>About Me</a></li>
        <li><a id="nav-text" href="#header2" onClick={() => handlePageChange('Tech')}>Technical Skills</a></li>
        <li><a id="nav-text" href="#header3" onClick={() => handlePageChange('Work')}>Work</a></li>
        <li><a id="nav-text" href="#header4" onClick={() => handlePageChange('Contact')}>Contact Me</a></li>
      </ul>
    </nav>
  );
}