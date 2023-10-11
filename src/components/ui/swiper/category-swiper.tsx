"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { categories } from "@/lib/constants/data";

import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategorySwiper = () => {
  const router = useRouter();
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      className="w-full cursor-pointer"
      pagination={true}
      modules={[Pagination]}
    >
      {categories.map((category) => (
        <SwiperSlide
          onClick={() => router.push(category.href)}
          key={category.id}
        >
          <div className="h-[100px] w-30 relative rounded-lg overflow-hidden">
            <Image src={category.src} alt={category.title} fill />
          </div>
          <p className="text-sm text-white text-center">{category.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySwiper;
