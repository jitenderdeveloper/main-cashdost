import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Navigation, Pagination } from "swiper";

function Header() {
  return (
    <>
      <div className="container-fluid p-0 header-section">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="row">
          <SwiperSlide className="col-lg-12 col-md-12 col-12">
            <div className="header-img">
              <img src="../assets/image/slider/s-1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="col-lg-12 col-md-12 col-12">
            <div className="header-img">
              <img src="../assets/image/slider/s-2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="col-lg-12 col-md-12 col-12">
            <div className="header-img">
              <img src="../assets/image/slider/s-4.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="col-lg-12 col-md-12 col-12">
            <div className="header-img">
              <img src="../assets/image/slider/s-5.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-lg-12 col-md-12 col-12 p-0">
            <div className="banner-img">
              <img src="../assets/image/header-banner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container p-0">
        <div className="row m-0 mt-4">
          <div className="col-lg-6 col-md-6 col-12 p-0">
            <div className="banner-img coupons-banner">
              <img src="../assets/image/coupons.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 p-0">
            <div className="banner-img coupons-banner">
              <img src="../assets/image/coupons2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
