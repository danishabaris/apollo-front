"use client";

import Image from "next/image";
import React from "react";
import { FaKey } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoftAlt } from "react-icons/tfi";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2">
        <div className="bg-repeat bg-cover bg-bottom bg-[url('/images/bg.54678e5c.svg')] xs:px-10 md:px-20 lg:px-32 py-12">
          <div className="bg-white p-8">
            <h3 className="text-2xl text-center font-semibold">LOGIN</h3>

            <div className="mt-5">
              <button className="w-full button group py-2 mb-2 px-4 inline-flex items-center justify-center rounded-lg  text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border text-black hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600">
                <FcGoogle />
                <span className="block ms-3">Sign up with Google</span>
              </button>
              <button className="w-full button group py-2 mb-2 px-4 inline-flex items-center justify-center rounded-lg  text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border text-black hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600">
                <TfiMicrosoftAlt />
                <span className="block ms-3">Sign up with Microsoft</span>
              </button>
              <button className="w-full button group py-2 mb-2 px-4 inline-flex items-center justify-center rounded-lg  text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border text-black hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600">
                <FaKey />
                <span className="block ms-3">Login with your organization</span>
              </button>
            </div>

            <form className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Work Email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@apollo.com"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Password" />
                </div>
                <TextInput id="password1" type="password" required />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Keep me signed in</Label>
              </div>
              <div>
                <span>
                  Forgot your password?{" "}
                  <Link href={"/"} className="underline text-blue-600">
                    Reset it here
                  </Link>
                </span>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
        <div className="darkBlue py-20">
          <Image
            src={"/images/pipe-img2.webp"}
            width={900}
            height={700}
            alt="Apollo"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
