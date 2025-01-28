import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <>
      <div className="xs:px-6 lg:px-16">
        <div className="xs:p-6 md:p-16 lg:p-20 text-center">
          <h1 className="xs:text-4xl lg:text-5xl mb-8 font-extrabold">
            About Us
          </h1>
          <p className="mx-auto mt-6 max-w-5xl text-xl tracking-tight text-slate-700">
            Apollo cares about your data privacy. Under data privacy or
            protection laws like the GDPR or CCPA, you have certain privacy
            rights. You can exercise some of those rights by following the
            instructions below.
          </p>
        </div>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-x-8 max-w-3xl mx-auto">
          <div className="border rounded-medium p-10 rounded-2xl mb-10">
            <h4 className="text-2xl font-extrabold">Opt out of Apollo</h4>
            <p className="text-lg mt-3 mb-6 tracking-tight text-slate-700">
              Want to opt out of Apollo by removing your existing individual
              profile from Apollo services and opting out of our use and sharing
              of it? Click the button below.
            </p>

            <Link
              href={"/"}
              className="flex items-center text-lg underline decoration-red-900"
            >
              Submit opt-out request
              <span className="bgYellow ms-2 p-2 rounded-full">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
          <div className="border rounded-medium p-10 rounded-2xl mb-10">
            <h4 className="text-2xl font-extrabold">
              Request access to collected data
            </h4>
            <p className="text-lg mt-3 mb-6 tracking-tight text-slate-700">
              Want to learn about the data Apollo has collected about you? Click
              the button below. Once we have verified your identity..
            </p>

            <Link
              href={"/"}
              className="flex items-center text-lg underline decoration-red-900"
            >
              Submit information access request
              <span className="bgYellow ms-2 p-2 rounded-full">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
