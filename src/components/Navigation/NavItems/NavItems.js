import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css";

const navItems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link={"/"}>Courses</NavItem>
      <NavItem link={"/cart"}>Cart</NavItem>
    </ul>
  );
};

export default navItems;
