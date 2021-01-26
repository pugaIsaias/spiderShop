import classes from "-/Toolbar.module.css";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <nav>
        <NavItems />
      </nav>
    </header>
  );
};

export default toolbar;
