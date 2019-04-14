import React, { Component } from "react";
import AddCourse from "./AddCourse";
import Courses from "./Courses";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCourses, deleteSingleCourse } from "../actions/course";
class CourseContainer extends Component {
  componentDidMount() {
    this.props.getCourses("test");
  }

  handleDeleteCourse(id) {
    const email = "test";
    this.props.deleteSingleCourse(id, email);
  }
  render() {
    return (
      <div>
        <AddCourse />
        <Courses
          course={this.props.course.courses}
          onDelete={this.handleDeleteCourse.bind(this)}
        />
      </div>
    );
  }
}

CourseContainer.propTypes = {
  getCourses: PropTypes.func.isRequired,
  deleteSingleCourse: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getCourses, deleteSingleCourse }
)(CourseContainer);
