import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Our icons

export default function Navbar() {
  // React State: Memory that tracks if the mobile menu is open (true) or closed (false)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-slate-50 tracking-tight">
            Tosin<span className="text-emerald-500">.</span>
          </Link>

          {/* Desktop Menu (Hidden on mobile) */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-300 hover:text-emerald-500 transition-colors">About</Link>
            <Link to="/projects" className="text-slate-300 hover:text-emerald-500 transition-colors">Projects</Link>
          </div>

          {/* Mobile Menu Toggle Button (Hidden on desktop) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-slate-300 hover:text-emerald-500 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            <Link to="/" onClick={toggleMenu} className="text-slate-300 hover:text-emerald-500 block px-3 py-2 rounded-md font-medium">About</Link>
            <Link to="/projects" onClick={toggleMenu} className="text-slate-300 hover:text-emerald-500 block px-3 py-2 rounded-md font-medium">Projects</Link>
          </div>
        </div>
      )}
    </nav>
  );
}