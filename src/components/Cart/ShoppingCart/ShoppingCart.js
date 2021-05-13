import React from "react";
import axios from "./axios";
import LocalStatehooks from "./LocalStatehooks";
import classes from "./ShoppingCart.module.css";

const ShoppingCart = (props) => {
  const [cart, _setcart] = LocalStatehooks("cart");

  let readable = JSON.parse(cart);

  const addToCheckout = (checkoutList) => {
    for (let eachCourse of readable) {
      axios
        .post("/course", eachCourse)
        .then((response) => {
          console.log(response);
          localStorage.clear();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={classes.cart}>
      <p>Items on Cart : {readable.length}</p>

      {readable.map((course) => (
        <div className={classes.cartItem}>
          <img className={classes.cartImg} src={course.banner} alt="" />
          {course.name}
          <p className={classes.cartItemPrice}> Q {course.price}</p>
        </div>
      ))}

      <button
        className={classes.cartButton}
        onClick={() => addToCheckout(readable)}
      >
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
