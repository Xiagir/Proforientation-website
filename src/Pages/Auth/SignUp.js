import React from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";

import "./Auth.css";

export const SignUp = () => {
  return (
    <Container className="bg-white mt-4 shadow">
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col className="col-12 mt-4">
          <p className="h1 text-center mt-4 font-weight-bold text-primary">
            Регистрация аккаунта
          </p>
        </Col>
        <Form
          className="mt-2 mx-1 mx-md-4 p-5 text-primary"
          method="POST"
          action="/signup"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" placeholder="Enter account name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agree on the rules" />
          </Form.Group>

          <Button
            as="input"
            className="color-primary"
            type="submit"
            value="Создать"
          />
        </Form>
      </Row>
    </Container>
  );
};
