import "./Resumecv.css";

function Resumecv() {
  return (
    <main className="resume-page">
      <header>
        <h1>Ronald Palacios</h1>

        <p>Web Developer | IT Support Professional</p>

        <p>
          Buenos Aires, Argentina
        </p>
      </header>

      <section>
        <h2>About Me</h2>

        <p>
          Web developer focused on building clear, functional, and user-focused digital solutions.
          I work with JavaScript, TypeScript, Node.js, and databases,
          and I am currently expanding my skills in React and the MERN stack.
        </p>
      </section>

      <section className="skills">
        <h2>Core Skills</h2>

        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>SQL & Databases</li>
          <li>React - Currently Learning</li>
          <li>TypeScript</li>

        </ul>
      </section>

      <section>
        <h2>Relevant Experience</h2>

        <article>
          <h3>Field Support IT</h3>
          <p>
            <strong>Sanatorio Trinidad Palermo</strong> | 2021 - Present
          </p>

          <ul>
            <li>Developed internal applications using Power Apps.</li>
            <li>Automated workflows with Power Automate.</li>
            <li>Performed SQL data operations for business applications.</li>
            <li>Provided technical support and efficient solutions to users.</li>
          </ul>
        </article>
      </section>

      <section>
        <h2>Education & Training</h2>

        <ul>

          <li>
            <strong>Full Stack MERN Development</strong> - Digital House, 2022
          </li>

          <li>
            <strong>Backend Web Programming MERN</strong> - Coderhouse, 2022
          </li>

          <li>
            <strong>Advanced SQL Databases</strong> - Programa San Juan Tec,
            2023
          </li>

          <li>
            <strong>Master in TypeScript, Modern JavaScript, ES2026 and HTML5 APIs</strong>
            {" - "}Víctor Robles, Completed June 21, 2026
          </li>

          <li>
            <strong>Master in React: ReactJS, Hooks, MERN, NodeJS and JWT+</strong>
            {" - "}Víctor Robles, In Progress
          </li>
        </ul>
      </section>

      <section>
        <h2>Additional Information</h2>

        <p>English: B2 Level</p>
        <p>Scrum Methodology - Codo a Codo, 2024</p>
      </section>
    </main>
  )
}

export default Resumecv