import React from "react";
import "./Project.scss";
import { Icon } from "@iconify/react";

function Project({ project, projImg }) {
  const techStacks = project.techStack;

  return (
    <div className="project">
      <div className="project__wrapper">
        <h4 className="project__subheading">Featured Project</h4>
        <a
          className="project-heading__wrapper"
          target="_blank"
          rel="noreferrer"
          href={project.githubLink}
        >
          <h3 className="project__heading">{project.heading}</h3>
        </a>
        <div className="project-description__wrapper">
          <p className="project__description">{project.description}</p>
          <ul className="project__tech-stack-list">
            {techStacks.map((tech, index) => (
              <li key={index} className="project__tech-stack-item">
                {tech}
              </li>
            ))}
          </ul>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.githubLink}
            className="project__link"
          >
            <Icon className="project__link-logo" icon="line-md:github-loop" />
          </a>
        </div>
      </div>
      <div className="project__image">
        <img className="project__img" src={projImg} alt="project thumbnail" />
      </div>
    </div>
  );
}

export default Project;
