"use client";
import React from "react";
import { car } from "@/state/fakeData";
import "./currentCarImg.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CurrentCarImg = () => {
  return (
        <div className="imageOfCar">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper">
            {car.img.map((img, index) => (
              <SwiperSlide key={index} className="swiperSlide">
                <img src={img} alt="carPic" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  );
};

export default CurrentCarImg;
