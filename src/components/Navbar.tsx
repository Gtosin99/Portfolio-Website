import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link to="/" className="wordmark" aria-label="Akindele Tosin home">A<span>T</span>.</Link>
        <div className="desktop-nav">
          <a href="/#about">About</a><a href="/#projects">Projects</a><a href="/#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:tosinakindele826@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
        <button className="menu-toggle" type="button" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {isOpen && <div className="mobile-nav"><a href="/#about" onClick={() => setIsOpen(false)}>About</a><a href="/#projects" onClick={() => setIsOpen(false)}>Projects</a><a href="/#contact" onClick={() => setIsOpen(false)}>Contact</a></div>}
    </header>
  );
}
