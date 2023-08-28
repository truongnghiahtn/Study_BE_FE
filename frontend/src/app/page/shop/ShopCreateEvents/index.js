import React from 'react'
import DashboardHeader from '../../../components/dashboar/layout/DashboardHeader'
import CreateEvent from "../../../components/dashboar/shop/CreateEvent";
import DashboardSideBar from '../../../components/dashboar/layout/DashboardSideBar';

const ShopCreateEvents = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex items-center justify-between w-full">
      <div className="w-[330px]">
        <DashboardSideBar active={6} />
      </div>
      <div className="w-full justify-center flex">
        <CreateEvent />
      </div>
    </div>
    </div>
  )
}

export default ShopCreateEvents