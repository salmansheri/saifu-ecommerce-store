"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

import { CategoryType, ColorType, SizeType } from "@/lib/types";
import { createUrl } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FilterProps {
  categories: CategoryType[];
  colors: ColorType[];
  sizes: SizeType[];
}

const Filter: React.FC<FilterProps> = ({ categories, colors, sizes }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className="lg:flex hidden flex-col filter sticky  left-0 top-[200px]">
      <h3 className="text-gray-500">Filter</h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          {categories?.map((category) => (
            <AccordionContent
              key={category.id}
              onClick={() => {
                const optionSearchParams = new URLSearchParams(
                  searchParams.toString()
                );
                optionSearchParams.set("category", category.name);

                const optionUrl = createUrl(pathname, optionSearchParams);
                router.replace(optionUrl, { scroll: false });
              }}
              className="cursor-pointer"
            >
              {category.name}
            </AccordionContent>
          ))}
        </AccordionItem>
        <AccordionItem value="Colors">
          <AccordionTrigger>Colors</AccordionTrigger>
          {colors?.map((color) => (
            <AccordionContent key={color.id}>
              <div className="flex flex-row flex-wrap">
                <div
                  className="h-9 w-9 rounded-full cursor-pointer"
                  style={{ backgroundColor: color.value }}
                  onClick={() => {
                    const optionSearchParams = new URLSearchParams(
                      searchParams.toString()
                    );
                    optionSearchParams.set("color", color.name);

                    const optionUrl = createUrl(pathname, optionSearchParams);
                    router.replace(optionUrl, { scroll: false });
                  }}
                ></div>
              </div>
            </AccordionContent>
          ))}
        </AccordionItem>
        <AccordionItem value="Sizes">
          <AccordionTrigger>Sizes</AccordionTrigger>
          {sizes?.map((size) => (
            <AccordionContent
              key={size.id}
              onClick={() => {
                const optionSearchParams = new URLSearchParams(
                  searchParams.toString()
                );
                optionSearchParams.set("size", size.name);

                const optionUrl = createUrl(pathname, optionSearchParams);
                router.replace(optionUrl, { scroll: false });
              }}
              className="cursor-pointer"
            >
              {size.name}
            </AccordionContent>
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;
