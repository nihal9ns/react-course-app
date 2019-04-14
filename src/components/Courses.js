import React, { Component } from "react";
import CourseItem from "./CourseItem";
class Courses extends Component {
  deleteCourse(title) {
    this.props.onDelete(title);
  }
  render() {
    let courseItems;
    if (this.props.course) {
      courseItems = this.props.course.map(course => {
        return (
          <CourseItem
            onDelete={this.deleteCourse.bind(this)}
            key={course.id}
            course={course}
          />
        );
      });
    }

    return (
      <div className="Courses">
        <h3>List of Courses</h3>
        {courseItems}
      </div>
    );
  }
}

export default Courses;
