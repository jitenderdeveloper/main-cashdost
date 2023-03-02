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

  const nevigate = useNavigate();

  const RegisterHandler = () => {
    const AllData = {
      username: username,
      email: email,
      phone: phone,
      password: password,
    };
    if (!username || !email || !phone || !password) {
      toast.error("all fields are required...", {
        theme: "light",
      });
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
          // console.log("localStorage ->", result);
          toast(result.message);
        })
        .catch((err) => {
          toast.error("Login is not working...");
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
            name=""
            id=""
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
            name=""
            id=""
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
            name=""
            id=""
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
            name=""
            id=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
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
