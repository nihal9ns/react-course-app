import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import CourseContainer from "./CourseContainer";
import Landing from "./Landing";
import About from "./About";
import store from "../store";

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/:user" component={CourseContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default AppContainer;
