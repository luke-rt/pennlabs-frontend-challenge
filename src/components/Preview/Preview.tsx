import "./Preview.css";
import { Course } from "../../lib/types";
import Button from "../Button/Button";
import { useContext } from "react";
import { CartContext } from "../../lib/context";

interface Props {
  course: Course;
}

const Preview = ({course}: Props) => {
  const { cart } = useContext(CartContext);

  if(cart.indexOf(course) > -1) {
    return(
      <section className="preview">
        <h1>{course.dept} {course.number}</h1>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <RemoveButton course={course} />
      </section>
    );
  } else {
    if(cart.length === 7) {
      return(
        <section className="preview">
          <h1>{course.dept} {course.number}</h1>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <DisabledButton />
        </section>
      );
    } else {
      return(
        <section className="preview">
          <h1>{course.dept} {course.number}</h1>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <AddButton course={course} />
        </section>
      );
    }
  }
}

const AddButton = ({course}: Props) => {
  const { cart, setCart } = useContext(CartContext);

  const handleClick = () => {
    const newCart = [...cart];
    newCart.push(course);
    setCart(newCart);
    console.log(cart);
  }

  return(
    <Button disabled={false} onClick={handleClick}>
      Add to Cart
    </Button>
  );
}

const RemoveButton = ({course}: Props) => {
  const { cart, setCart } = useContext(CartContext);

  const handleClick = () => {
    const newCart = [...cart];
    newCart.splice(newCart.indexOf(course), 1);
    setCart(newCart);
  }

  return(
    <Button disabled={false} onClick={handleClick}>
      Remove from Cart
    </Button>
  );
}

const DisabledButton = () => {
  return(
    <Button disabled onClick={() => null}>
      Cart is Full!
    </Button>
  );
}

export default Preview;
