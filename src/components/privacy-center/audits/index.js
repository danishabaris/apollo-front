import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Audits = () => {
  return (
    <>
      <div className="bgGray py-20 xs:p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl mb-8 font-extrabold">
            Audits & certifications
          </h1>
          <p className="mx-auto mt-6 text-2xl leading-8 tracking-tight text-slate-700">
            Apollo mission is to create the most trusted and intelligent
            data-first engagement platform. Our robust technology and systems
            ensure customer data is fully secure. Our security is certified by
            leading 3rd-party auditors based on the most widely recognized and
            internationally accepted information security standards.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-x-8 mt-10">
            <div className="border xs:p-6 md:p-14 xs:mb-6 md:mb-0">
              <h4 className="mt-5 text-3xl font-semibold mb-4">ISO 27001</h4>

              <p className="text-lg mt-3 mb-6 tracking-tight text-slate-700">
                We are ISO 27001 certified by A-LIGN, a leading third party
                cybersecurity and compliance firm.
              </p>

              <Link
                href={"/"}
                className="flex items-center text-lg underline decoration-red-900"
              >
                Download Certifications
                <span className="bgYellow ms-2 p-2 rounded-full">
                  <FaArrowRightLong />
                </span>
              </Link>
            </div>
            <div className="border xs:p-6 md:p-14">
              <h4 className="mt-5 text-3xl font-semibold mb-4">SOC-2</h4>
              <p className="text-lg mt-3 mb-6 tracking-tight text-slate-700">
                We are SOC-2 certified by A-LIGN, a leading third-party
                cybersecurity and compliance firm. Please contact our sales team
                for access to our complete SOC-2 Report.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Audits;
