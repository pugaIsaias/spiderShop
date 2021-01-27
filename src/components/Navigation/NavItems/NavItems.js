import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css";

const navItems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link={"/"}>Dashboar</NavItem>
      <NavItem link={"/about"}>About</NavItem>
      <NavItem link={"/product"}>Products</NavItem>
    </ul>
  );
};

export default navItems;
