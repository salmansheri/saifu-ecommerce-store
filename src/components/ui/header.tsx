"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { Heart, Search, ShoppingCart, TabletSmartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Button } from "./button";
import MainNav from "./navigation/main-nav";
import MobileNav from "./navigation/mobile-nav";
import { Separator } from "./separator";
import { ModeToggle } from "./theme/mode-toggle";
import { categories } from "@/lib/constants/data";
import CategorySwiper from "./swiper/category-swiper";

const Header = () => {
  const router = useRouter();
  const currentUser = useUser();
  const [query, setQuery] = useState<string>("");

  const onSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      const encodedSearchQuery = encodeURI(query);

      router.push(`/search?query=${encodedSearchQuery}`);
    },
    [router, query]
  );
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-800">
      {/* FIRST  */}
      <div className="lg:px-40 md:px-10 px-5 h-10 font-light text-xs hidden lg:flex items-center w-full gap-x-5 pl-2">
        <Link href="/">Offers</Link>
        <Link href="/">Fanbook</Link>
        <Link href="/" className="flex items-center gap-x-2">
          <TabletSmartphone className="h-4 w-4" />
          Download App
        </Link>
        <Link href="/">TriBe Membership</Link>
      </div>
      {/* SECOND  */}
      <div className="lg:px-36 md:px-32 px-2 flex h-16 shadow-md justify-between items-center">
        <div className="flex gap-x-5 h-full items-center">
          <MobileNav />
          <Link href="/">
            <Image
              src="/images/logo/logo.svg"
              alt="logo"
              width={150}
              height={150}
              className="hidden md:block"
            />
            <Image
              src="/images/logo/mobile-logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="md:hidden"
            />
          </Link>
          <nav className="h-full items-center flex">
            <MainNav />
          </nav>
        </div>
        <div className="flex relative items-center ">
          <Search className="  absolute left-1 h-6 w-6 font-light text-gray-500" />
          <form onSubmit={(event) => onSearch(event)}>
            <input
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              className="hidden md:block pl-8 placeholder:text-xs font-light p-2 focus:outline-none rounded-md transition active:bg-white focus:ring-1 focus:ring-neutral-700"
              placeholder="Search by Product, category or collection"
            />
          </form>

          <Separator orientation="vertical" className="border border-black" />
          {!currentUser && (
            <Button
              variant="ghost"
              className="hidden md:flex"
              onClick={() => {
                router.push("/sign-in");
              }}
            >
              Login
            </Button>
          )}

          <div className="flex space-x-2 pl-10 items-center">
            <Button size="icon" variant="ghost">
              <Heart />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => router.push("/cart")}
            >
              <ShoppingCart />
            </Button>
            <ModeToggle />
            <div className="hidden md:block">
              <UserButton afterSignOutUrl="/sign-in" />
            </div>
          </div>
        </div>
      </div>
      {/* THIRD  */}
      <div className="hidden lg:px-40 md:px-32 px-10 h-20 lg:flex items-center justify-between text-xl">
        {categories.map((category) => (
          <Link href={category.href} key={category.id}>
            {category.title}
          </Link>
        ))}
      </div>
      <div className=" px-5 h-20 md:hidden flex items-center justify-between text-xl my-10">
        <CategorySwiper />
      </div>
    </header>
  );
};

export default Header;
