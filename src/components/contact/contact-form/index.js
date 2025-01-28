import React from "react";
import { FaStar } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoftAlt } from "react-icons/tfi";

const ContactForm = () => {
  return (
    <>
      <div className="bgGray xs:px-10 md:px-0 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="xs:text-4xl lg:text-7xl mb-8 font-extrabold">
            Crush your sales number with Apollo
          </h1>
          <p className="mx-auto mt-6 text-2xl leading-8 tracking-tight text-slate-700">
            Free to get started, easy to add your whole sales team, commit to
            monthly or annual plans. We make it easy to get started.
          </p>

          <div className="flex xs:flex-col lg:flex-row items-center xs:justify-center lg:justify-center xs:mt-6 lg:mt-0">
            <div className="flex items-center">
              <FaStar /> <FaStar /> <FaStar /> <FaStar />
              <FaStar />
            </div>{" "}
            <span className="font-semibold text-lg py-4 ms-2">
              4.8/5 based on 7,377 reviews | GDPR Compliant
            </span>
          </div>

          <div className="">
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
    </>
  );
};

export default ContactForm;
