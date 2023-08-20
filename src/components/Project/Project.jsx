import React from "react";
import "./Project.scss";
import { Icon } from '@iconify/react';


function project({ project }) {
  const techArray = project.techStack.split(", ").map((tech) => tech.trim());
  console.log(techArray);
  return (
    <div className="project">
      <div className="project__wrapper">
        <h4 className="project__subheading">Featured Project</h4>
        <h3 className="project__heading">{project.heading}</h3>
        <p className="project__description">{project.description}</p>
        <ul className="project__tech-stack-list">
          {techArray.map((tech, index) => (
            <li key={index} className="project__tech-stack-item">
              {tech}
            </li>
          ))}
        </ul>
        <a href={project.githubLink} className="project__link">
          <Icon className="project__link-logo" icon="line-md:github-loop" />
        </a>
      </div>
      <div className="project__image" alt={project.heading} ></div>
    </div>
  );
}

export default project;
