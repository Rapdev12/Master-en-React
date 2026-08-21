

function ProjectCard({ title, image, alt, description, tech, link }) {
  return (
     <article className="project-card">
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Technologies:</strong> {tech}
      </p>
      <a href={link} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </article>
  );
}
export default ProjectCard;