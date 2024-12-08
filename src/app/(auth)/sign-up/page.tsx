"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <section className="bg-gray-1 py-10 dark:bg-dark lg:py-[35px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <Link href="/" className="mx-auto inline-block max-w-[160px]">
                  <img src="./images/logo.png" alt="logo" />
                </Link>
              </div>
              <form>
                <InputBox type="name" name="name" placeholder="Full Name" />
                <InputBox type="email" name="email" placeholder="Email" />
                <PasswordInput name="password" placeholder="Password" />
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
              <p className="mb-6 text-base text-secondary-color dark:text-dark-7">
                Coutinue With Social Account
              </p>
              <ul className="-mx-2 mb-12 flex justify-between">
                <li className="w-full px-2">
                  <a
                    href="/#"
                    className="flex h-11 items-center justify-center rounded-md bg-gray-800 hover:bg-opacity-90"
                  >
                    <FcGoogle className="w-5 h-5" />
                  </a>
                </li>
                <li className="w-full px-2">
                  <Link
                    href="/"
                    className="flex h-11 items-center justify-center rounded-md bg-white border-2 hover:bg-opacity-90"
                  >
                    <FaGithub className="w-6 h-6" />
                  </Link>
                </li>
              </ul>
              <Link
                href="/#"
                className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white"
              >
                Forget Password?
              </Link>
              <p className="text-base text-body-color dark:text-dark-6">
                <span className="pr-0.5">Already have an Account?</span>
                <Link href="/sign-in" className="text-primary hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

interface InputBoxProps {
  type: string;
  placeholder: string;
  name: string;
}

const InputBox = ({ type, placeholder, name }: InputBoxProps) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
      />
    </div>
  );
};

interface PasswordInputProps {
  placeholder: string;
  name: string;
}

const PasswordInput = ({ placeholder, name }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-6 relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute inset-y-0 right-4 flex items-center text-gray-500 dark:text-gray-300"
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};
