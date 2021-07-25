// Portfolio/Project Component

import React from 'react';
import projects from '../../projects';

export default function Project() {
  return (
    <div id="header2">
      <h1>Portfolio</h1>
      <ul id="project">
        {projects.map((project) => (
          <li className="card" key={project.title}>
            <div id="card-title">{project.title}</div>
            <img id="card-image" src={project.image} alt={project.alt}></img>
            <div className="card-text">
              <p>{project.summary}</p>
              <p>{project.tech}</p>
              <p>
              <a id="card-icon" href={`${project.website}`}><i className="fas fa-link fa-2x"></i></a>
              <a id="card-icon" href={`${project.gitHub}`}><i className="fab fa-github fa-2x"></i></a>
            </p>
            </div>
          </li>

        ))}
      </ul>
    </div>
  );
}