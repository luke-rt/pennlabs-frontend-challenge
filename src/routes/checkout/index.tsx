import Button from "../../components/Button/Button";
import Cart from "../../components/Cart/Cart";
import "./checkout.css";

const Checkout = () => {
  return(
    <>
      <h1>Checkout</h1>
      <div className="cart-checkout">
        <Cart />
      </div>
      <Button disabled={false} onClick={() => null}>

      </Button>
    </>
  )
}

export default Checkout;
