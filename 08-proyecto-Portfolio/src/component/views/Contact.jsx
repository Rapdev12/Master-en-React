import "./Contact.css";

function Contact() {

  return (
    <main className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <h1 id="contact-title">
          <span className="contact-highlight">Let's</span> build something meaningful together.</h1>
        <p className="contact-introduction">
          Have a project, an idea, or an opportunity in mind? Tell me a little
          about it and I will be happy to get back to you.
        </p>
      </section>

      <section className="contact-content" aria-label="Contact information and form">
        <div className="contact-details">
          <h2>Tell me about your project</h2>
          <p>
            I am interested in creating clear, useful, and user-focused web
            solutions. You can contact me about websites, web applications,
            e-commerce, and backend projects.
          </p>

          <ul>
            <li>Responsive websites</li>
            <li>Web applications and APIs</li>
            <li>E-commerce solutions</li>
            <li>Website improvements and maintenance</li>
          </ul>


        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/mbgrjzap"
          method="POST"
        >
          <div className="form-field">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="projectType">What do you need?</label>
            <select id="projectType" name="projectType" defaultValue="" required>
              <option value="" disabled>
                Select an option
              </option>
              <option value="Website">Website</option>
              <option value="Web application">Web application</option>
              <option value="E-commerce">E-commerce</option>
              <option value="API or backend">API or backend</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="message">Tell me more</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Describe your idea, project, or opportunity."
              required
            />
          </div>

          <button type="submit">Send message</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
