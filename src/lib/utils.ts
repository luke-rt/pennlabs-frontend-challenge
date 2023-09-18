import { Course } from "./types";
import courses from "../data/courses.json";

export const getId = (course: Course) => (
  `${course.dept}${course.number}`
);

export const getCourseById = (courseId: string) => {
  return courses.filter((course: Course) => getId(course) === courseId)[0];
}
