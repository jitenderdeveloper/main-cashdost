import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { FILE_UPLOADS, URL_LINK } from "../Secure/Helper";

function TodayDeals() {
  const [data, setData] = useState([]);
  const [img, setImg] = useState("");
  // console.log("image -->",img);

  const getData = () => {
    fetch(`${URL_LINK}/today-hot-deals`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let fetcD = result.today_deals_data;
        // console.log("product data -->", fetcD.image);
        setData(fetcD);
        // // http://localhost:8000/public/image/
          setImg(`${FILE_UPLOADS}/todaydeals/${fetcD.client_logo}`);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <Navbar />
      <div className="container mt-5 mb-5">
        <div className="row">
          {data.reverse().map((val, ind) => {
            const {_id, image, client_logo, description, link, today_offer} = val;
            return (
              <div key={ind} className="col-lg-3 col-md-3 col-12 mb-4">
                <Link to={link}>
                  <div className="slider-card">
                    <div className="image-deals">
                      <img src={`${FILE_UPLOADS}/${image}`} alt="" />
                    </div>
                    <div className="client-logo">
                      <img src={`${FILE_UPLOADS}/${client_logo}`} alt="" />
                    </div>
                    <div className="deals-content">
                      <h4>{description} </h4>
                      <h5>{today_offer}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TodayDeals;
