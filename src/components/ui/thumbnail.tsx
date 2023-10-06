"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface ThumbnailProps {
  src: string;
  href?: string;
  label?: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src, href, label }) => {
  const router = useRouter();
  return (
    <div className=" flex-col hidden lg:flex">
      <div
        onClick={() => router.push(href!)}
        className="relative  h-44 w-32 cursor-pointer"
      >
        <Image src={src} alt="src" fill className="" />
      </div>
      <div className="p-6">
        <p className="text-xs text-center font-semibold">{label}</p>
      </div>
    </div>
  );
};

export default Thumbnail;
