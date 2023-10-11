"use client";

import React, { useState, useEffect } from "react";
import BreadCrumb from "../ui/bread-crumb";
import Heading from "../ui/heading";
import Filter from "../ui/filter";
import Products from "../ui/products";
import { CategoryType, ColorType, ProductType, SizeType } from "@/lib/types";
import { useSearchParams, useParams } from "next/navigation";
import EmptyState from "../ui/empty-state";

interface ProductClientProps {
  categories: CategoryType[];
  sizes: SizeType[];
  colors: ColorType[];
  products: ProductType[];
  text: string;
}

const ProductClient: React.FC<ProductClientProps> = ({
  categories,
  colors,
  products,
  sizes,
  text,
}) => {
  const searchParams = useSearchParams();

  const params = useParams();
  const [gender, setGender] = useState("men");

  const category = searchParams.get("category");
  const size = searchParams.get("size");
  const color = searchParams.get("color");

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

  let filteredProducts = products?.filter(
    (product) => product.gender.name === gender
  );

  const numberOfFilteredProducts = filteredProducts?.length;

  if (numberOfFilteredProducts === 0) {
    return (
      <section className="min-h-screen mt-10">
        <EmptyState
          title="No Products Found!"
          subtitle="Looks Like we dont have Products in this gender category"
        />
      </section>
    );
  }

  return (
    <section className="lg:px-32 md:px-28 px-10 min-h-screen">
      <div className="">
        <BreadCrumb text={text} />
        <Heading
          numberOfFilteredProducts={numberOfFilteredProducts}
          text={text as string}
        />
      </div>
      <div className="mt-10 flex">
        <Filter sizes={sizes} colors={colors} categories={categories} />
        <Products
          category={category}
          size={size}
          color={color}
          products={products}
        />
      </div>
    </section>
  );
};

export default ProductClient;
