import React from "react";
import LocalStatehooks from "./LocalStatehooks";

const ShoppingCart = (props) => {
  //TODO: set a state for localStorage
  // Make the state length a visual number
  // Make shoppying cart icon and counter
  const [cart, _setcart] = LocalStatehooks("cart");

  let readable = JSON.parse(cart);
  return (
    <>
      <p>
        Items on Cart : {readable.length}
        {readable.map((course) => (
          <div>
            <img src={course.banner} alt="" /> {course.name}
          </div>
        ))}
      </p>
    </>
  );
};

export default ShoppingCart;
