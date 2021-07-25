// Navigation Bar Component

import React from 'react';


export default function Navigation({ handlePageChange }) {

  return (
    <nav>
      <ul id="nav-list">
        <li><a id="nav-text" href="#header1" onClick={() => handlePageChange('About')}>About Me</a></li>
        <li><a id="nav-text" href="#header2" onClick={() => handlePageChange('Project')}>Portfolio</a></li>
        <li><a id="nav-text" href="#header3" onClick={() => handlePageChange('Resume')}>Resume</a></li>
        <li><a id="nav-text" href="#header4" onClick={() => handlePageChange('Contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}