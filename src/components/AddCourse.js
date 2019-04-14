import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCourse } from "../actions/course";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const spacing = "24";

class AddCourse extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      title: "",
      description: "",
      duration: "",
      price: "",
      prerequisites: "",
      type: "",
      level: "",
      instructor: "test"
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const newCourse = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      duration: this.state.duration,
      price: this.state.price,
      prerequisites: this.state.prerequisites,
      type: this.state.type,
      level: this.state.level,
      instructor: this.state.instructor
    };

    this.props.addCourse(newCourse);
  }
  render() {
    const { classes } = this.props;

    return (
      <div className="AddCourse">
        <h3>Add Course</h3>
        <Grid container justify="center" spacing={Number(spacing)}>
          <Grid item>
            <TextField
              label="Id"
              name="id"
              className={classes.textField}
              value={this.state.id}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Title"
              name="title"
              className={classes.textField}
              value={this.state.title}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Description"
              name="description"
              className={classes.textField}
              value={this.state.description}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Duration"
              name="duration"
              className={classes.textField}
              value={this.state.duration}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Price"
              name="price"
              className={classes.textField}
              value={this.state.price}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Pre-requisites"
              name="prerequisites"
              className={classes.textField}
              value={this.state.prerequisites}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Type"
              name="type"
              className={classes.textField}
              value={this.state.type}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Level"
              name="level"
              className={classes.textField}
              value={this.state.level}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleSubmit.bind(this)}
        >
          ADD COURSE
        </Button>
      </div>
    );
  }
}

AddCourse.propTypes = {
  addCourse: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { addCourse }
)(withStyles(styles)(AddCourse));
