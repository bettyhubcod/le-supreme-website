import burger from "../assets/menu/burger_menu.jpg"
import patisserie from "../assets/menu/pastries.jpg"
import brochette from "../assets/menu/brochette.jpg"
import crepes from "../assets/menu/crepes.jpg"
import entree from "../assets/menu/entree.jpg"
import gambas from "../assets/menu/gambas.jpg"
import gateau from "../assets/menu/gateau.jpg"
import glace from "../assets/menu/glace.jpg"
import jus from "../assets/menu/jus.jpg"
import pizza from "../assets/menu/pizza.jpg"
import poulet from "../assets/menu/poulet.jpg"
import sandwich from "../assets/menu/sandwich.jpeg"
import tacos from "../assets/menu/tacos.jpg"
import shawarmas from "../assets/menu/shawarmas.jpg"
import Paninis from "../assets/menu/panini.jpg"


export const categories = [
  "Entrées", "Boissons", "Portions Gâteaux", "Crêpes", "Glaces",
  "Burgers", "Chawarmas", "Paninis", "Pizzas", "Sandwichs", "Tacos", "Poulet", "Brochettes", "Nos plats"
]

export const plats = [
  // ENTRÉES
  { id: 1, nom: "Assiettes Nems 4pcs", prix: 3000, categorie: "Entrées" },
  { id: 2, nom: "Assiettes Beignet crevettes", prix: 3000, categorie: "Entrées" },
  { id: 3, nom: "Salade niçoise", prix: 3000, categorie: "Entrées" },
  { id: 4, nom: "Salade crevettes", prix: 3000, categorie: "Entrées" },
  { id: 5, nom: "Salade caesar", prix: 3000, categorie: "Entrées" },

  // BOISSONS
  { id: 6, nom: "Gazeuses (coca/sprite/fanta/pepsi)", prix: 1000, categorie: "Boissons" },
  { id: 7, nom: "Pressée", prix: 1000, categorie: "Boissons" },
  { id: 8, nom: "Jus Bouye/Bissap", prix: 1000, categorie: "Boissons" },
  { id: 9, nom: "Jus Mangue/Fraise", prix: 1500, categorie: "Boissons" },

  // PORTIONS GÂTEAUX
  { id: 10, nom: "Spécialités (trois choco/royal/caramelo)", prix: 1600, categorie: "Portions Gâteaux" },
  { id: 11, nom: "Moka", prix: 1400, categorie: "Portions Gâteaux" },
  { id: 12, nom: "Dôme (chocolat/vanille/fraise)", prix: 1800, categorie: "Portions Gâteaux" },
  { id: 13, nom: "Gaufre Chocolat (chocolat/passion/fraise)", prix: 1000, categorie: "Portions Gâteaux" },
  { id: 14, nom: "Chouquette crème", prix: null, categorie: "Portions Gâteaux" },
  { id: 15, nom: "Chouquette choco", prix: null, categorie: "Portions Gâteaux" },

  // CRÊPES
  { id: 16, nom: "Sucrée", prix: 1500, categorie: "Crêpes" },
  { id: 17, nom: "Nutella", prix: 2000, categorie: "Crêpes" },
  { id: 18, nom: "Jambon Fromage", prix: 2500, categorie: "Crêpes" },
  { id: 19, nom: "Viande Hachée", prix: 3000, categorie: "Crêpes" },
  { id: 20, nom: "Poulet", prix: 3000, categorie: "Crêpes" },
  { id: 21, nom: "Mixte", prix: 3500, categorie: "Crêpes" },

  // GLACES
  { id: 22, nom: "Pot 1 boule", prix: 1000, categorie: "Glaces" },
  { id: 23, nom: "Pot 2 boules", prix: 1500, categorie: "Glaces" },
  { id: 24, nom: "Pot 3 boules", prix: 2000, categorie: "Glaces" },
  { id: 25, nom: "Cornet en supplément", prix: 500, categorie: "Glaces" },
  { id: 26, nom: "Milkshake", prix: 3000, categorie: "Glaces" },
  { id: 27, nom: "Boule glace supplément", prix: 1000, categorie: "Glaces" },

  // BURGERS
  { id: 28, nom: "Burger simple", prix: 1500, categorie: "Burgers" },
  { id: 29, nom: "Burger double", prix: 2500, categorie: "Burgers" },
  { id: 30, nom: "Chicken burger", prix: 2000, categorie: "Burgers" },

  // CHAWARMAS
  { id: 31, nom: "Viande", prix: 1500, categorie: "Chawarmas" },
  { id: 32, nom: "Poulet", prix: 2000, categorie: "Chawarmas" },
  { id: 33, nom: "Royal", prix: 3000, categorie: "Chawarmas" },

  // PANINIS
  { id: 34, nom: "Viande", prix: 1500, categorie: "Paninis" },
  { id: 35, nom: "Jambon", prix: 1500, categorie: "Paninis" },
  { id: 36, nom: "Poulet", prix: 2000, categorie: "Paninis" },
  { id: 37, nom: "Thon", prix: 1500, categorie: "Paninis" },

  // PIZZAS
  { id: 38, nom: "Margarita", prix: 4000, categorie: "Pizzas" },
  { id: 39, nom: "Reine", prix: 5000, categorie: "Pizzas" },
  { id: 40, nom: "Fermière", prix: 5000, categorie: "Pizzas" },
  { id: 41, nom: "Carnivore", prix: 5000, categorie: "Pizzas" },
  { id: 42, nom: "Océane", prix: 5000, categorie: "Pizzas" },
  { id: 43, nom: "Chawarma", prix: 4000, categorie: "Pizzas" },
  { id: 44, nom: "Terminus", prix: 5000, categorie: "Pizzas" },

  // SANDWICHS
  { id: 45, nom: "Viande", prix: 1500, categorie: "Sandwichs" },
  { id: 46, nom: "Merguez", prix: 1500, categorie: "Sandwichs" },
  { id: 47, nom: "Poulet", prix: 1500, categorie: "Sandwichs" },
  { id: 48, nom: "Cordon Bleu", prix: 1500, categorie: "Sandwichs" },
  { id: 49, nom: "Norvégienne", prix: 2500, categorie: "Sandwichs" },
  { id: 50, nom: "Double Norvégienne", prix: 3500, categorie: "Sandwichs" },
  { id: 51, nom: "Pacha", prix: null, categorie: "Sandwichs" },

  // TACOS
  { id: 52, nom: "Viande", prix: 1500, categorie: "Tacos" },
  { id: 53, nom: "Poulet", prix: 1500, categorie: "Tacos" },
  { id: 54, nom: "Cordon Bleu", prix: 2500, categorie: "Tacos" },
  { id: 55, nom: "Nuggets", prix: 2500, categorie: "Tacos" },
  { id: 56, nom: "Wings 2pcs", prix: 3000, categorie: "Tacos" },
  { id: 57, nom: "Pilons 2pcs", prix: 3000, categorie: "Tacos" },
  { id: 58, nom: "Mixte", prix: 3500, categorie: "Tacos" },

  // POULET
  { id: 59, nom: "Cuisse", prix: 2000, categorie: "Poulet" },
  { id: 60, nom: "Wings 2pcs", prix: 2500, categorie: "Poulet" },
  { id: 61, nom: "Pilons 2pcs", prix: 2500, categorie: "Poulet" },
  { id: 62, nom: "Nugget 6pcs", prix: 3000, categorie: "Poulet" },
  { id: 63, nom: "Cordon bleu 3pcs", prix: 3000, categorie: "Poulet" },

  // BROCHETTES
  { id: 64, nom: "Viande 2pcs", prix: 4000, categorie: "Brochettes" },
  { id: 65, nom: "Poulet 2pcs", prix: 4000, categorie: "Brochettes" },
  { id: 66, nom: "Merguez 2pcs", prix: 4000, categorie: "Brochettes" },
  { id: 67, nom: "Mixte 3pcs", prix: 5000, categorie: "Brochettes" },

  // NOS PLATS
  { id: 68, nom: "Gambas", prix: 7000, categorie: "Nos plats" },
  { id: 69, nom: "Steak", prix: 5000, categorie: "Nos plats" },
  { id: 70, nom: "½ Poulet", prix: 4000, categorie: "Nos plats" },
  { id: 71, nom: "Poulet entier", prix: 7000, categorie: "Nos plats" },
]

export const categorieInfo = {
  "Entrées": { sousTitre: "FRAÎCHES ET SAVOUREUSES", titre: "Entrées" },
  "Boissons": { sousTitre: "CHAUDES ET FRAÎCHES", titre: "Boissons" },
  "Portions Gâteaux": { sousTitre: "FAITS MAISON", titre: "Portions & Gâteaux" },
  "Crêpes": { sousTitre: "SUCRÉES ET SALÉES", titre: "Crêpes" },
  "Glaces": { sousTitre: "ONCTUEUSES ET FRAÎCHES", titre: "Glaces" },
  "Burgers": { sousTitre: "GÉNÉREUX ET GOURMANDS", titre: "Burgers" },
  "Chawarmas": { sousTitre: "SAVEURS D'ORIENT", titre: "Chawarmas" },
  "Paninis": { sousTitre: "CROUSTILLANTS ET FONDANTS", titre: "Paninis" },
  "Pizzas": { sousTitre: "AU FEU DE BOIS", titre: "Pizzas" },
  "Sandwichs": { sousTitre: "FAITS À LA COMMANDE", titre: "Sandwichs" },
  "Tacos": { sousTitre: "À LA FRANÇAISE", titre: "Tacos" },
  "Poulet": { sousTitre: "CROUSTILLANT ET JUTEUX", titre: "Poulet" },
  "Brochettes": { sousTitre: "GRILLÉES À LA PERFECTION", titre: "Brochettes" },
  "Nos plats": { sousTitre: "NOS SPÉCIALITÉS", titre: "Nos Plats" },
}

export const categorieImages = {
  "Entrées": entree,
  "Boissons": jus,
  "Portions Gâteaux": gateau,
  "Crêpes": crepes,
  "Glaces": glace,
  "Burgers": burger,
  "Chawarmas": shawarmas,
  "Paninis": Paninis,
  "Pizzas": pizza,
  "Sandwichs": sandwich,
  "Tacos": tacos,
  "Poulet": poulet,
  "Brochettes": brochette,
  "Nos plats": gambas,
}