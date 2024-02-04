import { useParams } from "react-router-dom";
import Preview from '../../components/Preview/Preview';
import courses from "../../data/courses.json";
import Courses from "../../components/Courses/Courses";
import Nav from "../../components/Nav/Nav";
import Cart from "../../components/Cart/Cart";

function Home() {
  const params = useParams();

  let course;
  let courseDept: string;
  let courseNumber: string;
  if(params.courseDept && params.courseNumber) {
    courseNumber = params.courseNumber;
    courseDept = params.courseDept;

    course = courses.filter((course) => course.dept === courseDept && course.number === parseInt(courseNumber))[0];

  } else {
    course = courses[0];
    courseDept = course.dept;
    courseNumber = course.number.toString();
  }
  return (
    <>
      <Nav />
      <div style={{
        height: 'calc(100% - 4rem)',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '2fr 5fr 2fr',
      }}>
      <Courses current={`${courseDept}${courseNumber}`} />
        <Preview course={course} />
      <Cart />
      </div>
    </>
  );
}

export default Home;
