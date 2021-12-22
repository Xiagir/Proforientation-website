import React from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";
import "./Auth.css";

export const Login = () => {
  return (
    <Container className="mt-4 shadow my-5">
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col className="col-12 mt-4">
          <h1 className="text-center mt-4 font-weight-bold text-primary">
            Логин
          </h1>
        </Col>
        <Form
          className="mt-2 mx-md-4 p-5 text-primary"
          action="/login"
          method="POST"
        >
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            as="input"
            className="color-primary"
            type="submit"
            value="Войти"
          />
        </Form>
      </Row>
    </Container>
  );
};
