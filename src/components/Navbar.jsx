import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
function Navbar() {
   const [etat,setState]=useState(false)

   

   

  return (

    <nav>

      <div>  <Link to="/">photo</Link></div>
   
      <button onClick={()=>setState(prev=>!prev)}>{etat?<X/>:<Menu/>}</button>
      {etat &&<ul >
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/galerie">Galerie</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>}
    
    </nav>

  );
}

export default Navbar;
