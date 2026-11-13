import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const project = projects.find(({ id }) => id === 'garden-gems')!;

  return (
    <article className="details-page">
      <Link className="back-link" to="/#projects"><ArrowLeft size={16} /> Back to portfolio</Link>
      <header className="details-hero">
        <p className="eyebrow">Project study </p>
        <h1>{project.title}<span className="accent-dot">.</span></h1>
        <p className="details-lede">{project.fullDescription}</p>
        {project.liveLink && <a className="text-link" href={project.liveLink} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Visit live website <ArrowUpRight size={15} /></a>}
      </header>

      <section className="details-gallery" aria-label="Project screenshots">
        {project.screenshots?.map((shot, index) => <figure key={shot.label}>
          <img src={shot.image} alt={shot.label} />
          <figcaption><span>0{index + 1}</span>{shot.label}</figcaption>
        </figure>)}
      </section>

      <div className="details-content">
        <div className="details-main">
          <section><p className="eyebrow">01 · Purpose</p><h2>Problem solved</h2><p>{project.problemSolved}</p></section>
          <section><p className="eyebrow">02 · What it does</p><h2>Implemented features</h2><ul className="feature-list">{project.features?.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
          {project.learned && <section><p className="eyebrow">03 · Reflection</p><h2>What I learned</h2><p>{project.learned}</p></section>}
        </div>
        <aside className="stack-panel"><p className="eyebrow">Built with</p><h2>Technology</h2><ul className="stack-roles"><li><strong>Next.js + React</strong><span>Render the multi-page website and interactive forms.</span></li><li><strong>Tailwind CSS</strong><span>Style the client interface.</span></li><li><strong>Express</strong><span>Provide API routes for services, contact, newsletter, and consultations.</span></li><li><strong>SQLite + PostgreSQL</strong><span>Database integrations included in the server project.</span></li></ul></aside>
      </div>
      <Link className="return-link" to="/#projects"><ArrowLeft size={16} /> Return to home page</Link>
    </article>
  );
}
