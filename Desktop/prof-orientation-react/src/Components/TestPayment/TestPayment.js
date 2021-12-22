import React, { Component, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./TestPayment.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../CheckoutForm/CheckOutForm";
import axios from "axios";

const stripePromise = loadStripe("pk_test_A7jK4iCYHL045qgjjfzAfPxu");

export default class TestPayment extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <>
        <Container className="bg-white my-4 secondary-shadow">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col className="col-12 ml-1">
              <img
                className="img-fluid full-img-div w-100 blur"
                src="https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg"
                alt="placeholder 960"
              />
              <div
                className={
                  "paymentWrapper collapsed" + (this.state.open ? "in" : "")
                }
              >
                <Elements stripe={stripePromise}>
                  <CheckOutForm />
                </Elements>
              </div>
              <div className="full-text-div">
                <h3 className="mb-3 t">Пройти тест?</h3>
                <Button
                  className="mb-2"
                  href="#section"
                  onClick={this.toggle.bind(this)}
                >
                  Информация об оплате
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
