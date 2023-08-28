import React from 'react'
import DashboardHeader from '../../../components/dashboar/layout/DashboardHeader'
import DashboardSideBar from '../../../components/dashboar/layout/DashboardSideBar'
import AllProducts from "../../../components/dashboar/shop/AllProducts";

const ShopAllProducts = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={3} />
            </div>
            <div className="w-full justify-center flex">
                <AllProducts />
            </div>
          </div>
    </div>
  )
}

export default ShopAllProducts