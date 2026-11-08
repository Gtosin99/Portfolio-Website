import { ArrowRight, Mail, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* 1. ABOUT ME SECTION */}
      <section className="flex flex-col gap-6 pt-10">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-50 tracking-tight">
          Hi, I'm <span className="text-emerald-500">Tosin</span>.
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-300 font-medium">
          Software Engineering Undergraduate at Pan-Atlantic University.
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
          I build robust, scalable software and explore the intersection of artificial intelligence, machine learning, and practical application development. I am passionate about applying first-principles thinking and clean architecture to solve complex, real-world problems.
        </p>
        <div className="flex gap-4 mt-4">
          <Button href="#contact">Get in Touch</Button>
          <Button variant="outline" href="https://github.com/therealtosin">View GitHub</Button>
        </div>
      </section>

      {/* 2. PROJECTS SECTION */}
      <section id="projects" className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-bold text-slate-50">Selected Projects</h3>
          <div className="h-[1px] bg-slate-800 flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-colors">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow gap-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-50 mb-2">{project.title}</h4>
                  <p className="text-slate-400 text-sm">{project.shortDescription}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to={`/project/${project.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-emerald-500 transition-colors mt-2">
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CALL TO ACTION (CTA) */}
      <section id="contact" className="flex flex-col items-center text-center gap-6 py-12 bg-slate-800/30 rounded-2xl border border-slate-800">
        <h3 className="text-3xl font-bold text-slate-50">Let's build something.</h3>
        <p className="text-slate-400 max-w-md">
          I am currently open to new opportunities, collaborations, and conversations about software engineering and AI.
        </p>
        <div className="flex gap-4 mt-2">
          {/* Replace with your actual email */}
          <Button href="mailto:your.email@pau.edu.ng" className="gap-2">
            <Mail size={18} /> Send an Email
          </Button>
        </div>
      </section>

    </div>
  );
}