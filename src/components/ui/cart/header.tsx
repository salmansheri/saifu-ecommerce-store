"use client";

import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import { ModeToggle } from "../theme/mode-toggle";

interface CartHeaderProps {
  user: User | null;
}

const CartHeader: React.FC<CartHeaderProps> = ({ user }) => {
  return (
    <header className="h-20 flex lg:px-40 md:px-28 px-10 items-center justify-between">
      <Image
        className="hidden lg:block"
        src="/images/logo/logo.svg"
        alt="logo"
        width={200}
        height={200}
      />
      <div className="flex gap-x-4 items-center">
        <div>
          <p>Signed as</p>
          {user?.emailAddresses.map((email) => (
            <p key={email.id}>{email.emailAddress}</p>
          ))}
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default CartHeader;
