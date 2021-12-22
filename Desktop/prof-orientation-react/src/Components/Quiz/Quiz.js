import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import "./Quiz.css";

export default class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      title: "test",
    };
  }

  render() {
    return (
      <div id="question-body-wrapper">
        <div id="question-body-overlay"></div>
        <Row className="justify-content-center d-flex">
          <Col
            className="col-md-7 col-lg-8 col-xl-9 col-12 "
            id="questionWrapper"
          >
            <Col>
              <h1 className="questions__question text-center py-4">
                {this.props.title}
              </h1>
              <div
                className="text-secondary p-5 bg-white rounded"
                id="question-answers"
              >
                <form
                  className="w-100"
                  method="POST"
                  action="/questions/nextQuestion"
                >
                  <div
                    class="option form-check py-2 my-1 rounded-bottom"
                    id="customRadioButton"
                  >
                    <input
                      classNameass="form-check-input"
                      type="radio"
                      name="answer"
                    />
                    <label class="option-name px-2 form-check-label">
                      <p className="font-weight-light">Test Question</p>
                    </label>
                  </div>
                </form>
              </div>
              <input
                type="submit"
                className="my-4 btn color-secondary"
                value="Следующий вопрос"
              />
            </Col>
          </Col>
          <Col
            className="col-12 col-md-5 col-lg-4 col-xl-3 d-flex flex-column align-items-center"
            id="digitalMarketing"
          >
            <div id="digitalMarketingOverlay"></div>
            <div className="flex-column d-flex justify-content-center text-center m-auto">
              <div className="col my-3" id="headingDigitalMarketing">
                <h5>Секция</h5>
                <h2 className="title text-center">
                  <u>Digital Marketing</u>
                </h2>
              </div>
              <div className="col" id="testProgress m-2">
                <p className="mb-2">Тест пройден на</p>
                <div className="progress">
                  <div
                    className="progress-bar d-flex w-25 color-secondary"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    25%
                  </div>
                </div>
              </div>
              <div className="col" id="timer">
                <p>Время: 0:13 секунд</p>
              </div>
              <div
                className="col align-center d-flex row m-2"
                id="sidebarButtons"
              >
                <a className="col-12 btn color-widgets widget-btn" href="#">
                  Остановить время
                </a>
                <a className="col-12 btn color-widgets widget-btn" href="#">
                  Прекратить тест
                </a>
                <a className="col-12 btn color-widgets widget-btn" href="#">
                  FAQ по прохождению
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
