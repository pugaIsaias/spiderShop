import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css";

const navItems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link={"/"}>Dashboard</NavItem>
      <NavItem link={"/about"}>About</NavItem>
      <NavItem link={"/courses"}>Courses</NavItem>
    </ul>
  );
};

export default navItems;
