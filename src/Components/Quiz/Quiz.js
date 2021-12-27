import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";

import "./Quiz.css";

export default class Quiz extends Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: String,
      answers: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/questions")
      .then((res) => {
        this.setState({ title: res.data.question.question_body });
        this.setState({ answers: res.data.question.question_answers });
        console.log(this.state);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("component mounted with a state:");
  }

  onSubmit(e) {
    e.preventDefault();

    const answer = e.answer;
    console.log(e.target);

    
    axios
      .post("http://localhost:4000/questions/nextQuestion", answer)
      .then((res) => {
        this.setState({
          title: res.data.question.question_body,
          answers: res.data.question.question_answers,
        });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("gotten a new set of questions:");
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
                {this.state.title}
              </h1>
              <div className="text-secondary rounded" id="question-answers">
                <form className="w-100" onSubmit={this.onSubmit}>
                  <div className="bg-white p-5 rounded">
                    {this.state.answers.map((answer, i) => {
                      console.log("Entered");
                      // Return the element. Also pass key
                      return <QuestionAnswer key={answer} answer={answer} />;
                    })}
                  </div>
                  <input
                    type="submit"
                    className="my-4 btn color-secondary"
                    value="Следующий вопрос"
                  />
                </form>
              </div>
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
