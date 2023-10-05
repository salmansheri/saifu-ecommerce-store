"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

interface CarousalProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
}

const Carousal: React.FC<CarousalProps> = ({ images, className, ...props }) => {
  return (
    <>
      <Swiper
        className={className}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {images.map((src) => (
          <SwiperSlide key={src}>
            <Image
              src={src}
              alt="images"
              fill
              className="object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousal;
