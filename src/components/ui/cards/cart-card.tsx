"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { ProductType } from "@/lib/types";
import useCart from "@/hooks/use-cart";
import Image from "next/image";
import { formatter } from "@/lib/utils";

interface CartCardProps {
  data: ProductType;
}

const CartCard: React.FC<CartCardProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { removeItem } = useCart();

  const onRemove = (id: string) => {
    if (!id) {
      return;
    }

    removeItem(id);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="w-full  rounded-md shadow border p-6 k justify-between">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{data.name}</h3>
          <h2 className="text-medium text-3xl">
            {formatter.format(data.price)}
          </h2>
          <div className="flex gap-x-5 ">
            <div>
              <label>Size</label>
              <select>
                <option>{data.size.name}</option>
              </select>
            </div>
            <div>
              <label>Qty</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="rounded-md"
            src={data.images?.[0].url}
            alt={data.name}
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="flex flex-row mt-3">
        <div className="flex-1">
          <Button
            size="lg"
            className="w-full text-lg text-muted-foreground"
            variant="ghost"
            onClick={() => onRemove(data.id)}
          >
            Remove
          </Button>
        </div>
        <div className="flex-1">
          <Button
            size="lg"
            className="w-full text-lg text-muted-foreground"
            variant="ghost"
          >
            Move to Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
