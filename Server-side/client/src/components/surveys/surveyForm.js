import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validEmails from "../../../utils/validEmails";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyNew extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          label={field.label}
          name={name}
          type="text"
          component={SurveyField}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  //   if (!values.title) {
  //     errors.title = "You must provide a title";
  //   }

  //   if (!values.subject) {
  //     errors.subject = "You must provide a subject";
  //   }

  //   if (!values.body) {
  //     errors.body = "You must provide a body";
  //   }

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
