import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function Auth() {
    const [toggle, setToggle] = useState(true)
    
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid p-0">
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
                          <button type="button" className="btn" onClick={() => setToggle(true)}>
                            Login
                          </button>
                          <button type="button" className="btn" onClick={() => setToggle(false)}>
                            Register
                          </button>
                        </div>
                        {
                            toggle ? <Login /> : <Register />
                        }
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
      </div>
    </>
  );
}

export default Auth;
