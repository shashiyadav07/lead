import { NavLink } from "react-router-dom";
import "../style/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">LeaDesk</h2>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/get-started">Get Started</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;