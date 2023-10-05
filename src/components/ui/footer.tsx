import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-screen w-full bg-slate-950 text-white">
      <div className="py-20 lg:px-38 md:px-28 px-10">
        <div className="p-2 flex">
          <div>
            <h2 className="text-primary font-bold text-2xl">Bewakoof</h2>
            <p className="font-light text-base mt-5 text-primary uppercase">
              customer service
            </p>
            <div>
              <Link href=""></Link>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
