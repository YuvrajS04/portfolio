import React from "react";
import "./Project.scss";
import Github from "../../assets/icons/github2.svg"
import tripwhiz from "../../assets/images/tripwhiz.png"

function project({ project }) {
    const techArray = project.techStack.split(', ').map(tech => tech.trim()); 
    console.log(techArray)
  return (
    <div className="project">
      <h4 className="project__subheading">Featured Project</h4>
      <h3 className="project__heading">{project.heading}</h3>
      <p className="project__description">{project.description}</p>
      <ul className="project__tech-stack-list">
        {techArray.map((tech, index) => (
            <li key={index}  className="project__tech-stack-item">{tech}</li>
        ))}
      </ul>
      <a href={project.githubLink} className="project__link">
        <img src={Github} alt="Github Logo" className="project__link-logo" />
      </a>
      <div className="project__image" ></div>
    </div>
  );
}

export default project;
