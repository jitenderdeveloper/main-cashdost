import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import GridHeading from "../../Components/GridHeading";
import { FILE_UPLOADS, URL_LINK } from "../../Secure/Helper";

function Coupons() {
  const [data, setData] = useState([]);
  const [img, setImg] = useState("");

  const getData = () => {
    fetch(`${URL_LINK}/coupon`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let fetcD = result.coupon_data;
        // console.log("product data -->", fetcD);
        setData(fetcD);
        // // http://localhost:8000/public/image/
        setImg(`${FILE_UPLOADS}/${fetcD.image}`);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container Tranding-section">
        <GridHeading title="Trending Coupons & Offers" />
        <div className="row mb-5">
          {data
            .reverse()
            .slice(0, 4)
            .map((val, ind) => {
              const { _id, cashback, description, logo, link, offer, offer_desc } = val;
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
                        <h6>{description}</h6>
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
