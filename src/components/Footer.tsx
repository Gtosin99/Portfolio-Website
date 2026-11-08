export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Akindele Oluwatosin. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0">
          {/* We will update this link later in Phase 6 */}
          <a href="https://github.com/therealtosin" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm font-medium">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}