"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./cards/product-card";
import { ProductType } from "@/lib/types";
import { useParams } from "next/navigation";

interface ProductsProps {
  products: ProductType[];
  category?: string | null;
  color?: string | null;
  size?: string | null;
}

const Products: React.FC<ProductsProps> = ({
  products,
  category,
  color,
  size,
}) => {
  const params = useParams();
  const [gender, setGender] = useState("men");

  useEffect(() => {
    if (params.productName === "men-clothing") {
      setGender("men");
    }
    if (params.productName === "women-clothing") {
      setGender("women");
    }
    if (params.productName === "mobile-covers") {
      setGender("mobile");
    }
  }, [params.productName]);

  let filteredProducts = products.filter(
    (product) => product.gender.name === gender
  );
  // console.log(filterProducts);

  return (
    <section className="products gap-4 grid grid-cols-1 lg:grid-cols-2 p-6">
      {filteredProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
