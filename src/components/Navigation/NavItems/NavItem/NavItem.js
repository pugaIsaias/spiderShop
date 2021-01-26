import classes from "-/NavItem.module.css";

const navItem = (props) => {
  return (
    <li className={classes.NavItem}>
      <a href={props.link}>{props.children}</a>
    </li>
  );
};

export default navItem;
