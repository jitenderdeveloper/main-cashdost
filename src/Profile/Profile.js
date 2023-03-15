import React from "react";
import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";
import MyProfile from "./MyProfile";
import ChangePassword from "./ChangePassword";
import Navbar from "../Components/Navbar";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user_data"));
  // console.log(user);

  return (
    <>
    <Navbar />
      <div className="container">
        <div className="row mt-4">
          <div className="col-12 col-data">
            <h4>Hey, {user.username} Welcome to Cashdost</h4>
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="nav-button-section">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical">
                  <button
                  className="nav-link active"
                  id="v-pills-over-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-over"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-over"
                  aria-selected="true">
                  Overview
                </button>
                <button
                  className="nav-link"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true">
                  My Profile
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false">
                  Change Password
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false">
                  Messages
                </button>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="col-lg-9 col-md-9 col-12">
            <div className="profile-data">
              <div className="tab-content" id="v-pills-tabContent">
              <div
                  className="tab-pane fade show active"
                  id="v-pills-over"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab">
                  <h6>Overview</h6>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab">
                  <MyProfile />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab">
                  <ChangePassword />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab">
                  Message
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Profile;
