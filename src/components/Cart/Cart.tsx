import { useContext } from "react";
import type { Course } from "../../lib/types";
import Card from "../Card/Card";
import { CartContext } from "../../lib/context";
import "./Cart.css";
import { getId } from "../../lib/utils";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const title = cart.length === 7 ? "Course Cart (Full)" : `Course Cart (${cart.length} c.u.)`;
  return(
    <div id="cart">
      <h4>{title}</h4>
      {cart.map((course: Course) => (
        <Card key={`${getId(course)}`} course={course} active={false} />
      ))}
    </div>
  );
}

export default Cart;
