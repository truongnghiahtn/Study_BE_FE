import React from 'react'
import CheckoutSteps from '../../components/checkouts/CheckoutSteps'
import Footer from '../../layout/footer'
import Header from '../../layout/header'
import Payment from "../../components/Payment";

const PaymentPage = () => {
  return (
    <div className='w-full min-h-screen bg-[#f6f9fc]'>
       <Header />
       <br />
       <br />
       <CheckoutSteps active={2} />
       <Payment />
       <br />
       <br />
       <Footer />
    </div>
  )
}

export default PaymentPage