import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AllStores from "./Page/AllStores";
import EmailVerify from "./Page/Verify";
import Home from "./Page/Home";
import TodayDeals from "./Page/TodayDeals";
import TopOffers from "./Page/TopOffers";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/AllStores" element={<AllStores />} />
        <Route path="/EmailVerify" element={<EmailVerify />} />

        <Route path="/TodayDeals" element={<TodayDeals />} />
        <Route path="/TopOffers" element={<TopOffers />} />
      </Routes>
    </>
  );
}

export default App;
