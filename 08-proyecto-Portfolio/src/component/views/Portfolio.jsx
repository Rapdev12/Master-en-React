import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";
import "./Portfolio.css";  

function Portfolio() {
  return (

    <section className="portfolio-page">
      
      <h1>Portfolio</h1>

      <div className="portfolio-grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

    </section>
  );
}

export default Portfolio