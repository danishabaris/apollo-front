"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Demo = () => {
  return (
    <>
      <div className="bannerSec h-screen bg-repeat bg-cover bg-bottom bg-[url('/images/bg.54678e5c.svg')]">
        <div className="pt-20">
          <div className="bg-white p-10 max-w-xl text-center font-semibold mx-auto">
            <h2 className="text-5xl mb-4 text-black">See Apollo in action</h2>
            <p className="text-lg">
              We would love to show how Apollo can help you sell better.
            </p>
            <div className="mt-6">
              <form className="flex max-w-md mx-auto flex-col gap-4">
                <div>
                  <div className="mb-2 block text-left">
                    <Label htmlFor="email2" value="Company Email" />
                  </div>
                  <TextInput
                    id="email2"
                    type="email"
                    placeholder="name@apollo.com"
                    required
                    shadow
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox id="agree" />
                  <Label htmlFor="agree" className="flex">
                    I agree with the&nbsp;
                    <Link
                      href="#"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      terms and conditions
                    </Link>
                  </Label>
                </div>
                <Button type="submit" className="bgYellow">
                  Get Started
                </Button>
              </form>
              <p className="max-w-md mx-auto mt-4 text-gray-500 text-sm">
                By submitting this form, you will receive information, tips, and
                promotions from Apollo. To learn more, see our{" "}
                <Link href={"/"} className="underline text-blue-600">
                  Privacy Statement.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
