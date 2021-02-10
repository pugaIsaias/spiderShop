import React from "react";
import classes from "./Course.module.css";

const Course = (props) => {
  const addToCart = (newItem) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className={classes.Card}>
      <img src={props.banner} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <button onClick={() => addToCart(props)}>BUY</button>
    </div>
  );
};

export default Course;
