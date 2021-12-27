import React, { Component } from "react";
import PropTypes from "prop-types";

export default class QuestionAnswer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        className="option form-check py-2 my-1 rounded-bottom"
        id="customRadioButton"
      >
        <input className="form-check-input" type="radio" name="answer" />
        <label className="option-name px-2 form-check-label">
          <p className="font-weight-light">{this.props.answer}</p>
        </label>
      </div>
    );
  }
}
