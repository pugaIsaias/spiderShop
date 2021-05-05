import React from "react";
import LocalStatehooks from "./LocalStatehooks";

const ShoppingCart = (props) => {
  //TODO: set a state for localStorage
  // Make the state length a visual number
  // Make shoppying cart icon and counter
  const [cart, setcart] = LocalStatehooks("cart");

  return (
    <>
      <p>length: {cart}</p>
    </>
  );
};

export default ShoppingCart;
