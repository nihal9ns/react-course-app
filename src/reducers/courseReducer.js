import { FETCH_COURSES, ADD_COURSE, DELETE_COURSE } from "../actions/types";
const R = require("ramda");

const initialState = {
  courses: [],
  course: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_COURSE:
      return {
        ...state,
        course: action.payload.newCourse,
        courses: [...state.courses, action.payload.newCourse]
      };

    case FETCH_COURSES:
      return {
        ...state,
        courses: R.concat(state.courses, action.payload.courses)
      };

    case DELETE_COURSE:
      const index = state.courses.findIndex(x => x.id === action.payload.id);
      state.courses.splice(index, 1);
      return {
        ...state,
        courses: [...state.courses]
      };

    default:
      return state;
  }
}
