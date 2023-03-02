import React, { useEffect, useState } from "react";
import { FiLock, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { URL_LINK } from "../Secure/Helper";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nevigate = useNavigate();

  const LoginHandler = () => {
    const AllData = { username: username, password: password };
    if (!username || !password) {
      toast.error("all fields are required...", {
        theme: "light",
      });
    } else {
      fetch(`${URL_LINK}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(AllData),
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log("localStorage ->", result.error);
          if(result.username === username){
            const local = localStorage.setItem("user_data",JSON.stringify(result));
            window.location.reload();
          }
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
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
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
        <div className="forgot">
          <a href="">Forgot Password</a>
        </div>
        <div className="input-fields submit-btn">
          <button type="button" className="btn" onClick={LoginHandler}>
            Login
          </button>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
}

export default Login;
