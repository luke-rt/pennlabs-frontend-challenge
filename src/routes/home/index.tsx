import { useParams } from "react-router-dom";
import Preview from '../../components/Preview/Preview';
import courses from "../../data/courses.json";
import Courses from "../../components/Courses/Courses";
import Nav from "../../components/Nav/Nav";
import Cart from "../../components/Cart/Cart";

function Home() {
  const params = useParams();

  if(params.courseDept && params.courseNumber) {
    let courseNumber = params.courseNumber;
    let courseDept = params.courseDept;

    let course = courses.filter((course) => course.dept === courseDept && course.number === parseInt(courseNumber))[0];

    return (
      <>
        <Nav />
        <div style={{
          height: 'calc(100% - 4rem)',
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateColumns: '1fr 3fr 1fr',
        }}>
        <Courses current={`${courseDept}${courseNumber}`} />
          <Preview course={course} />
        <Cart />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Nav />
        <div style={{
          height: 'calc(100% - 4rem)',
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateColumns: '1fr 3fr 1fr',
        }}>
          <Courses current="" />
            <Preview course={courses[0]} />
          <Cart />
        </div>
      </>
    );
  }
}

export default Home;
