import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <div>
      <h2>Penn Course Cart</h2>
      <Link to="/checkout">
        <h3>Checkout</h3>
      </Link>
    </div>
  </nav>
);

export default Nav;
