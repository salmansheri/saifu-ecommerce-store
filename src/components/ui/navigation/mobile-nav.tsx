"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import { Button } from "../button";
import { AlignLeft } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Separator } from "../separator";
import { routes } from "@/lib/constants/data";
import Link from "next/link";

const MobileNav = () => {
  const session = useUser();
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="secondary">
            <AlignLeft />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <h1 className="uppercase mb-5 font-semibold text-3xl">Welcome</h1>
          <div className="flex gap-x-3 text-2xl items-center flex-row font-semibold">
            <UserButton afterSignOutUrl="/sign-in" />
            {`${session.user?.firstName} ${session.user?.lastName}`}
          </div>
          <Separator className="my-10" />
          <div className="flex flex-col gap-y-3">
            {routes.map((route) => (
              <Link href={route.href} key={route.id}>
                {route.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
