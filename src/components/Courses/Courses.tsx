import "./Courses.css";
import courses from "../../data/courses.json";
import type { Course } from "../../lib/types";
import Card from "../Card/Card";

interface Props {
  current: string;
}

const Courses = ({current}: Props) => (
  <>
    <div id="courses">
      
      {courses.map((course: Course) => (
        <Card key={`${course.dept}${course.number}`} course={course} active={`${course.dept}${course.number}` === current} />
      ))}
    </div>
  </>
);

export default Courses;
