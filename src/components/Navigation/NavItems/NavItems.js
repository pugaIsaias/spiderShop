import classes from "-/NavIems.module.css";
import NavItem from "./NavItem/NavItem";

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
