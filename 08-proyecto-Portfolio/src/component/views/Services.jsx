import "./Services.css";
import { Link } from "react-router";

function Services() {
  return (
    <main className="services-page">
      <h1>Services</h1>


      <div className="section-grid">
        <article className="service">
          <h2>Web Development</h2>
          <p>
            I build clear, responsive websites designed to present your business,
            service, or project in a professional way.
          </p>
          <Link to="/contact" className="service-contact">Contact me</Link>
        </article>

        <article className="service">
          <h2>E-commerce Solutions</h2>
          <p>
            I develop online store features focused on showcasing products,
            improving the shopping experience, and supporting business growth.
          </p>
          <Link to="/contact" className="service-contact">Contact me</Link>
        </article>

        <article className="service">
          <h2>Web Applications & APIs</h2>
          <p>
            I build web applications and APIs using JavaScript, Node.js, and databases
            to connect information and support efficient digital solutions.
          </p>
          <Link to="/contact" className="service-contact">Contact me</Link>
        </article>

      </div>
    </main>
  )
}

export default Services