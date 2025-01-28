import Link from "next/link";
import React from "react";
import { HiSpeakerphone } from "react-icons/hi";
import { MdOutlineMessage } from "react-icons/md";

const ContactDetail = () => {
  return (
    <>
      <div className="xs:p-10 lg:p-20 text-center">
        <h1 className="xs:text-4xl lg:text-7xl mb-8 font-extrabold">
          We would love to hear from you!
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl tracking-tight text-slate-700">
          For general inquiries or questions to specific departments, please use
          one of the following options.
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-x-8 mt-10">
          <div className="border xs:p-8 lg:p-14 xs:mb-6 md:mb-0">
            <div className="w-24 h-24 flex items-center justify-center text-4xl bgYellow rounded-full mx-auto">
            <MdOutlineMessage />
            </div>
            <h4 className="mt-5 text-3xl font-semibold mb-4">Support</h4>
            <Link href={"/"} className="underline decoration-pink-500">Contact support</Link>
          </div>
          <div className="border p-14">
            <div className="w-24 h-24 flex items-center justify-center text-4xl bgYellow rounded-full mx-auto">
            <HiSpeakerphone />
            </div>
            <h4 className="mt-5 text-3xl font-semibold mb-4">Press</h4>
            <Link href={"/"} className="underline decoration-pink-500">press@apollo.io</Link>
          </div>
          
          </div>

            
          <p className="mt-10 xs:px-6 md:px-16 lg:px-24 font-medium text-lg">If you want to be removed from our prospecting database, please 
            <Link href={"/"} className="underline decoration-pink-500 text-blue-700"> submit a removal request</Link> or find more info in our <Link href={"/"} className="underline decoration-pink-500 text-blue-700">Privacy Center.</Link></p>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;
