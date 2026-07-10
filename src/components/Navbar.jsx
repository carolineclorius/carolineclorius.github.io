import { NavLink } from "react-router";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <NavLink to="/">
        <img src="/logo.svg" alt="Caroline logo" className="logo" />
      </NavLink>

      <nav className="site-nav" aria-label="Primær navigation">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact" className="contact-link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
