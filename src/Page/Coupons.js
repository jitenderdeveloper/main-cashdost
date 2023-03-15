import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClientButton from "../CommonPage/Home/ClientButton";
import Navbar from "../Components/Navbar";
import { FILE_UPLOADS, URL_LINK } from "../Secure/Helper";

function Coupons() {
  const [data, setData] = useState([]);
  // const [img, setImg] = useState("");

  const getData = () => {
    fetch(`${URL_LINK}/tranding-coupon-offer`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let fetcD = result.coupon_data;
        // console.log("product data -->", fetcD);
        setData(fetcD);
        // // http://localhost:8000/public/image/
        // setImg(`${FILE_UPLOADS}/${fetcD.image}`);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <Navbar />
      <div className="container">
        {/* <ClientButton /> */}
        <div className="row mb-5 mt-5">
          {data?.map((val, ind) => {
            const {
              _id,
              cashback,
              description,
              logo,
              link,
              offer,
              offer_desc,
            } = val;
            return (
              <div key={ind} className="col-lg-3 col-md-3 col-12">
                <Link to="">
                  <div className="slider-card offer-card">
                    <div className="offer-content pt-2">
                      <h4>{offer}</h4>
                      <p>{offer_desc}</p>
                    </div>
                    <div className="card-img coupon-img">
                      <img src={`${FILE_UPLOADS}/${logo}`} alt="" />
                    </div>
                    <div className="card-content offer-content">
                      <h6 className="mb-2">{description.slice(0, 50)}...</h6>
                      <h5>{cashback}</h5>
                    </div>
                    <div className="card-button">
                      <a href={link} type="button">
                        Show Coupon
                      </a>
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

export default Coupons;
