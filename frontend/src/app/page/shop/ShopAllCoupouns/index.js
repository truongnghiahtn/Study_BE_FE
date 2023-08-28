import React from 'react'
import DashboardHeader from '../../../components/dashboar/layout/DashboardHeader'
import DashboardSideBar from '../../../components/dashboar/layout/DashboardSideBar'
import AllCoupons from "../../../components/dashboar/shop/AllCoupons";

const ShopAllCoupouns = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={9} />
            </div>
            <div className="w-full justify-center flex">
                <AllCoupons />
            </div>
          </div>
    </div>
  )
}

export default ShopAllCoupouns