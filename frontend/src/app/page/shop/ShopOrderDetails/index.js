import React from "react";
import DashboardHeader from "../../../components/dashboar/layout/DashboardHeader";
import Footer from "../../../layout/footer";
import OrderDetails from "../OrderDetails";

const ShopOrderDetails = () => {
  return (
    <div>
      <DashboardHeader />
      <OrderDetails />
      <Footer />
    </div>
  );
};

export default ShopOrderDetails;
