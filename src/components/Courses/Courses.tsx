import "./Courses.css";
import courses from "../../data/courses.json";
import type { Course } from "../../lib/types";
import Card from "../Card/Card";
import { getId } from "../../lib/utils";
import { useState } from "react";

interface Props {
  current: string;
}

const Courses = ({current}: Props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.currentTarget.value.toLowerCase());
  };

  let filteredCourses = courses;
  if (searchInput.length > 0) {
    filteredCourses = courses.filter((course: Course) => 
      course.title.toLowerCase().match(searchInput) ||
      course.description.toLowerCase().match(searchInput) ||
      course.number.toString().match(searchInput)
    );
  }

  return(
    <>
    <div id="left">
      <div id="search">
        <input
          type="text"
          placeholder="Title, Subject, Keyword"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
      <div id="courses">
        {filteredCourses.map((course: Course) => (
          <Card key={`${getId(course)}`} course={course} active={`${getId(course)}` === current} />
        ))}
      </div>
    </div>
      
    </>
  );
}

export default Courses;
