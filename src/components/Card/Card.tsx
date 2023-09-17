import "./Card.css";
import { Course } from "../../lib/types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../lib/context";

interface Props {
  course: Course;
  active: boolean;
}

const Card = ({course, active}: Props) => {
  const { cart } = useContext(CartContext);

  const checkmark = cart.indexOf(course) > -1 ? "✓ " : "";
  return(
    <Link
      className={active ? "card active" : "card"}
      to={`/course/${course.dept}/${course.number}`}
    >
      <div>
        <h3>{checkmark}{course.dept} {course.number}</h3>
        <sub>{course.title}</sub>
      </div>
    </Link>
  );
}

export default Card;