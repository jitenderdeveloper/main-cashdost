import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { FILE_UPLOADS, URL_LINK } from "../Secure/Helper";

function ProductDetails() {
  const params = useParams();
  const [data, setData] = useState([]);
  const { _id, category, client, description, image, link, offer, title } =
    data;
  // console.log("data ->", data);

  const getData = () => {
    fetch(`${URL_LINK}/product/${params.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let fetcD = result.product_data;
        setData(fetcD);
        // setImg(`${FILE_UPLOADS}/${fetcD.image}`);
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
          <div className="col-lg-12 col-md-12 col-12">
            <div className="Details_card">
              <div className="heading-img">
                <img src={`${FILE_UPLOADS}/${image}`} alt="" />
              </div>
              <div className="product-single-content">
                <h2>{title}</h2>
                <h4>{offer}</h4>
                <div className="desc">
                  <h4>Details</h4>
                  <p>{description}</p>
                </div>
                <div className="button-section">
                  <ul>
                    <li>
                      <h5>Store</h5> <span className="span-side">{client}</span>
                    </li>
                    <li>
                      <h5>Category</h5>{" "}
                      <span className="span-side">{category}</span>
                    </li>
                  </ul>
                </div>
                <Link
                  type="button"
                  className="button_btn"
                  to={link}
                  target="_blank">
                  View All Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
