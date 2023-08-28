import "./Sections.scss";
import projectdata from "../../assets/data/projectsdata.json";
import Project from "../Project/Project";
import Photo from "../../assets/images/avatar.jpg";
import { useState, useEffect } from "react";
import ProjImg0 from "../../assets/images/tripwhiz.png";
import ProjImg1 from "../../assets/images/BrainFlix.png";

function Sections() {
  // State variable to track visibility
  const [isVisible, setIsVisible] = useState(false);

  // Effect to set visibility to true when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Array of project images
  const projImgArr = [ProjImg0, ProjImg1];
  return (
    <div className={`sections`}>
      <section id="hero" className="hero">
        <div className={`hero__container ${isVisible ? "visible" : ""}`}>
          <h3 className={`hero__subheading slide-from-top`}>Hi there, I'm</h3>
          <h1 className={`hero__heading slide-from-top`}>Yuvraj Sirohi.</h1>
          <h2 className={`hero__statement slide-from-top`}>
            A Web Developer on a mission.
          </h2>
          <p className="hero__paragraph slide-from-top">
            In the ever-evolving world of web development, I find my passion in
            turning complex challenges into elegant solutions. With expertise in
            HTML, CSS, JavaScript, Node, React, and more, I embrace every
            opportunity to push the boundaries of what can be achieved.
            Together, let's bring your ideas to life and make a meaningful
            impact in the digital realm.
          </p>
          <div class="buttons ">
            <a
              class="raise"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/YuvrajS04"
            >
              Discover my work
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="heading__container">
          <h2 className="heading">
            <span className="heading__number">01.</span>about me
          </h2>
        </div>
        <div className="about__content-container">
          <div className="div about__content-wrapper">
            <p className="about__content">
              {" "}
              Hello! I'm Yuvraj Sirohi, and I have a deep passion for web
              development and pushing the boundaries of what's possible. My
              journey in this exciting field began in 2022 when I needed to
              create a form, which led me to explore the basics of HTML and CSS.
              I fell in love with the process and haven't looked back since.
            </p>
            <p className="about__content">
              Today, I hold a Web Development Diploma from BrainStation
              Bootcamp, where I honed my skills and knowledge to become a
              dedicated developer. My focus is on creating user-centric digital
              experiences that leave a meaningful impact. I believe in
              constantly learning and staying up-to-date with the latest
              technologies to deliver exceptional results.
            </p>
            <p className="about__content">
              {" "}
              I'm enthusiastic about collaborating on innovative projects and
              continuing my journey in the dynamic and ever-evolving field of
              web development. Some of the technologies I've been working with
              recently include:
            </p>
            <ul className="about__skill-list">
              <div className="about__list-left">
                <li className="about__list-item">JavaScript (ES6+)</li>
                <li className="about__list-item">React</li>
                <li className="about__list-item">Node.js</li>
              </div>
              <div className="about__list-right">
                <li className="about__list-item">Express</li>
                <li className="about__list-item">Web APIs</li>
                <li className="about__list-item">OAuth</li>
              </div>
            </ul>
          </div>
          <div className="about__image-container">
            <img
              className="about__image about__image-filter"
              src={Photo}
              alt="avatar"
            />
          </div>
        </div>
      </section>
      <section id="work" className="work">
        <h2 className="heading">
          <span className="heading__number">02.</span>some things i've built
        </h2>
        {projectdata.map((project, index) => (
          <Project key={index} project={project} projImg={projImgArr[index]} />
        ))}
      </section>
      <section id="contact" className="contact">
        <h2 className="contact__heading-alternate">03. what's next?</h2>
        <h2 className="contact__heading">get in touch</h2>
        <p className="contact__description">
          I'm currently exploring opportunities as a web developer. With a
          passion for coding and an eye for design, I'm on a mission to create
          seamless online experiences. Whether it's building interactive
          websites or optimizing user interfaces, I'm excited to collaborate on
          projects that make an impact. Let's connect and discuss how I can
          contribute to your next web endeavor.
        </p>
        <div class="buttons">
          <a
            class="raise"
            target="_blank"
            rel="noreferrer"
            href="mailto:yuvrajsirohi22@gmail.com"
          >
            Reach out!
          </a>
        </div>
      </section>
    </div>
  );
}

export default Sections;
