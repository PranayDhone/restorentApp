import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-context";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const cartctx = useContext(CartContext);
  const numberOfCartItems = cartctx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  return (
    //NOTE-=> The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element.
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
