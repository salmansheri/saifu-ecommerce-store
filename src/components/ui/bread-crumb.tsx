import React from "react";

interface BreadCrumbProps {
  text: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ text }) => {
  return (
    <div className="mt-5">
      <p className="uppercase text-xs">Home / {text}</p>
    </div>
  );
};

export default BreadCrumb;
