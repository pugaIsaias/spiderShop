import React from "react";

const Course = (props) => {
  const addToCart = (newItem) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <li
      style={{
        borderStyle: "solid",
        listStyleType: "none",
        paddingBottom: "2rem",
      }}
    >
      <img src={props.banner} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <button onClick={() => addToCart(props)}>BUY</button>
    </li>
  );
};

export default Course;
