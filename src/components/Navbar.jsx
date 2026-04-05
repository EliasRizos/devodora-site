import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Devodora Systems" />
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Devodora Systems" />
      </Link>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}