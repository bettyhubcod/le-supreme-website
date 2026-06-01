import "../styles/Footer.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Phone, Clock, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Le Suprême" />
        </NavLink>
      </div>
      <div className="description">
        <p>
          Café-pâtisserie chaleureux où la gourmandise se vit comme une
          parenthèse. Petit-déjeuner, douceurs maison et fast-food signature.
        </p>
      </div>
      <div className="visitez-nous">
        <h3>Visitez-nous</h3>
        <div className="info">
          <p>
            <MapPin />
            Dakar, Sénégal
          </p>
          <p>
            <Clock />
            7h – 23h, tous les jours
          </p>
          <p>
            <Phone />
            +221 77 000 00 00
          </p>
        </div>
      </div>
      <div className="suivez-nous">
        <h3>Suivez-nous</h3>
        <div className="icon">
          <FaInstagram size={24} color="#F7F4EC" />
          <FaFacebook size={24} color="#F7F4EC" />
        </div>
      </div>
      <div className="nav">
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
            <NavLink to="/contact" >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="ligne_decor"></div>
      <div className="droits">
        <p>© 2026 Le Suprême — Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;
