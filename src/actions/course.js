import { FETCH_COURSES, ADD_COURSE, DELETE_COURSE } from "./types";
const { fetchCourses } = require("../graphql/queries/courseQueries");
const {
  addCourseMutation,
  deleteCourseMutation
} = require("../graphql/mutations/courseMutations");

export const getCourses = email => async dispatch => {
  // fetch courses from database
  const courses = await fetchCourses(email);
  dispatch({
    type: FETCH_COURSES,
    payload: { courses }
  });
};

export const addCourse = newCourse => async dispatch => {
  const email = "test";
  // add blog to database
  await addCourseMutation(newCourse, email);
  dispatch({
    type: ADD_COURSE,
    payload: { newCourse }
  });
};

export const deleteSingleCourse = (id, email) => async dispatch => {
  // delete blog from database
  await deleteCourseMutation(id, email);
  dispatch({
    type: DELETE_COURSE,
    payload: { id }
  });
};
