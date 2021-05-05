import React from "react";
import LocalStatehooks from "./LocalStatehooks";
import classes from "./ShoppingCart.module.css";

const ShoppingCart = (props) => {
  //TODO: set a state for localStorage
  // Make the state length a visual number
  // Make shoppying cart icon and counter
  const [cart, _setcart] = LocalStatehooks("cart");

  let readable = JSON.parse(cart);
  return (
    <div className={classes.cart}>
      <p>Items on Cart : {readable.length}</p>
      {readable.map((course) => (
        <div className={classes.cartItem}>
          <img className={classes.cartImg} src={course.banner} alt="" />{" "}
          {course.name}
          <p className={classes.cartItemPrice}> Q {course.price}</p>
        </div>
      ))}

      <button className={classes.cartButton}>
        Checkout Q
        {readable.reduce(
          (accumulator, currentValue) => accumulator + currentValue.price,
          0
        )}
      </button>
    </div>
  );
};

export default ShoppingCart;
