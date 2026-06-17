import MenuCard from "./MenuCard"
import { plats } from "../data/menuData"

function menuSection(){
    const platsDeLaCategorie = plats.filter(p => p.categorie === categorie)

  return (
    <section>
      <h2>{categorie}</h2>
      <div>
        {platsDeLaCategorie.map(plat => (
          <MenuCard key={plat.id} nom={plat.nom} prix={plat.prix} />
        ))}
      </div>
    </section>
  )
}
export default menuSection;