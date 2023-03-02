import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Auth from "./Auth";

function Navbar() {
  const nevigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user_data"));
  // console.log(user);
  const LogoutHandler = () =>{
    localStorage.clear();
    nevigate("/");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="../assets/image/logo.png" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/AllStores">
                  All Stores
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Today Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Top Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Coupons
                </a>
              </li>
            </ul>
          </div>

          {!user ? (
            <>
              <div className="signup-btn">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop">
                  Login
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="profile-icon">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <img src="../assets/image/user.png" alt="" />
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <div className="user-name">
                      <h5>Hey, {user.username}</h5>
                    </div>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Setting
                      </a>
                    </li>
                    <li className="nav-item">
                      <a type="button" className="nav-link" onClick={LogoutHandler}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* -------login-modal-section----- */}

      <Auth />
    </>
  );
}

export default Navbar;
