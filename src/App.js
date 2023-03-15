import React from "react";
import { Route, Routes } from "react-router-dom";
import Store from "./Page/Store";
import EmailVerify from "./Page/Verify";
import Home from "./Page/Home";
import TodayDeals from "./Page/TodayDeals";
import TopOffers from "./Page/TopOffers";
import Coupons from "./Page/Coupons";
import ProductDetails from "./Page/ProductDetails";
import ForgotPassword from "./Profile/ForgotPassword";
import Profile from "./Profile/Profile";
import Authorization from "./Profile/Authorization";
import Forgot from "./Profile/Forgot";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product-store" element={<Store />} />
        <Route path="/user-email-verify" element={<EmailVerify />} />

        <Route path="/today-hot-deals" element={<TodayDeals />} />
        <Route path="/today-top-offers" element={<TopOffers />} />
        <Route path="/latest-coupouns" element={<Coupons />} />
        <Route path="/product-product-details/:id" element={<ProductDetails />} />

        <Route path="/profile/forgot-password/:id/:token" element={<ForgotPassword />} />
        <Route path="/profile/send-mail" element={<Forgot />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/user-profile-authorization" element={<Authorization />} />

      </Routes>
    </>
  );
}

export default App;
