import { useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../lib/context";

const Nav = () => {
  const { cart } = useContext(CartContext);

  return(
    <nav>
      <div>
        <img src="/upenn.png" alt="UPenn Logo" />
        <h2>Penn Course Cart</h2>
        <Link to={ cart.length === 0 ? "" : "/checkout" }>
          <h3>Checkout</h3>
        </Link>
      </div>
    </nav>
  )
}

export default Nav;
