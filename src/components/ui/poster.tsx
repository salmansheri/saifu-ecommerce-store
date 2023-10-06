"use client";

import Image from "next/image";
import React from "react";

const Poster = () => {
  return (
    <div className="mt-10">
      <h1 className="w-full text-center text-xl font-bold">
        Design of the Week
      </h1>
      <div className="h-[70vh] w-full flex">
        <div className="relative flex-1">
          <Image
            src="/images/poster.png"
            alt="poster"
            fill
            className="object-contain object-center"
          />
        </div>
        <div className="relative flex-1">
          <Image
            src="/images/poster2.png"
            alt="poster"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Poster;
