import React from "react";

const course = (props) => {
  return (
    <li>
      {/*<img src={props.image} >*/}
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <button>BUY</button>
    </li>
  );
};

export default course;
