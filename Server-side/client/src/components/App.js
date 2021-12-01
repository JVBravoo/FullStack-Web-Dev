import React, { Component } from "React";
import { BrowserRouter, Route } from "react-router-dom"; // Contains a set of react routers and helpers specifically
import { connect } from "react-redux";
import * as actions from "../actions";
import SurveyNew from "./SurveyNew";
// around environment that uses the browsers DOM.

// BrowserRouter: Looks at the current URL and changes the set of components that are visible on the screen at any given time.
// Route: is a react component that is used to setup a rule between a certain route that a user might visit of an application
// and a set of components that will be actually visible on the screen.

// this file is responsible for all the initial view layer setup

import Header from "./Header";
import Dashboard from "./Dashboard";
const SurveyNew = () => <h1>SurveyNew</h1>;
import Landing from "./Landing";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
