import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [etat, setState] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setState(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <div className="menu">
        <div>
          <NavLink to="/">
            <img src={logo} alt="Le Suprême" />
          </NavLink>
        </div>
        <div className="nav-desktop">
          <ul>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/galerie">Galerie</NavLink></li>
            <li><NavLink to="/contact" id="contact">Contact</NavLink></li>
          </ul>
        </div>
        <button onClick={() => setState((prev) => !prev)}>
          {etat ? <X /> : <Menu />}
        </button>
      </div>
      <div className="ligne_decor"></div>
      <div className="nav-mobile">
        {etat && (
          <ul>
            <li><NavLink to="/" onClick={() => setState(false)}>Accueil</NavLink></li>
            <li><NavLink to="/menu" onClick={() => setState(false)}>Menu</NavLink></li>
            <li><NavLink to="/galerie" onClick={() => setState(false)}>Galerie</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setState(false)}>Contact</NavLink></li>
          </ul>
        )}
      </div>
      <div className="ligne_decor"></div>
    </nav>
  );
}

export default Navbar;