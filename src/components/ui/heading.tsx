import React from "react";

interface HeadingProps {
  text: string;
  numberOfFilteredProducts: number;
}
const Heading: React.FC<HeadingProps> = ({
  text,
  numberOfFilteredProducts,
}) => {
  return (
    <h1 className="mt-10 uppercase text-2xl font-bold">
      {text} {`(${numberOfFilteredProducts})`}
    </h1>
  );
};

export default Heading;
