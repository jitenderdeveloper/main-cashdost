import React, { useState } from "react";
import { FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { URL_LINK } from "../Secure/Helper";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_Confirmation] = useState("");

  const nevigate = useNavigate();

  const RegisterHandler = () => {
    const AllData = {
      username: username,
      email: email,
      phone: phone,
      password: password,
      password_confirmation: password_confirmation,
    };
    // console.log("all data ->",AllData);
    if (!username || !email || !phone || !password || !password_confirmation) {
      toast.error("all fields are required...", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (password !== password_confirmation) {
      toast.error("Password and Confirm Password doesn't match", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else {
      fetch(`${URL_LINK}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(AllData),
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log("result data ->", result.user);
          let allResult = result.user;
          // console.log("result data ->", allResult);
          if (!allResult) {
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
              nevigate("/");
            }, 2000);
          }
        })
        .catch((err) => {
          toast.error(err.message, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="form">
        <div className="input-fields">
          <span className="icon">
            <FiUser />
          </span>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-fields">
          <span className="icon">
            <FiMail />
          </span>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-fields">
          <span className="icon">
            <FiPhone />
          </span>
          <input
            type="phone"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="input-fields">
          <span className="icon">
            <FiLock />
          </span>
          <input
            type="password"
            placeholder="Password"
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
            onChange={(e) => setPassword_Confirmation(e.target.value)}
          />
        </div>
        <div className="input-fields submit-btn">
          <button type="button" className="btn" onClick={RegisterHandler}>
            SignUp
          </button>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
}

export default Register;
