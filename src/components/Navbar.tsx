"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Sun, Moon } from "lucide-react";

import { buttonVariants } from "./ui/button";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 dark:bg-zinc-900/75 dark:border-zinc-700 backdrop-blur-lg transition-all">
      <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 dark:border-zinc-700">
          <Link
            href="/"
            className="flex z-40 font-semibold text-xl text-gray-800 dark:text-gray-200"
          >
            <Image
              className="rounded-md mr-2"
              src={"/img/icons/logo.png"}
              alt="Logo"
              width={30}
              height={30}
            />
            Tech<span className="text-rose-600">Nest</span>
          </Link>

          <div>
            <Link
              href="/"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Home
            </Link>
            <Link
              href="/categories"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Categories
            </Link>
            <Link
              href="/products"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Product
            </Link>
          </div>

          <div className="h-full flex items-center space-x-4 font-semibold">
            <Link
              href="/sign-up"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Sign Up
            </Link>

            <Link
              href="/sign-in"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Sign In
            </Link>

            <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-700 hidden sm:block" />

            <Link
              href="/wishlist"
              className={buttonVariants({
                size: "sm",
                className: "hidden sm:flex items-center gap-1 font-semibold",
              })}
            >
              <Heart className="ml-1.5 h-5 w-5" />
              WishList
            </Link>
            <Link
              href="/configure/upload"
              className={buttonVariants({
                size: "sm",
                className: "hidden sm:flex items-center gap-1 font-semibold",
              })}
            >
              <ShoppingBag className="ml-1.5 h-5 w-5" />
              Cart
            </Link>
            <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-700 hidden sm:block" />

            <button
              onClick={toggleTheme}
              className={buttonVariants({
                size: "sm",
                variant: "outline",
              })}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
