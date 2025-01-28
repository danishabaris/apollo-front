"use client";

import Image from "next/image";
import React from "react";
const features = [
  {
    id: 1,
    number: "131M",
    name: "Total Global Contacts",
    url: "/images/icon1.png",
  },
  {
    id: 2,
    number: "22M",
    name: "Total Accounts",
    url: "/images/icon2.png",
  },
  {
    id: 3,
    number: "86.8%",
    name: "Email Accuracy",
    url: "/images/icon3.png",
  },
  {
    id: 4,
    number: "15K",
    name: "Intent Signals",
    url: "/images/icon4.png",
  },
  {
    id: 5,
    number: "70M",
    name: "Contact Verified Monthly",
    url: "/images/icon5.png",
  },
];

const Features = () => {
  return (
    <>
      <div className="py-20 bg-repeat bg-cover bg-bottom bg-[url('/images/bg.54678e5c.svg')]">
        <div className="xs:px-6 lg:px-16">
          <div className="w-full max-w-5xl text-center mx-auto">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl mb-4 font-medium">
                Easily explore the most accurate B2B data.
              </h1>
              <p className="mt-6 text-lg tracking-tight text-slate-700">
                We invented a different way to deliver data and it’s changing
                the game. Our 2 million user Living Data Network ensures
                unparalleled freshness and depth.
              </p>
              <div className="flex justify-center w-full mt-8">
                <a
                  className="group  ring-1  rounded-lg py-2 px-4 text-lg focus:outline-none ring-slate-200 bgYellow hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 text-center"
                  variant="outline"
                  color="slate"
                  href="/"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-4 xs:gap-y-4 lg:gap-y-16 mt-8 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 darkBlue xs:p-3 md:p-4 lg:p-10 ">
              {features.map((stat) => (
                <div
                  key={stat.id}
                  className={
                    "mx-auto max-w-xs rounded-2xl bg-white px-6 py-6 text-left xs:w-full"
                  }
                >
                  <div className="w-16 h-20 mb-8">
                    <Image src={stat.url} width={70} height={70} alt="Apollo" />
                  </div>
                  <h2
                    className={
                      "order-first text-4xl font-extrabold text-gray-900 "
                    }
                  >
                    {stat.number}
                  </h2>
                  <p className={"text-base text-black font-medium mb-2"}>
                    {stat.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex mt-10 justify-center gap-4">
              <button className="button  rounded-full py-2 px-10 bgYellow text-base font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  text-black hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600">
                Powered by our proprietary
                <span className="block w-full">LIVING DATA NETWORK</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
