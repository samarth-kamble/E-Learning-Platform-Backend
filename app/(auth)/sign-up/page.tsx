import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

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
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-[950px] h-[650px] p-8">
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
              <form className="space-y-2.5">
                <div className="space-y-1">
                  <Label>Name</Label>
                  <Input type="text" placeholder="Enter Your Name" required />
                </div>
                <div className="space-y-1">
                  <Label>Email</Label>
                  <Input type="text" placeholder="Enter Your Email" required />
                </div>
                <div className="space-y-1">
                  <Label>Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    placeholder="Confirm Your Password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full font-bold" size={"lg"}>
                  Continue
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
