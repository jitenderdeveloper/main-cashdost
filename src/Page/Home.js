import React from 'react'
import Coupons from '../CommonPage/Home/Coupons'
import FilterClient from '../CommonPage/Home/FilterClient'
import Header from '../CommonPage/Home/Header'
import HotDeals from '../CommonPage/Home/HotDeals'
import TrandingStroe from '../CommonPage/Home/TrandingStroe'

function Home() {
  return (
    <>
      <Header />
      <TrandingStroe />
      <HotDeals />
      <FilterClient />
      <Coupons />
    </>
  )
}

export default Home