import {
  categories,
  plats,
  categorieInfo,
  categorieImages,
} from "../data/menuData";
import "../styles/menu.css";
import { useState } from "react";

function Menu() {
  const [categorie, setCategorie] = useState("Entrées");
  const platsFiltres = plats.filter((plat) => plat.categorie === categorie);

  return (
    <main className="menu-page">
      {/* Hero */}
      <div className="menu-hero">
        <div className="part">LA CARTE</div>
        <h1>Notre menu</h1>
        <p>
          Une sélection pensée pour chaque envie — du petit-déjeuner au déjeuner
          gourmand.
        </p>
      </div>

      {/* Onglets */}
      <div className="menu-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategorie(cat)}
            className={categorie === cat ? "tab-active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image catégorie */}
      <div className="menu-content-wrapper">
      <div className="menu-categorie-header">
          <p className="menu-categorie-sous-titre">
          {categorieInfo[categorie].sousTitre}
        </p>
        <h2 className="menu-categorie-titre">
          {categorieInfo[categorie].titre}
        </h2>
        <div className="menu-categorie-image">
          {categorieImages[categorie] && (
            <img src={categorieImages[categorie]} alt={categorie} />
          )}
        </div>
      
      </div>

      {/* Plats */}
      <div className="menu-liste">
        {platsFiltres.map((plat) => (
          <div key={plat.id} className="menu-item">
            <div className="menu-item-info">
              <p className="menu-item-nom">{plat.nom}</p>
            </div>
            <p className="menu-item-prix">
              {plat.prix === null ? "Prix sur demande" : plat.prix + " F"}
            </p>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
}

export default Menu;
