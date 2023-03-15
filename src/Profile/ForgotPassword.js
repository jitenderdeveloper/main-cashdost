import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { URL_LINK } from "../Secure/Helper";
import { useNavigate, useParams } from "react-router-dom";

function ForgotPassword() {
  const [password, setPassword] = useState(" ");
  const [password_confirmation, setPassword_Confirmation] = useState(" ");

  let params = useParams();
  const { id, token } = params;
  // console.log("param data ->", params);
  const nevigate = useNavigate()
  const ForgotHandler = () => {
    const allData = {
      password: password,
      password_confirmation: password_confirmation,
    };
    fetch(`${URL_LINK}/user/password-forgot/${id}/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("forgot password ->", result);
        if (!result) {
          toast.error(result.message, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.success(result.message, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {
            nevigate('/user-profile-authorization')
          }, 2000);
        }
      });
  };
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row m-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="form_data">
            <div className="form_size">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="slider-banner">
                    <img src="../assets/image/login-img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center">
                  <div className="form-data forgot-password">
                    <div className="form-heading text-center">
                      <h5>Forgot Your Password</h5>
                    </div>
                    <div className="form-input">
                      <div className="form">
                        <div className="input-fields">
                          <span className="icon">
                            <FiLock />
                          </span>
                          <input
                            type="passwrod"
                            placeholder="New Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="input-fields">
                          <span className="icon">
                            <FiLock />
                          </span>
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            onChange={(e) =>
                              setPassword_Confirmation(e.target.value)
                            }
                          />
                        </div>
                        <div className="input-fields submit-btn">
                          <button
                            type="button"
                            className="btn"
                            onClick={ForgotHandler}>
                            Updated
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default ForgotPassword;
