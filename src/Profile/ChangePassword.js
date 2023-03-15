import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_LINK, URL_LINK } from "../Secure/Helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChangePassword() {
  const [password, setPassword] = useState(" ");
  const [password_confirmation, setPassword_Confirmation] = useState(" ");
  const nevigate = useNavigate();

  const PasswordChangeHandler = () => {
    const AllData = {
      Password: password,
      password_confirm: password_confirmation,
    };
    // console.log("pass", AllData);
    if (!password && !password_confirmation) {
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
    } else {
      fetch(`${URL_LINK}/user/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN_LINK}`,
        },
        body: JSON.stringify(AllData),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("data ->", result);
        });
    }
  };

  return (
    <>
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="change-password-form">
              <div className="input-fields-data">
                <label>New Password</label>
                <input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-fields-data">
                <label>Confirm Password</label>
                <input
                  type="text"
                  onChange={(e) => setPassword_Confirmation(e.target.value)}
                />
              </div>
              <div className="input-fields-data">
                <button
                  type="button"
                  className="btn"
                  onClick={PasswordChangeHandler}>
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ChangePassword;
