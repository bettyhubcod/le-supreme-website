import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png"

function Navbar() {
  const [etat, setState] = useState(false);
  return (
    <nav>
      <div className="menu">
        <div>
          <NavLink to="/" >
            <img src={logo} alt="Le Suprême" />
          </NavLink>
        </div>

        <button onClick={() => setState((prev) => !prev)}>
          {etat ? <X /> : <Menu />}
        </button>
      </div>
      <div className="ligne_decor"></div>

      {etat && (
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/galerie">Galerie</NavLink>
          </li>
          <li>
            <NavLink to="/contact" id="contact">Contact</NavLink>
          </li>
        </ul>
      )}
      <div className="ligne_decor"></div>
    </nav>
  );
}

export default Navbar;
