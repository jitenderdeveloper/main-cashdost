import React, { useEffect, useState } from "react";
import { FiLock, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { URL_LINK } from "../Secure/Helper";
import { Link, useNavigate } from "react-router-dom";

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
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
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
          let AllLogin = result.user;
          if (!AllLogin) {
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
            const local = localStorage.setItem(
              "user_data",
              JSON.stringify(AllLogin)
            );
            toast.success(`Hey ${AllLogin.username} Welcome to Cashdost`, {
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
              nevigate("/user-profile");
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
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="forgot">
          <Link to="/profile/send-mail">Forgot Password</Link>
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
