import React from 'react'
import Header from '../../layout/header'
import CheckoutSteps from "../../components/checkouts/CheckoutSteps";
import Checkout from "../../components/checkouts/Checkout";
import Footer from '../../layout/footer';

const CheckoutPage = () => {
  return (
    <div>
        <Header />
        <br />
        <br />
        <CheckoutSteps active={1} />
        <Checkout />
        <br />
        <br />
        <Footer />
    </div>
  )
}

export default CheckoutPage