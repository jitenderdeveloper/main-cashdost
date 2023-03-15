import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import FilterSide from "../CommonPage/Store/FilterSide";
import { FILE_UPLOADS, URL_LINK } from "../Secure/Helper";
import Loader from "../Secure/Loader";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";

function Store() {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  const [fData, setFData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  // const [img, setImg] = useState("");

  const allCategory = [
    ...new Set(
      filterData.map((val) => {
        return val.title;
      })
    ),
    "All",
  ];

  const [allCate, setCate] = useState(allCategory);
  let ReverseData = allCategory.reverse();

  const FilterCate = (ele) => {
    if (ele == "All") {
      setFData(data);
    } else {
      const FinalData = data.filter((val) => {
        return val.category === ele;
      });
      // console.log("filter data -->", FinalData);

      setFData(FinalData);
    }
  };



  const getFilterData = () => {
    // setLoading(true)
    fetch(`${URL_LINK}/category`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let fetcD = result.category_data;
        setFilterData(fetcD);
        // setLoading(false)
      });
  };

  useEffect(() => {
    setFData(data);
    setCate(allCategory);
  }, [data]);

  const getData = () => {
    setLoading(true);
    fetch(`${URL_LINK}/product`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let fetcD = result.product_data;
        setData(fetcD);
        // setImg(`${FILE_UPLOADS}/${fetcD.image}`);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
    getFilterData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
    <Navbar />
      <div className="container">
        <div className="row mt-4 mb-4">
          <FilterSide ReverseData={ReverseData} FilterCate={FilterCate} data={data}/>

          <div className="col-lg-9 col-md-9 col-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="row p-0">
              {fData?.reverse().map((val, ind) => {
                const {
                  _id,
                  title,
                  link,
                  description,
                  image,
                  offer,
                  category,
                } = val;
                return (
                  <div key={ind} className="col-lg-4 col-md-4 col-12 mb-4">
                    <Link to={link}>
                      <div className="slider-card">
                        <div className="card-img">
                          <img src={`${FILE_UPLOADS}/${image}`} alt="" />
                          <div className="link-live">
                            <Link
                              to={`/product-product-details/${_id}`}
                              title="View Product Details">
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
                          <h5>{category}</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
