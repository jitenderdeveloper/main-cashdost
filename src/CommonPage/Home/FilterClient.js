import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FILE_UPLOADS, URL_LINK } from "../../Secure/Helper";
import ClientButton from "./ClientButton";
import { motion } from "framer-motion";

function FilterClient() {
  const [data, setData] = useState([]);
  const [fData, setFData] = useState([]);
  const [img, setImg] = useState("");
  const [filterData, setFilterData] = useState([]);
  // console.log("filter data -->", filterData);

  const allCategory = [
    ...new Set(
      filterData.map((val) => {
        // console.log(val);
          return val;
      })
    ),
    "All",
  ];

  const [allCate, setCate] = useState(allCategory);
  let ReverseData = allCategory.reverse();
  // console.log("data ->", allCate);

  const FilterFun = (ele) => {
    // alert(ele);
    if (ele == "All") {
      setFData(data);
    } else {
      const FinalData = data.filter((val) => {
        return val.client === ele.title;
      });
      // console.log("final data ->",FinalData);
      setFData(FinalData);
    }
  };

  const getFilterData = () => {
    fetch(`${URL_LINK}/client-button`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let fetcD = result.client_button;
        setFilterData(fetcD);
      });
  };

  useEffect(() => {
    setFData(data);
    setCate(allCategory);
  }, [data]);

  const getData = () => {
    fetch(`${URL_LINK}/product`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let fetcD = result.product_data;
        setData(fetcD);
        setImg(`${FILE_UPLOADS}/${fetcD.image}`);
      });
  };

  useEffect(() => {
    getData();
    getFilterData();
  }, []);

  return (
    <>
      <div className="container client-filter-section ">
        <ClientButton FilterFun={FilterFun} ReverseData={ReverseData}/>
        <div className="row mb-5">
          {fData?.reverse().slice(0,12).map((val, ind) => {
            const { _id, title, link, description, image, offer, client } = val;
            // console.log('image ---->', val);
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={ind}
                className="col-lg-3 col-md-3 col-12 mb-4">
                <Link to={link}>
                  <div className="slider-card">
                    <div className="card-img">
                      <img src={`${FILE_UPLOADS}/${image}`} alt="" />
                      <div className="link-live">
                        <Link to={`/product-product-details/${_id}`} title="View Product Details">
                          <FiEye />
                        </Link>
                        <a href="" title="Purchase Product">
                          <FiArrowUpRight />
                        </a>
                      </div>
                    </div>
                    <div className="card-content">
                      <h1>{title}</h1>
                      <h6>{description}</h6>
                      <h5>{offer}</h5>
                      <h5>{client}</h5>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FilterClient;
