import "../styles/Contact.css";
import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import contactImg from "../assets/contact.jpg";

function Contact() {
  return (
    <main className="contact-page">
      {/* HERO CONTACT */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <div className="part">NOUS CONTACTER</div>
          <h1>
            On a hâte de
            <br />
            vous accueillir
          </h1>
          <p>
            Réservez une table, posez-nous une question ou venez simplement
            faire un tour.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <MapPin size={18} className="contact-icon" />
              <div>
                <span>ADRESSES</span>
                <p>Mariste — [adresse]</p>
                <p>Mermoz — [adresse]</p>
                <p>Plateau — [adresse]</p>
                <p>Ouakam — [adresse]</p>
              </div>
            </div>

            <div className="contact-card">
              <Phone size={18} className="contact-icon" />
              <div>
                <span>TÉLÉPHONE</span>
                <p>Mariste — +221 77 XXX XX XX</p>
                <p>Mermoz — +221 77 XXX XX XX</p>
                <p>Plateau — +221 77 XXX XX XX</p>
                <p>Ouakam — +221 77 XXX XX XX</p>
              </div>
            </div>
            <div className="contact-card">
              <Mail size={18} className="contact-icon" />
              <div>
                <span>E-MAIL</span>
                <p>contact@lesupreme.sn</p>
              </div>
            </div>
            <div className="contact-card">
              <Clock size={18} className="contact-icon" />
              <div>
                <span>HORAIRES</span>
                <p>Tous les jours, 7h – 23h</p>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <FaInstagram size={22} />
            <FaFacebook size={22} />
          </div>
        </div>

        <div className="contact-hero-image">
          <img src={contactImg} alt="Le Suprême" />
        </div>
      </div>
    </main>
  );
}

export default Contact;
