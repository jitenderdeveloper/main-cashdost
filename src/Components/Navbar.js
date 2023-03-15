import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const nevigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user_data"));
  // console.log(user);
  const LogoutHandler = () =>{
    localStorage.clear();
    nevigate("/user-profile-authorization");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="../assets/image/logo.png" />
          </Link>
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
                <NavLink className="nav-link" to="/product-store">
                  All Stores
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/today-hot-deals">
                  Today Deals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/today-top-offers">
                  Top Offers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/latest-coupouns">
                  Coupons
                </NavLink>
              </li>
            </ul>
          </div>

          {!user ? (
            <>
              <div className="signup-btn">
                <Link to="/user-profile-authorization"
                  type="button"
                  className="btn">
                  Login / Signup
                </Link>
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
                      <Link className="nav-link" to="/user-profile">
                        Profile
                      </Link>
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

      {/* <Auth /> */}
    </>
  );
}

export default Navbar;
