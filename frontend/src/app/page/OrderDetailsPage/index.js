import React from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import UserOrderDetails from "../../components/UserOrderDetails";

const OrderDetailsPage = () => {
  return (
    <div>
        <Header />
        <UserOrderDetails />
        <Footer />
    </div>
  )
}

export default OrderDetailsPage