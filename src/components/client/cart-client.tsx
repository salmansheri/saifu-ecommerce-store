"use client";

import React, { useState, useEffect } from "react";
import CartCard from "../ui/cards/cart-card";
import CartPayment from "../ui/cart/cart-payment";
import useCart from "@/hooks/use-cart";
import EmptyState from "../ui/empty-state";

const CartClient = () => {
  const cart = useCart();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (cart.items.length === 0)
    return (
      <EmptyState title="Cart is Empty" subtitle="Add some product to cart" />
    );

  if (!isMounted) {
    return null;
  }

  return (
    <section className="lg:px-40 md:px-20 px-10 ">
      <h3>My Bag {cart.items.length} Items</h3>
      <div className="py-6 flex lg:flex-row flex-col gap-4 lg:gap-0">
        <div className="cart-left space-y-10">
          {cart.items.map((item) => (
            <CartCard key={item.id} data={item} />
          ))}
        </div>
        <div className="cart-right p-6">
          <CartPayment data={cart.items} />
        </div>
      </div>
    </section>
  );
};

export default CartClient;
