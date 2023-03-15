import React, { useEffect, useState } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import { URL_LINK } from "../../Secure/Helper";

function FilterSide({ ReverseData, FilterCate }) {
  const [client, setClient] = useState([]);

  const getClient = () => {
    fetch(`${URL_LINK}/product-client`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        let fetcD = result.client_data;
        setClient(fetcD);
      });
  };

  useEffect(() => {
    getClient();
  }, []);
  return (
    <>
      <div className="col-lg-3 col-md-3 col-12">
        <div className="inner-store-filter">
          <div className="store-heading">
            <h3>
              <FiFilter /> Filter
            </h3>
          </div>
          <div className="filter-client">
            <div className="heading-filter">
              <h4>Search</h4>
            </div>
            <form>
              <div className="search-input">
                <span className="search-icon">
                  <FiSearch />
                </span>
                <input type="text" placeholder="Product Search..." />
              </div>
            </form>
          </div>
          <div className="filter-client">
            <div className="heading-filter">
              <h4>Category</h4>
            </div>
            <ul>
              {ReverseData?.map((val, ind) => {
                return (
                  <li key={ind}>
                    <button type="button" onClick={() => FilterCate(val)}>
                      {val}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="filter-client">
            <div className="heading-filter">
              <h4>Client</h4>
            </div>
            <ul>
              {client?.map((val, ind) => {
                // console.log(val);
                const { _id, title } = val;
                return (
                  <li key={ind}>
                    <button type="button">{title}</button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="filter-client">
            <div className="heading-filter">
              <h4>Offer</h4>
            </div>
            <div className="range-handler">
              <h5>1%</h5>
              <h5>100%</h5>
            </div>
            <div className="range-filter">
              <input type="range" className="form-range" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSide;
