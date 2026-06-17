import { NavLink } from "react-router-dom";
import hero from "../assets/hero.png";
import signature from "../assets/signature.png";
import lieu1 from "../assets/lieu/lieu1.jpeg";
import lieu2 from "../assets/lieu/lieu2.jpeg";
import lieu3 from "../assets/lieu/lieu3.jpeg";
import burger from "../assets/burger.jpg";
import pastries from "../assets/menu/pastries.jpg";
import "../styles/home.css";
import { FaStar, FaCoffee, FaUtensils } from "react-icons/fa";
function Home() {
  return (
    <body>
      <div className="hero">
        <div className="gauche">
          <div className="titre">──── Café · Pâtisserie · Fast-food</div>
          <div className="slogan">
            L'art de la <span>gourmandise</span>, à chaque instant.
          </div>
          <div className="description">
            <p>
              {" "}
              Bienvenue chez Le Suprême — un café-pâtisserie où l'on prend le
              temps. Petit-déjeuner soigné, douceurs maison et fast-food
              signature, dans un cadre chaleureux et raffiné.
            </p>
          </div>
          <div className="cta">
            <NavLink to="/menu">
              <button id="green_cta">Decouvrir le menu ➜</button>
            </NavLink>
            <NavLink to="/Contact">
              <button>Nous trouver</button>
            </NavLink>
          </div>
          <div className="stars">
            <div className="etoile">
              <FaStar color="#C97A4F" size={20} />
              <FaStar color="#C97A4F" size={20} />
              <FaStar color="#C97A4F" size={20} />
              <FaStar color="#C97A4F" size={20} />
              <FaStar color="#C97A4F" size={20} />
            </div>
            <div className="text">+1 200 clients ravis chaque mois</div>
          </div>
        </div>
        <div className="droite">
          <div className="image">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
      <div className="univers">
        <div className="part">NOS UNIVERS</div>
        <div className="titre">Trois moments, une adresse</div>
        <div className="slogan">
          Du premier café du matin au burger d'après-midi, on a pensé chaque
          envie.
        </div>
        <div className="card">
          <div className="card1">
            <div className="card-icon">
              <FaStar />
            </div>
            <h3>Pâtisseries maison</h3>
            <p>
              Croissants, éclairs, gâteaux et viennoiseries préparés chaque
              jour.
            </p>
          </div>
          <div className="card2">
            <div className="card-icon">
              <FaCoffee />
            </div>
            <h3>Petit-déjeuner</h3>
            <p>
              Cafés de spécialité, jus pressés et formules complètes pour bien
              démarrer.
            </p>
          </div>
          <div className="card3">
            <div className="card-icon">
              <FaUtensils />
            </div>
            <h3>Fast-food signature</h3>
            <p>
              Burgers, gaufres salées et plats généreux — la version Suprême.
            </p>
          </div>
        </div>
      </div>
      <div className="specialite">

        <div className="specialite-content">
          <div className="part">SPÉCIALITÉ MAISON</div>

          <h2>
            Le Suprême — la gaufre
            <br />
            qui porte notre nom
          </h2>

          <p>
            Une gaufre dorée, généreusement nappée de chocolat fondu, garnie de
            fruits frais et d'une touche de gourmandise. C'est notre fierté.
          </p>
          <NavLink to="/menu">
            <button className="menu-btn">Voir tout le menu →</button>
          </NavLink>

        </div>
        <div className="specialite-image"><img src={signature} alt="" /></div>
      </div>

      <div className="lieu">
        <div className="lieu-content">
          <div className="part">LE LIEU</div>
          <h2>Une ambiance qui respire</h2>
          <NavLink to="/galerie">Voir la galerie →</NavLink>
        </div>
        <div className="lieu-images">
          <img src={lieu1} alt="" />
          <img src={lieu2} alt="" />
          <img src={lieu3} alt="" />
        </div>
      </div>

      <div className="coin">
        <NavLink to="/menu">
          <div className="coin-card">
            <img src={pastries} alt="Pâtisseries" />
            <div className="coin-overlay">
              <span className="part">PÂTISSERIES</span>
              <h3>Le coin sucré</h3>
            </div>
          </div>
        </NavLink>
        <NavLink to="/menu">
          <div className="coin-card">
            <img src={burger} alt="Fast-food" />
            <div className="coin-overlay">
              <span className="part">FAST-FOOD</span>
              <h3>Suprême Burger</h3>
            </div>
          </div>
        </NavLink>
      </div>

      <div className="cta_Final">
        <h2>On vous attend.</h2>
        <p>Venez vivre l'expérience Suprême — un café, une douceur, ou un repas complet.</p>
        <NavLink to="/contact">
          <button id="green_cta">Nous trouver →</button>
        </NavLink>
      </div>
    </body>
  );
}

export default Home;
