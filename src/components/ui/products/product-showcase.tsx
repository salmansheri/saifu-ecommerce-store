"use client";

import { ImageType } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";

interface ProductShowCaseProps {
  images: ImageType[];
}

const ProductShowcase: React.FC<ProductShowCaseProps> = ({ images }) => {
  return (
    <div className="flex-1">
      <Tabs defaultValue={images[0].url} className="h-full flex">
        <TabsList className="grid">
          {images.map((image) => (
            <TabsTrigger value={image.url} key={image.id}>
              <Image src={image.url} alt="image" width={50} height={50} />
            </TabsTrigger>
          ))}
        </TabsList>
        {images.map((image) => (
          <TabsContent key={image.id} value={image.url}>
            <Image
              className="rounded-md object-cover object-center"
              src={image.url}
              alt="image"
              width={500}
              height={500}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ProductShowcase;
