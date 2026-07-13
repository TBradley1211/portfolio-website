function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>
        I’m always open to connecting with other students, developers, and
        professionals. Feel free to reach out or explore my work.
      </p>

      <div className="contact-links">
        <a href="mailto:tanikka.bradley@students.maestrocollege.com" className="contact-link">
          Email
        </a>
        <a
          href="https://github.com/TBradley1211"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          GitHub
        </a>
        <a
          href="www.linkedin.com/in/t-bradley-a2b066419"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;