import React, { useEffect, useState } from "react";
import { FILE_UPLOADS, URL_LINK } from "../../Secure/Helper";

function ClientButton({ ReverseData, FilterFun }) {
  return (
    <>
      <div className="row mt-5 mb-5 scroll-bar">
        {ReverseData?.map((val, ind) => {
          return (
            <div key={ind} className="col-lg-2 col-md-2 col-4">
              <button
                className="btn client-button"
                type="button"
                onClick={() => FilterFun(val)}>
                <img src={`${FILE_UPLOADS}/${val.image}`} alt="" />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ClientButton;
