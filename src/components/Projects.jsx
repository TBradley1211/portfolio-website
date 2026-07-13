function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built to showcase my background, technical skills, projects, education, and contact information as an AI Software Engineering student.",
      tech: "React, CSS, JavaScript",
      github: "https://github.com/TBradley1211/portfolio-website",
      demo: "",
      status: "Complete"
    },
    {
      title: "React Task Manager",
      description:
        "A task management application built with React that allows users to add, complete, and delete tasks while practicing component structure and state management.",
      tech: "React, JavaScript, CSS",
      github: "https://github.com/TBradley1211/react-task-manager",
      demo: "",
      status: "In Progress"
    },
    {
      title: "Expense Tracker Python",
      description:
        "A Python expense tracker that organizes spending by category, helping users record expenses, monitor totals, and better understand their spending habits.",
      tech: "Python",
      github: "https://github.com/TBradley1211/expense-tracker-python",
      demo: "",
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <p className="projects-intro">
        Here are some of the projects I’m currently building to strengthen my
        skills in React, Python, and software development.
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-top">
              <h3>{project.title}</h3>
              <span
                className={`status-badge ${
                  project.status === "Complete"
                    ? "status-complete"
                    : "status-progress"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="tech-badge">{project.tech}</div>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                View GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn project-btn-secondary"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;