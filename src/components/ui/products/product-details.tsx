"use client";

import { ProductType } from "@/lib/types";
import { formatter } from "@/lib/utils";
import React from "react";
import { Button } from "../button";
import { Heart, ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
interface ProductDetailsProps {
  data: ProductType;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  const { addItem } = useCart();

  const onAdd = () => {
    if (!data) {
      return;
    }

    addItem(data);
  };
  return (
    <div className="flex-1">
      <div className="p-6 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p>{data.category.name}</p>
        <p className="text-4xl font-bold">{formatter.format(data.price)}</p>
        <p>{data.size.name}</p>
        <div
          className="h-9 w-9 rounded-full"
          style={{
            backgroundColor: data.color.value,
          }}
        ></div>
        <div className="flex items-center gap-x-2">
          <Button onClick={onAdd} type="button">
            <ShoppingBag />
            Add To Bag
          </Button>
          <Button variant="ghost">
            <Heart />
            Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
