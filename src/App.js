import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AllStores from "./Page/AllStores";
import EmailVerify from "./Page/EmailVerify";
import Home from "./Page/Home";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/AllStores" element={<AllStores />} />
        <Route path="/EmailVerify" element={<EmailVerify />} />
      </Routes>
    </>
  );
}

export default App;
