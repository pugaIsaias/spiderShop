import React, { useState } from "react";

const Course = (props) => {
  const useLocalState = (localItem) => {
    const [loc, setState] = useState(localStorage.getItem(localItem));

    const setLoc = (newItem) => {
      localStorage.setItem(localItem, JSON.stringify(newItem));
      setState(newItem);
    };

    return [loc, setLoc];
  };

  const [cart, setCart] = useLocalState("cart");

  return (
    <li
      style={{
        borderStyle: "solid",
        listStyleType: "none",
        paddingBottom: "2rem",
      }}
    >
      {/*<img src={props.image} >*/}
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <button onClick={() => setCart(props)}>BUY</button>
    </li>
  );
};

export default Course;
