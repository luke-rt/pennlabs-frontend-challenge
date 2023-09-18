import Button from "../../components/Button/Button";
import Cart from "../../components/Cart/Cart";
import {useNavigate, useSearchParams} from "react-router-dom";
import "./checkout.css";
import { useContext } from "react";
import { CartContext } from "../../lib/context";
import { getCourseById, getId } from "../../lib/utils";
import Card from "../../components/Card/Card";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  let [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    let queryParams = "";
    for(let course of cart) queryParams += `course=${getId(course)}&`;

    setSearchParams(queryParams);
  }

  if(!searchParams.get("course")) {
    return(
      <div className="checkout">
        <h1>Checkout</h1>
        <div className="checkout-cart">
          <Cart />
        </div>
        <Button disabled={false} onClick={handleClick}>
          Checkout
        </Button>
      </div>
    );
  } else {
    
    return(
      <div className="receipt">
        <h1>Thanks for Shopping!</h1>
        <h4>Courses</h4>
        <div className="receipt-cart">
          {searchParams.getAll("course").map(courseId =>
            <Card active={false} course={getCourseById(courseId)} />
          )}
        </div>
      </div>
    );
  }
}

export default Checkout;
