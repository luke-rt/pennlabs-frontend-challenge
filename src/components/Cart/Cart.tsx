import { useContext } from "react";
import type { Course } from "../../lib/types";
import Card from "../Card/Card";
import { CartContext } from "../../lib/context";
import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const title = cart.length === 7 ? "Course Cart (Full)" : "Course Cart";
  return(
    <div id="cart">
      <h4>{title}</h4>
      {cart.map((course: Course) => (
        <Card key={`${course.dept}${course.number}`} course={course} active={false} />
      ))}
    </div>
  );
}

export default Cart;
