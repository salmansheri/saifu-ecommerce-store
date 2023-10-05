"use client";
import { routes } from "@/lib/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-x-4 h-full">
      {routes.map((route) => (
        <Link
          className={cn(
            " px-2 inline-flex items-center h-full hover:border-b-2 border-primary ",
            pathname.includes(route.href) || route.href === pathname
              ? "border-b-2 border-primary"
              : "border-none"
          )}
          href={route.href}
          key={route.id}
        >
          {route.title}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
