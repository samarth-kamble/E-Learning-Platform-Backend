import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { ArrowRight, Heart, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={"/"} className="flex z-40 font-semibold">
            Tech<span className="text-rose-600">Nest</span>
          </Link>

          <div className="hidden sm:flex items-center space-x-4">
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
              href="/products"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Contact
            </Link>
          </div>

          <div className="h-full flex items-center space-x-4">
            <>
              <Link
                href="/wishlist"
                className={buttonVariants({
                  size: "sm",
                  className: "hidden sm:flex items-center gap-1 cursor-pointer",
                })}
              >
                <Heart className="h-5 w-5" />
                WhishList
              </Link>
              <Link
                href="/cart"
                className={buttonVariants({
                  size: "sm",
                  className: "hidden sm:flex items-center gap-1 cursor-pointer",
                })}
              >
                <ShoppingBag className="h-5 w-5" />
                Cart
              </Link>
              <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
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
                href="/login"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Sign In
              </Link>
            </>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
