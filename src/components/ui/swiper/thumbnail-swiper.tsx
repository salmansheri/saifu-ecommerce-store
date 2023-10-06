"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ThumbnailSwiperProps extends React.HTMLAttributes<HTMLDivElement> {
  thumbnailImages?: { id: number; src: string; href: string; label: string }[];
}

const ThumbnailSwiper: React.FC<ThumbnailSwiperProps> = ({
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
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {thumbnailImages?.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.src}
              alt={image.label}
              fill
              className="object-contain object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ThumbnailSwiper;
