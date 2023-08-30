import React from 'react'
import DashboardHeader from '../../../components/dashboar/layout/DashboardHeader'
import WithdrawMoney from "../../../components/dashboar/shop/WithdrawMoney";
import DashboardSideBar from '../../../components/dashboar/layout/DashboardSideBar';

const ShopWithDrawMoneyPage = () => {
  return (
    <div>
    <DashboardHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] 800px:w-[330px]">
        <DashboardSideBar active={7} />
      </div>
       <WithdrawMoney />
    </div>
  </div>
  )
}

export default ShopWithDrawMoneyPage