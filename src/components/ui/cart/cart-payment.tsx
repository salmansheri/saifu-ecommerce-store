"use client";

import { ArrowRight, Check } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../button";
import { ProductType } from "@/lib/types";
import axios from "axios";

interface CartPaymentProps {
  data: ProductType[];
}

const CartPayment: React.FC<CartPaymentProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  const totalPrice = data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onCheckout = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productIds: data.map((product) => product.id),
      }),
    });

    const url = await response.json();

    window.location = url.url;
  };
  return (
    <div className="space-y-4">
      <div className="bg-primary w-full h-16 rounded-md text-black flex items-center p-3 justify-between cursor-pointer">
        <p>Save Extra 100 Rs with TriBe</p>
        <span>
          <ArrowRight className="arrow-right" />
        </span>
      </div>
      <div className="space-y-5">
        <p>Price Summary</p>
        <div className="w-full space-y-5">
          <div className="w-full flex items-center justify-between">
            <p>Total MRP (incl. of taxes)</p>
            <p>Rs. {totalPrice}</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p>Shipping Charges</p>
            <p>FREE</p>
          </div>

          <div className="w-full flex text-xl font-bold justify-between">
            <p>SubTotal</p>
            <p>Rs. {totalPrice}</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p>Total</p>
              <p>Rs. {totalPrice}</p>
            </div>
            <div>
              <Button className="w-full" size="lg" onClick={onCheckout}>
                <Check />
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPayment;
