import { ArrowDown, ArrowRight, Code2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="portfolio-page">
      <section className="hero-section" id="about" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Software Engineer</p>
          <h1 id="hero-title">Hi, I’m<br /><span>Akindele Tosin.</span></h1>
          <p className="hero-summary">
            I’m a Software Engineering student in Nigeria interested in building thoughtful software and understanding the ideas behind it. I focus on software engineering, AI and machine learning, deep learning, and problem-solving.
          </p>
          <div className="hero-actions">
            <Button href="mailto:tosinakindele826@gmail.com"><Mail size={16} /> Get in touch</Button>
            <Button variant="outline" href="#projects">My Projects <ArrowDown size={15} /></Button>
          </div>
        </div>
        <div className="portrait-placeholder">
          <img src="/images/profile-photo.jpg" alt="Portrait placeholder for Akindele Tosin" />
        </div>
      </section>

      <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div><h2 id="projects-title">Projects</h2></div>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <div className="project-visual">
                <img src={project.image} alt={`${project.title} project screenshot`} />
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="project-card-body">
                <div className="project-title-row"><h3>{project.title}</h3><span className="project-type">{index === 0 ? 'Food application' : 'Gardening platform'}</span></div>
                <p>{project.shortDescription}</p>
                <ul className="tech-list" aria-label="Technologies used">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                <div className="project-links">
                  {project.id === 'garden-gems' && <Link to="/project/garden-gems">Project details <ArrowRight size={15} /></Link>}
                  {project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer">Visit website <ArrowRight size={15} /></a>}
                  {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer">Source code <ArrowRight size={15} /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div><p className="eyebrow">Have a project or question?</p><h2 id="contact-title">Let’s start a<br /><span>conversation.</span></h2></div>
        <div className="contact-actions">
          <a className="contact-link primary" href="mailto:tosinakindele826@gmail.com"><Mail size={17} /> tosinakindele826@gmail.com <ArrowRight size={16} /></a>
          <a className="contact-link" href="https://github.com/Gtosin99" target="_blank" rel="noreferrer"><Code2 size={17} /> Explore my GitHub <ArrowRight size={16} /></a>
        </div>
      </section>
    </div>
  );
}
