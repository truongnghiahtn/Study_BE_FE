import React from "react";
import Footer from "../../../layout/footer";
import ShopSettings from "../../../components/dashboar/shop/ShopSettings";
import DashboardHeader from "../../../components/dashboar/layout/DashboardHeader";
import DashboardSideBar from "../../../components/dashboar/layout/DashboardSideBar";

const ShopSettingsPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={11} />
        </div>
        <ShopSettings />
      </div>
    </div>
  );
};

export default ShopSettingsPage;