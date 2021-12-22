import React from "react";
import { Container } from "react-bootstrap";
import TestPayment from "../../Components/TestPayment/TestPayment";

export const UserProfile = () => {
  return (
    <div>
      <Container className="bg-white my-4 shadow">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 my-3">
            <p className="h2 text-center mt-4 font-weight-bold text-primary">
              Добро пожаловать —{" "}
            </p>
          </div>
        </div>
      </Container>
      <TestPayment></TestPayment>
    </div>
  );
};
