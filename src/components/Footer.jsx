import "../styles/Footer.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Phone, Clock, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        {/* COL 1 — Logo + description */}
        <div className="footer-col">
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
        </div>

        {/* COL 2 — 4 adresses */}
        <div className="footer-col">
          <div className="visitez-nous">
            <h3>4 adresses à Dakar</h3>
            <div className="info">
              <p><MapPin size={16} />Mariste, Mermoz, Plateau, Ouakam</p>
              <p><Clock size={16} />7h – 23h, tous les jours</p>
              <div className="telephones">
                <p><Phone size={16} />Mariste — +221 77 123 45 67</p>
                <p><Phone size={16} />Mermoz — +221 77 234 56 78</p>
                <p><Phone size={16} />Plateau — +221 77 345 67 89</p>
                <p><Phone size={16} />Ouakam — +221 77 456 78 90</p>
              </div>
            </div>
          </div>
        </div>

        {/* COL 3 — Réseaux + nav */}
        <div className="footer-col">
          <div className="suivez-nous">
            <h3>Suivez-nous</h3>
            <div className="social-icons">
              <FaInstagram size={24} color="#F7F4EC" />
              <FaFacebook size={24} color="#F7F4EC" />
            </div>
          </div>
          <div className="nav">
            <ul>
              <li><NavLink to="/">Accueil</NavLink></li>
              <li><NavLink to="/menu">Menu</NavLink></li>
              <li><NavLink to="/galerie">Galerie</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ligne_decor"></div>
      <div className="droits">
        <p>© 2026 Le Suprême — Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;