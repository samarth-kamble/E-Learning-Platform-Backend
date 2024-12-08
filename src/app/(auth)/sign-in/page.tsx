"use client";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-black ">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="./images/hero-2.png"
            className=" absolute inset-0 w-full h-full object-cover"
          />
        </aside>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to TechNest
            </h1>

            <p className="mt-4 leading-relaxed text-gray-400">
              Quick, secure access to your personalized shopping experience.
              AI-powered authentication with multiple login options and
              intelligent security checks.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <Label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-200"
                >
                  Email
                </Label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-700 bg-gray-900 text-sm text-gray-200 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <Label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-200"
                >
                  Password
                </Label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-700 bg-gray-900 text-sm text-gray-200 shadow-sm pr-10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button className="w-full">Sign In</Button>
              </div>
            </form>
            <Separator className="my-3 bg-gray-800" />
            <div className="w-full flex flex-col gap-y-2">
              <Button className="w-full">
                <FaGithub className="mr-2" />
                Sign in with Github
              </Button>
              <Button className="w-full">
                <FcGoogle className="mr-2" />
                Sign in with Google
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="mt-6 text-sm text-gray-600">
                Don't have Account?{" "}
                <Link href="/sign-up" className="text-blue-500 underline">
                  Create New
                </Link>
                .
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignInForm;
