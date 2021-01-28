import classes from "./Title.module.css";

const title = (props) => {
  return <h1 className={classes.h1}> {props.children}</h1>;
};

export default title;
