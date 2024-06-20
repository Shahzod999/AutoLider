"use client";
import { selectedSpecialCards } from "@/lib/features/paymentCardDataSlice";
import { useAppSelector } from "@/lib/hooks";
import { FaStar } from "react-icons/fa";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const SpecialCard = ({ color }) => {
  const specialCards = useAppSelector(selectedSpecialCards);

  return (
    <div className="specialCardContainer">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
        {specialCards.map((card, i) => (
          <SwiperSlide>
            <div className="cardHolder" key={i}>
              <div className={`cardHolder__card  ${color}`}>
                <div className="cardHolder__card__name">
                  <span>
                    Card
                    <FaStar />
                  </span>
                </div>
                <div className="cardHolder__card__numbers">
                  <span>{card.inputFirst}</span>
                  <span>{card.inputSecond}</span>
                  <span>{card.inputThird}</span>
                  <span>{card.inputDate}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialCard;
