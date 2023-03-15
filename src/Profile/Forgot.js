import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMail } from "react-icons/fi";
import Navbar from "../Components/Navbar";
import { URL_LINK } from "../Secure/Helper";

function Forgot() {
  const [email, setEmail] = useState(" ");
  const ForgotHandler = () => {
    const allData = { email: email };
    fetch(`${URL_LINK}/user/forgot-mait-send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("send mail ->", result);
        if (result) {
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
          setEmail(" ");
        } else {
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
        }
      });
  };
  return (
    <>
      <Navbar />
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
                      <h5>Please enter your E-mail</h5>
                    </div>
                    <div className="form-input">
                      <div className="form">
                        <div className="input-fields">
                          <span className="icon">
                            <FiMail />
                          </span>
                          <input
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="input-fields submit-btn">
                          <button
                            type="button"
                            className="btn"
                            onClick={ForgotHandler}>
                            Forgot Password
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
export default Forgot;
