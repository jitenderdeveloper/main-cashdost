import React, { useEffect, useState } from "react";
import { TOKEN_LINK, URL_LINK } from "../Secure/Helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function MyProfile() {
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [phone, setPhone] = useState(" ");

  const nevigate = useNavigate();

  const UpdateProfile = () => {
    const allData = { username: username, email: email, phone: phone };
    if (!username || !email || !phone) {
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
      fetch(`${URL_LINK}/user/update-profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN_LINK}`,
        },
        body: JSON.stringify(allData),
      })
        .then((res) => res.json())
        .then((result) => {
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
              localStorage.clear();
              nevigate("/user-profile-authorization");
            }, 2000);
          }
        });
    }
  };

  const getData = () => {
    fetch(`${URL_LINK}/user/user-data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_LINK}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log('get data ->', result.user_data);
        const { email, phone, username } = result.user_data;
        setUsername(username);
        setEmail(email);
        setPhone(phone);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="change-password-form">
              <div className="input-fields-data">
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-fields-data">
                <label>Email</label>
                <input
                  type="text"
                  style={{ backgroundColor: "#e0e0e0" }}
                  disabled
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-fields-data">
                <label>Mobile No.</label>
                <input
                  type="text"
                  style={{ backgroundColor: "#e0e0e0" }}
                  disabled
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="input-fields-data">
                <button type="button" className="btn" onClick={UpdateProfile}>
                  Update Profile
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

export default MyProfile;
