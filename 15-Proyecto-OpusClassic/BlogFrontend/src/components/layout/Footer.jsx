import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Ronald Palacios · Web Developer
      </p>
      <p className="footer-subtext">
        Opus Classic Gazette · Chronicles and Scores of Universal Art
      </p>
    </footer>
  );
}
export default Footer;