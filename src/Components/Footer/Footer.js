import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Row className="d-flex justify-content-center align-items-center p-4 w-100">
          <Col className="col-4 text-center">
            <Col>
              <h1 className="footer-brand">Bal Bilim</h1>
              <p className="heading-title">
                Когда знание становится преимуществом
              </p>
            </Col>
          </Col>
          <Col className="col-4 d-flex justify-content-center">
            <a href="" className="social-icon">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a href="" className="social-icon">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="" className="social-icon">
              <FontAwesomeIcon icon="envelope" />
            </a>
          </Col>
          <Col className="col-4 text-right">
            <p className="contacts">050016, г. Алматы. Бостандыкский район </p>
            <p className="contacts">Индустриальная, 18а</p>
            <p className="contacts">Тел: +7 (771) 517-01-22</p>
            <p className="contacts">balbilim@mail.ru</p>
          </Col>
        </Row>
      </footer>
    );
  }
}
