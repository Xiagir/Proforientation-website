import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Carousel, Col, Row, Button, Container } from "react-bootstrap";

import "./CardOverlay.css";

export default class Body extends Component {
  render() {
    return (
      <section className="d-flex">
        <div id="wrapper" className="p-0 background-overlay">
          <Carousel
            className="custom-carousel"
            controls={false}
            indicators={false}
            pause={false}
          >
            <Carousel.Item>
              <img
                className="carousel-image"
                src="https://digital.olzhassuleimenov.site/wp-content/uploads/2021/10/pexels-pixabay-414974.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="https://digital.olzhassuleimenov.site/wp-content/uploads/2021/10/pexels-olia-danilevich-4974912.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="https://digital.olzhassuleimenov.site/wp-content/uploads/2021/10/pexels-tima-miroshnichenko-7567522.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="https://digital.olzhassuleimenov.site/wp-content/uploads/2021/10/pexels-teona-swift-6913726-scaled.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="https://digital.olzhassuleimenov.site/wp-content/uploads/2021/10/pexels-mentatdgt-1319855.jpg"
              />
            </Carousel.Item>
          </Carousel>
          <Row className="d-flex" id="cardSection">
            <Col className="text-overlay col-12 col-md-12">
              <Row className="row-4 d-flex pt-5">
                <h2 className="mt-5 section-title">
                  Найди свою специальность.
                </h2>
              </Row>
              <Row className="row-4 d-flex w-100 my-1">
                <p className="section-subtitle">
                  Определи то, в чём ты силен: физика и математика, графдизайн,
                  маркетинг, биология или юриспруденция
                </p>
              </Row>
              <Row className="row-4 d-flex my-4">
                <Button className="" href="/" id="testBtn">
                  Пройти тест
                </Button>
              </Row>
            </Col>
            <div className="mt-5 cards-overlay d-flex">
              <div className="row">
                <Col className="card-extension-advantages justify-content-center col-md-3 col-lg-4 col-12 d-flex">
                  <Row className="d-flex w-100 align-center">
                    <Col className="col-12 my-3 p-0">
                      <FontAwesomeIcon icon={["fas", "calculator"]} size="5x" />
                      <h3 className="mt-4">Умная подборка вопросов</h3>
                    </Col>
                    <Col className="col-12">
                      <hr />
                    </Col>
                    <Col className="col-12 my-3">
                      <p className="cards-text">
                        Тест заточен так, чтобы найтитебе сильные стороны и
                        указать на то, чтотебя получается лучше всего.
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Col className="card-extension-advantages justify-content-center col-md-3 col-lg-4 col-12 d-flex">
                  <Row className="d-flex w-100 align-center">
                    <Col className="col-12 my-3 p-0">
                      <FontAwesomeIcon icon={["fas", "brain"]} size="5x" />
                      <h3 className="mt-4">Больше, чем просто тест</h3>
                    </Col>
                    <Col className="col-12">
                      <hr />
                    </Col>
                    <Col className="col-12 my-3">
                      <p className="cards-text">
                        Как только ты пройдешь тест, получишь список полезного
                        контента о твоспециальности
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Col className="card-extension-advantages justify-content-center col-md-3 col-lg-4 col-12 d-flex">
                  <Row className="d-flex w-100 align-center">
                    <Col className="col-12 my-3 p-0">
                      <FontAwesomeIcon icon={["fas", "chart-line"]} size="5x" />
                      <h3 className="mt-4">Точная характеристика</h3>
                    </Col>
                    <Col className="col-12">
                      <hr />
                    </Col>
                    <Col className="col-12 my-3">
                      <p className="cards-text">
                        Получи диаграмму, которая описыватвои способности по
                        каждому из предметов
                      </p>
                    </Col>
                  </Row>
                </Col>
              </div>
            </div>
          </Row>
        </div>
      </section>
    );
  }
}
