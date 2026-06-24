import { useState } from "react";
import { lieux, photos } from "../data/galerieData";
import "../styles/galerie.css";

function Galerie() {
  const [galerie, setGalerie] = useState("Tous");
  const photosFiltrees =
    galerie === "Tous" ? photos : photos.filter((p) => p.lieu === galerie);
  return (
    <>
      {/* Hero */}
      <div className="galerie-hero">
        <div className="part">GALERIE</div>
        <h1>L'esprit du Suprême</h1>
        <p>
          Bois chaud, vert sapin, lumière douce. Un cadre pensé pour ralentir.
        </p>
      </div>
      {/* onglets */}
      <div className="lieux-tabs">
        {lieux.map((l) => (
          <button
            key={l}
            onClick={() => setGalerie(l)}
            className={galerie === l ? "tab-active" : ""}
          >
            {l}
          </button>
        ))}
      </div>

      {/* affichage des photos */}
      <div className="galerie-grid">
        {photosFiltrees.map((image) => (
          <div key={image.id} className="galerie-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Galerie;
