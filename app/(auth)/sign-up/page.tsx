"use client";
import * as z from "zod";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { useToast } from "@/hooks/use-toast";
interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(50, { message: "Name must be less than 50 characters" })
      .regex(/^[a-zA-Z\s]+$/, { message: "Name can only contain letters" }),

    email: z.string().email({ message: "Invalid email address" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Password must include uppercase, lowercase, number, and special character",
        }
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUpPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsSubmitting(true);
    try {
      // Simulating an API call
      console.log("Form Data:", data);
      // Here you would typically send the data to your backend

      // Reset form after successful submission
      reset();
      toast({
        title: "Sign up successful",
        description: "You have successfully signed up",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Sign up error",
        description: "An error occurred while signing up",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-[980px] h-[700px] p-8">
        <div className="flex h-full">
          {/* Left Section: Image */}
          <div className="w-1/2 bg-gray-100 flex items-center justify-center">
            <Image
              src={SignUp}
              alt="Sign Up Visual"
              className="max-w-full h-full object-cover"
            />
          </div>

          {/* Right Section: Form */}
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <CardHeader className="px-0 pt-0">
              <CardTitle>Sign Up To Continue</CardTitle>
              <CardDescription>
                Use your email or another service to continue.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5 px-0 pb-0">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
                <div className="space-y-1">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter Your Name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
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
                <div className="space-y-1">
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    placeholder="Confirm Your Password"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full font-bold"
                  size={"lg"}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Continue"}
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
                Already have an account?&nbsp;
                <Link
                  href={"/sign-in"}
                  className="text-sky-700 hover:underline cursor-pointer"
                >
                  Sign In
                </Link>
              </p>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
