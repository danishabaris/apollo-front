import Link from "next/link";
import React from "react";

const Faq = () => {
  return (
    <>
      <div className="pt-20 pb-20 bg-repeat bg-cover bg-bottom bg-[url('/images/bg.54678e5c.svg')]">
        <div className="xs:px-6 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl mb-8 font-medium">
              Get your next meeting in a matter of minutes.
            </h1>
            <Link
              className="group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-lg focus:outline-none ring-slate-200 bg-black text-white hover:text-white hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 text-center"
              variant="outline"
              color="slate"
              href="/sign-up"
            >
              Sign up for Free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
