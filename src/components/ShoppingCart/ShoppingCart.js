import classes from "./ShoppingCart.module.css";

const shoppingCart = (props) => {
  //TODO: set a state for localStorage
  // Make the state length a visual number
  // Make shoppying cart icon and counter
  const addToCart = (newItem) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return <p className={classes.NavItems}></p>;
};

export default shoppingCart;
