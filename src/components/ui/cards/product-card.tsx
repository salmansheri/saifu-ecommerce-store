"use client";

import { ProductType } from "@/lib/types";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  return (
    <div
      className="h-[70vh] lg:w-[20vw]  shadow  overflow-hidden rounded-lg cursor-pointer group"
      onClick={() => router.push(`/products/product/${product.id}`)}
    >
      <div className="w-full h-[70%] relative">
        <Image
          src={product.images[0].url}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-all duration-500 ease-linear rounded-lg overflow-hidden group-hover:opacity-60"
        />
      </div>
      <div className="p-2">
        <p className="text-muted-foreground">{product.name}</p>
        <h3 className="font-semibold text-lg">Rs. {product.price}</h3>
        <p>{product.category.name}</p>
        <p>{product.color.name}</p>
        <p>{product.size.name}</p>
      </div>
    </div>
  );
};

export default ProductCard;
