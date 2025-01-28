import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bannerSec xs:h-auto lg:h-screen bg-repeat bg-cover bg-bottom bg-[url('/images/banner-2.jpg')]">
      <div className="xs:px-6 lg:px-16">
        <div className="grid xs:text-center lg:text-left xs:grid-cols-1 lg:grid-cols-2 gap-x-8">
          <div className="bannerContent pt-20">
            <h1 className="xs:text-5xl lg:text-7xl mb-8 font-extrabold">
              Find and close your next deal
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
              Power your go-to-market with one platform. Fueled by the most
              accurate data on 210M contacts and 35M companies.
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
            <div className="mt-10 flex xs:justify-center lg:justify-start gap-x-6">
              <a
                className="group inline-flex items-center justify-center rounded-lg py-2 px-4 text-lg font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bgYellow  text-black hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 text-center"
                variant="solid"
                color="slate"
                href="/sign-up"
              >
                Sign up for free
              </a>
              <a
                className="group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-lg focus:outline-none bg-white text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 text-center"
                variant="outline"
                color="slate"
                href="/demo"
              >
                Get a Demo
              </a>
            </div>
          </div>
          <div className="pt-10 pb-14 ">
            <Image
              src={"/images/banner-image.webp"}
              width={600}
              height={600}
              alt="Apollo"
              className="xs:mx-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
