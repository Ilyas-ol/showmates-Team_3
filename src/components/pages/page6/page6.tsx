import "./page6.css";

type Project = {
  title: string;
  text: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: "ShellPath",
    text: "An internal project where a team of mentors creates cybersecurity content for the club. It goes beyond the usual CTF categories, with topics like Active Directory, malware development, web exploitation and blue teaming.",
    tags: ["Mentors", "Active Directory", "Blue Team"],
  },
];

export default function Page6() {
  return (
    <section className="page6" id="projects" aria-labelledby="p6-title">
      <div className="p6-inner">
        <header className="p6-head">
          <h2 className="p6-title" id="p6-title">
            <span className="p6-num">05</span>
            <span className="p6-slash" aria-hidden="true" />
            <span>Projects</span>
          </h2>
          <p className="p6-lede">
            Ideas become experiences. Here's what we bring to the community.
          </p>
        </header>

        <ul className="p6-slides">
          {PROJECTS.map((project) => (
            <li className="p6-card" key={project.title}>
              <span className="p6-tag">Project</span>
              <h3>{project.title}</h3>
              <p className="p6-desc">{project.text}</p>
              <ul className="p6-tags" aria-label="Project topics">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
