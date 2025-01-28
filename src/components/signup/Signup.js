"use client";

import { Checkbox, Label } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaStar } from "react-icons/fa6";

const Signup = () => {
  return (
    <>
      <div className="pt-20 pb-20 bg-repeat bg-cover bg-bottom bg-[url('/images/bg.54678e5c.svg')]">
        <div className="xs:px-6 lg:px-16">
          <div className="max-w-2xl xs:text-center md:text-start">
            <h1 className="xs:text-4xl lg:text-7xl mb-8 font-extrabold">
              Sign up for Apollo — Free Forever
            </h1>
            <p className="mx-auto mt-6 text-2xl leading-8 tracking-tight text-slate-700">
              Find, contact, and close your ideal buyers with over 170M contacts
              and streamlined engagement workflows powered by AI.
            </p>
            <div className="flex xs:flex-col lg:flex-row items-center xs:justify-center lg:justify-start xs:mt-6 lg:mt-0">
              <div className="flex items-center">
                <FaStar /> <FaStar /> <FaStar /> <FaStar />
                <FaStar />
              </div>{" "}
              <span className="font-semibold text-lg py-4 ms-2">
                4.8/5 based on 7,377 reviews | GDPR Compliant
              </span>
            </div>
            <div className="max-w-xl">
              <div className="flex items-center gap-2 p-3 bg-white mb-4">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-base">
                  By signing up, I agree to Apollos{" "}
                  <Link href={"/"} className="font-semibold text-blue-600">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href={"/"} className="font-semibold text-blue-600">
                    Privacy Policy
                  </Link>
                  .
                </Label>
              </div>
              <div className="w-full ">
                <TextInput
                  id="email4"
                  type="email"
                  rightIcon={HiMail}
                  placeholder="Enter Your work Email"
                  required
                  className=""
                />
              </div>
              <div className="mt-5">
                <button className="button group py-4 px-9 inline-flex items-center justify-center rounded-lg ms-2  text-lg font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-black text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 xs:mb-3 md:mb-0">
                  <FcGoogle />
                  <span className="block ms-3">Sign up with Google</span>
                </button>
                <button className="button group py-4 px-9 inline-flex items-center justify-center rounded-lg ms-2  text-lg font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-black text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600">
                  <TfiMicrosoftAlt />
                  <span className="block ms-3">Sign up with Microsoft</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
