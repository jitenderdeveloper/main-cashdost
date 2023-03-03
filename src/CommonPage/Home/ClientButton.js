import React, { useEffect, useState } from "react";
import { FILE_UPLOADS, URL_LINK } from "../../Secure/Helper";

function ClientButton() {
  const [data, setData] = useState([]);
  const dataFilter = data.filter((val, index) => data.indexOf(val) == index);
  console.log('filter data ---->',dataFilter)
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
      <div className="row mt-5 mb-5 scroll-bar">
        <div className="col-lg-2 col-md-2 col-4">
          <button className="btn client-button" type="button">
            <img src="../assets/image/logo.png" alt="" title="Cashdost" />
          </button>
        </div>
        {data.reverse().map((val, ind) => {
          const { _id, image, title } = val;
          return (
            <div key={ind} className="col-lg-2 col-md-2 col-4">
              <button className="btn client-button" type="button">
                <img src={`${FILE_UPLOADS}/${image}`} alt="" title={title} />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ClientButton;
