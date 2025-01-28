import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const Works = () => {
  return (
    <>
      <div className="bgGray py-20">
        <div className="xs:px-6 lg:px-16">
          <div className="grid xs:text-center lg:text-left xs:grid-cols-1 lg:grid-cols-2 gap-x-8">
            <div className="bannerContent ">
              <h1 className="xs:text-4xl lg:text-6xl mb-8 font-extrabold">
                The fastest growing and most loved sales technology on the
                planet
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
                Apollo is a leader in Sales Intelligence & Sales Engagement on
                G2, the world’s largest and most trusted software marketplace.
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
            </div>
            <div className="">
              <Image
                src={"/images/grow.webp"}
                width={540}
                height={420}
                alt="Apollo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
