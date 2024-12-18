"use client";
import React, { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

import SignUp from "@/public/female_shopping_from_phone.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Zod Validation Schema
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be less than 100 characters" }),
});

const SignInPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define form type based on schema
  type LoginFormData = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      // Simulating an API call
      console.log("Login Data:", data);
      // Here you would typically send the data to your backend authentication service

      // Reset form after successful submission
      reset();
      alert("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-[950px] h-[650px] p-8">
        <div className="flex h-full">
          {/* Left Section: Image */}
          <div className="w-1/2 bg-gray-100 flex items-center justify-center">
            <Image
              src={SignUp}
              alt="Login Visual"
              className="max-w-full h-full object-cover"
            />
          </div>

          {/* Right Section: Form */}
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <CardHeader className="px-0 pt-0">
              <CardTitle>Log In To Continue</CardTitle>
              <CardDescription>
                Use your email or another services to continue.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5 px-0 pb-0">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
                <div className="space-y-1">
                  <Label>Email</Label>
                  <Input
                    type="text"
                    placeholder="Enter Your Email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label>Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter Your Password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full font-bold"
                  size={"lg"}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging In..." : "Continue"}
                </Button>
              </form>
              <Separator />
              <div className="flex flex-col gap-y-2.5">
                <Button
                  variant="outline"
                  size={"lg"}
                  className="w-full relative font-bold"
                >
                  <FcGoogle className="size-5 absolute top-2.5 left-2.5" />
                  Continue with Google
                </Button>
                <Button
                  variant="outline"
                  size={"lg"}
                  className="w-full relative font-bold"
                >
                  <FaGithub className="size-5 absolute top-2.5 left-2.5" />
                  Continue with GitHub
                </Button>
              </div>
              <p className="text-xs text-muted-foreground flex items-center justify-center">
                Don't have an account?&nbsp;
                <Link
                  href={"/sign-up"}
                  className="text-sky-700 hover:underline cursor-pointer"
                >
                  Sign Up
                </Link>
              </p>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignInPage;
