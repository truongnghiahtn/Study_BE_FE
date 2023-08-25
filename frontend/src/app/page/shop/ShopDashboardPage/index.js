import React from "react";
import DashboardHeader from "../../../components/dashboar/layout/DashboardHeader";
import DashboardSideBar from "../../../components/dashboar/layout/DashboardSideBar";

const ShopDashboardPage = () => {
  return (
        <div>
          <DashboardHeader />
          <div className="flex items-center justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={1} />
            </div>
          </div>
        </div>
  );
};

export default ShopDashboardPage;