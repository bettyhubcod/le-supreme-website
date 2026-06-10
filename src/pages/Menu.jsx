import MenuCard from "../components/MenuCard";

function Menu() {
  return (
    <>
      <MenuCard nom="Burger simple" prix={1500} />
      <MenuCard nom="Chouquette crème" prix={null} />
    </>
  );
}

export default Menu;
