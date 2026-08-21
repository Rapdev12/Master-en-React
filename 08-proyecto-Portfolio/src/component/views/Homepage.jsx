import "./Homepage.css";
import { Link } from "react-router";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";

function Homepage() {
  return (
    <div className="homepage-page">

      <h1>I build clear, functional, and scalable web solutions.</h1>


      <p>Hi, I’m Ronald Palacios, a web developer committed to continuous learning.
        I work with JavaScript, Node.js, and databases,
        and I am currently expanding my skills in React to build modern, useful,
        and user-focused web experiences. <Link to="/contact">Contact me</Link>
      </p>

      <section className="latest-work">
        {/* Título de servicios y cards */}
        <h2>Latest Projects</h2>

        <p>
          A selection of projects where I apply my skills in web development,
          problem-solving, and continuous learning.
        </p>
        <div className="project-grid">
          {projects.slice(0, 3).map((proj) => (
            <ProjectCard key={proj.title} {...proj} />
          ))}
        </div>

      </section>

    </div>
  )
}

export default Homepage