import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { FILE_UPLOADS, URL_LINK } from "../Secure/Helper";

function TopOffers() {
  const [data, setData] = useState([]);
  const [img, setImg] = useState("");
  // console.log('product image -->', img);

  const getData = () => {
    fetch(`${URL_LINK}/best-offer`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let fetcD = result.best_offer_data;
        //   console.log('product data -->', fetcD);
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
    <Navbar />
      <div className="container">
        <div className="row mb-5 mt-4">
          {data.map((val, ind) => {
            const {_id, image} = val;
            return (
              <div key={ind} className="col-lg-3 col-md-3 col-12 mb-4">
                <Link to="">
                  <div className="top-offer-banner">
                    <img src={`${FILE_UPLOADS}/${image}`} alt="" />
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

export default TopOffers;
