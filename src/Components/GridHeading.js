import React from "react";
import { Link } from "react-router-dom";

function GridHeading(props) {
  return (
    <>
      <div className="row mb-5">
        <div className="col-12 ">
          <div className="deals-heading">
            <h4>{props.title}</h4>
            <Link to={props.link}>View All</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridHeading;
