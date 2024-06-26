"use client";
import YourCars from "@/components/yourCars/YourCars";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";

export default function page() {
  return (
    <div className="rentedCars">
      <div className="yourCars">
        <h2>Your cars</h2>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <YourCars payment={true} />
          </SwiperSlide>
          <SwiperSlide>
            <YourCars payment={false} />
          </SwiperSlide>
          <SwiperSlide>
            <YourCars payment={true} />
          </SwiperSlide>
          <SwiperSlide>
            <YourCars payment={false} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
