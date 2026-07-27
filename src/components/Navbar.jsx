// Import navigation links from React Router
import { NavLink } from "react-router";

// Import component styles
import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      {/* Logo linking to the homepage */}
      <NavLink to="/">
        <img src="/logo.svg" alt="Caroline logo" className="logo" />
      </NavLink>

      {/* Main navigation */}
      <nav className="site-nav" aria-label="Primary navigation">
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
