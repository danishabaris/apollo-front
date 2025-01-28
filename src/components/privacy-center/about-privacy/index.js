import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutPrivacy = () => {
  return (
    <>
      <div className="xs:px-6 lg:px-16">
        <div className="xs:p-6 md:p-20 text-center">
          <h1 className="xs:text-4xl lg:text-7xl mb-8 font-extrabold">
            Apollo privacy center
          </h1>
          <p className="mx-auto mt-6 max-w-5xl text-xl tracking-tight text-slate-700">
            Apollo cares about your data privacy. Under data privacy or
            protection laws like the GDPR or CCPA, you have certain privacy
            rights. You can exercise some of those rights by following the
            instructions below.
          </p>
        </div>
        <div className="border rounded-medium p-10 rounded-2xl mb-10">
          <h4 className="text-2xl font-extrabold">
            Opt out of Apollo - object to our processing, opt out of sales, and
            request deletion of your profile
          </h4>
          <p className="text-lg mt-3 mb-6 tracking-tight text-slate-700">
            Want to opt out of Apollo by removing your existing individual
            profile from Apollo services and opting out of our use and sharing
            of it? Click the button below. If you make this choice, all
            information contained in your profile will be removed and your
            record will become unavailable in our products as soon as possible.
            We will maintain your information on a ”suppression” list to avoid
            reactivating your profile in the future.
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
            the button below. Once we have verified your identity, you can
            specify the type of information you want, and we will send you a
            report.
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
        <div className="border rounded-medium p-10 rounded-2xl mb-10">
          <h4 className="text-2xl font-extrabold">Privacy at Apollo</h4>
          <p className="text-lg mt-3 mb-6 tracking-tight text-slate-700">
            For your reference, click these links to read our privacy policy and
            terms of use.
          </p>

          <Link
            href={"/"}
            className="flex items-center text-lg underline decoration-red-900"
          >
            Apollo privacy policy
            <span className="bgYellow ms-2 p-2 rounded-full">
              <FaArrowRightLong />
            </span>
          </Link>
          <Link
            href={"/"}
            className="flex items-center text-lg underline decoration-red-900"
          >
            Apollo terms of service
            <span className="bgYellow ms-2 p-2 rounded-full">
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
        <div className="border rounded-medium p-10 rounded-2xl mb-10">
          <h4 className="text-2xl font-extrabold">Apollo AI Policy</h4>
          <p className="text-lg mt-3 mb-6 tracking-tight text-slate-700">
            This page will be updated with the latest content on Apollo use of
            AI.
          </p>

          <Link
            href={"/"}
            className="flex items-center text-lg underline decoration-red-900"
          >
            Apollo AI policy
            <span className="bgYellow ms-2 p-2 rounded-full">
              <FaArrowRightLong />
            </span>
          </Link>
          <Link
            href={"/"}
            className="flex items-center text-lg underline decoration-red-900"
          >
            Audits
            <span className="bgYellow ms-2 p-2 rounded-full">
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutPrivacy;
