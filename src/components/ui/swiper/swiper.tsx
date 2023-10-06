"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

interface CarousalProps extends React.HTMLAttributes<HTMLDivElement> {
  images?: string[];
  thumbnailImages?: { id: number; src: string; href: string; label: string }[];
}

const Carousal: React.FC<CarousalProps> = ({
  images,
  className,
  thumbnailImages,
  ...props
}) => {
  const isMobile = useMediaQuery({ query: "(min-width: 700px)" });
  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);
  return (
    <>
      <Swiper
        className={className}
        slidesPerView={isMobile ? 3 : 1}
        spaceBetween={30}
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {images?.map((src) => (
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
