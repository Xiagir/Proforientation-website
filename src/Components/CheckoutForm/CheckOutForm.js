import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { Component } from "react";
import "./CheckOutForm.css";

export default class CheckOutForm extends Component {
  render() {
    return (
      <div id="section">
        <form action="/profile/payment" className="p-5" method="POST">
          <div className=" card px-4">
            <p className="h8 py-2">Payment Details</p>
            <div className="row gx-3">
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Person Name</p>
                  <input
                    className="payment-input mb-3"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p class="text mb-1">Card Number</p>
                  <CardNumberElement className="payment-input mb-3" />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Expiry</p>
                  <CardExpiryElement className="payment-input mb-3" />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1">CVV/CVC</p>
                  <CardCvcElement className="payment-input mb-3" />
                </div>
              </div>
              <div className="col-12">
                <div className="btn btn-primary my-3 w-100">
                  <span className="">Pay 243$</span>
                  <span className="ps-3">
                    <FontAwesomeIcon
                      className="payIcon"
                      icon={["fas", "arrow-right"]}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
/* <form action="/profile/payment" method="POST">
<script
className="stripe-button"
src="//checkout.stripe.com/v2/checkout.js"
data-key="undefined"
data-amount="100000"
data-currency="kzt"
data-name="Vladislav Mun"
data-description="Welcome to our secret shop"
data-locale="auto"
></script>
document.getElementsByClassName("stripe-button-el")[0].style.display
= 'none';
<input
className="btn main-color"
type="submit"
value="Оплатить с карты"
/> */
