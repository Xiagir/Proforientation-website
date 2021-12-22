import React, { Component } from "react";
import "./Header.css";
import { Navbar, Container, Nav, NavDropdown, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-lg d-flex">
        <Navbar className="px-5 w-100 mx-5">
          <Row className="w-100">
            <Col className="col-12 col-md-5 d-flex justify-content-center justify-content-lg-between">
              <div className="navbar-title ml-5 text-center">
                <Link to="/">Bal Bilim</Link>
              </div>
            </Col>
            <Col className="col-12 col-md-7 d-flex align-items-center flex-wrap p-0 text-center">
              <Col className="col-md-4 col-12">
                <Nav.Link className="navbar-links nav-p my-md-4" href="/">
                  Главная
                </Nav.Link>
              </Col>
              <Col className="col-md-4 col-12">
                <Nav.Link
                  className="navbar-links nav-p my-md-4"
                  href="/profile"
                >
                  Пройти олимпиаду
                </Nav.Link>
              </Col>
              <Col className="col-md-4 col-12">
                <Nav.Link
                  className="navbar-btn navbar-links nav-p my-md-4"
                  href="/signup"
                >
                  Логин/Вход
                </Nav.Link>
              </Col>
            </Col>
          </Row>
        </Navbar>
      </Nav>
    );
  }
}
