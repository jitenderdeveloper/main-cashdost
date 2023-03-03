import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FILE_UPLOADS, URL_LINK } from "../../Secure/Helper";
import ClientButton from "./ClientButton";

function FilterClient() {
  const [data, setData] = useState([]);
  const [img, setImg] = useState("");
  console.log('image ---->',img);

  const getData = () => {
    fetch(`${URL_LINK}/product`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let fetcD = result.product_data;
          // console.log('product data -->', fetcD[0].image);
        setData(fetcD);
        // // http://localhost:8000/public/image/
        setImg(`https://cashdost-api.vercel.app/${fetcD[0].image}`);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container client-filter-section ">
        <ClientButton />
        <img src={img} alt="" />
        <div className="row mb-5">
          {data
            .reverse()
            .slice(0, 4)
            .map((val, ind) => {
              const { _id, title, link, description, image, offer } = val;
              // console.log('image ---->', image);
              return (
                <div key={ind} className="col-lg-3 col-md-3 col-12">
                  <Link to={link}>
                    <div className="slider-card">
                      <div className="card-img">
                        <img src={`https://cashdost-api.vercel.app/${image}`} alt="" />
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
                        <h6>{description}</h6>
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

export default FilterClient;
