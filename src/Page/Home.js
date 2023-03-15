import React from 'react'
import Coupons from '../CommonPage/Home/Coupons'
import FilterClient from '../CommonPage/Home/FilterClient'
import Header from '../CommonPage/Home/Header'
import HotDeals from '../CommonPage/Home/HotDeals'
import TopOffer from '../CommonPage/Home/TopOffer'
import TrandingStroe from '../CommonPage/Home/TrandingStroe'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <>
    <Navbar />
      <Header />
      <TrandingStroe />
      <HotDeals />
      <FilterClient />
      <TopOffer />
      <Coupons />
    </>
  )
}

export default Home