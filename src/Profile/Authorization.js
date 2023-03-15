import React, { useState } from "react";
import Login from "./Login";
import Register from "../Profile/Register";
import Navbar from "../Components/Navbar";

function Authorization() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
    <Navbar />
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="form_data">
            <div className="form_size">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="slider-banner">
                    <img src="../assets/image/login-img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-data">
                    <div className="form-heading text-center">
                      <h5>Welcome to Cashdost</h5>
                    </div>
                    <div className="form-input">
                      <div className="form-button-slider">
                        <button
                          type="button"
                          className="btn"
                          onClick={() => setToggle(true)}>
                          Login
                        </button>
                        <button
                          type="button"
                          className="btn"
                          onClick={() => setToggle(false)}>
                          Register
                        </button>
                      </div>
                      {toggle ? <Login /> : <Register />}
                      <div className="or-section text-center">
                        <h5>OR</h5>
                      </div>
                    </div>
                    <div className="google-sign">
                      <div className="google ">
                        <a href="">
                          <span className="icon-img">
                            <img
                              src="../assets/image/social-media/search.png"
                              alt=""
                            />
                          </span>
                          <h5>Google</h5>
                        </a>
                      </div>
                      <div className="google">
                        <a href="">
                          <span className="icon-img">
                            <img
                              src="../assets/image/social-media/facebook.png"
                              alt=""
                            />
                          </span>
                          <h5>Facebook</h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Authorization;
