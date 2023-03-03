import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import GridHeading from "../../Components/GridHeading";
import { FILE_UPLOADS, URL_LINK } from "../../Secure/Helper";

function TrandingStroe() {
  const [data, setData] = useState([]);
  const [img, setImg] = useState("");

  const getData = () => {
    fetch(`${URL_LINK}/client`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let fetcD = result.client_data;
          // console.log('product data -->', fetcD);
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
        <GridHeading title="Trending Store" link="/" />
        <div className="row mb-5">
          {data
            .reverse()
            .slice(0, 4)
            .map((val, ind) => {
              const { _id, title, link, offer, image } = val;
              return (
                <div key={ind} className="col-lg-3 col-md-3 col-12">
                  <Link to={link}>
                    <div className="slider-card">
                      <div className="card-img card-logo">
                        <img src={`${FILE_UPLOADS}/${image}`} alt="" />
                        <div className="link-live">
                          <a href="" title="View Product Details">
                            <FiEye />
                          </a>
                          <a href="" title="Purchase Product">
                            <FiArrowUpRight />
                          </a>
                        </div>
                      </div>
                      <div className="card-content">
                        <h1>{title}</h1>
                        <h6>Amazon clearance Store | Upto 50% off on Fashion categories</h6>
                        <h5>{offer}</h5>
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

export default TrandingStroe;
