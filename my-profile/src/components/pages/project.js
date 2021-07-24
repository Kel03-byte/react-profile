import React from 'react';
import projects from '../../projects';

export default function Project() {
  return (
    <div id="header3">
      <h1>Work</h1>
      <ul id="project">
        {projects.map((project) => (
          <li id="card" key={project.title}>
            <div id="card-title">{project.title}</div>
            <div id="card-body">
              <p>{project.summary}</p>
              <p>{project.tech}</p>
              <p ><a id="nav-text" href={`${project.gitHub}`}>GitHub</a></p>
              <p ><a id="nav-text" href={`${project.website}`}>{project.title}</a></p>
              <img id="card-image" src={project.image} alt={project.alt}></img></div>
          </li>

        ))}
      </ul>
    </div>
  );
}