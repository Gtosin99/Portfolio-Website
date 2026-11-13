export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <p>© {new Date().getFullYear()} Akindele Oluwatosin</p>
        <a href="https://github.com/Gtosin99" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </footer>
  );
}
