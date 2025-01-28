import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogDetail = () => {
  return (
    <>
      <div className="xs:px-6 lg:px-16 xs:h-auto lg:h-auto bg-repeat bg-cover bg-bottom bg-[url('/images/banner-2.JPG')]">
        <div className="xs:p-6 md:py-16">
          <h1 className="xs:text-4xl lg:text-5xl mb-8 font-extrabold">
            Blog Detail
          </h1>
          <p className="mt-6 text-xl tracking-tight text-slate-700">
            Apollo cares about your data privacy. Under data privacy or
            protection laws like the GDPR or CCPA, you have certain privacy
            rights. You can exercise some of those rights by following the
            instructions below.
          </p>
          <p className="mt-6 text-xl tracking-tight text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            neque vero animi fuga rerum sequi tempora delectus maiores corrupti
            autem, iste fugiat, natus explicabo consequuntur maxime distinctio
            dolorum repellendus ipsam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illum molestias dolor nihil modi, quae mollitia
            alias. Doloremque sunt unde doloribus aperiam amet consequuntur?
            Cupiditate tempore error exercitationem minima id magnam!
          </p>
        </div>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8">
          <div className="border rounded-medium bg-white p-6 rounded-2xl mb-10">
            <h4 className="text-2xl font-extrabold bg-gradient-to-r f from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Opt out of Apollo
            </h4>

            <Link
              href={"/"}
              className="flex items-center text-lg underline decoration-red-900"
            >
              <span className="bgYellow ms-2 p-2 rounded-full mt-5">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
          <div className="border rounded-medium bg-white p-6 rounded-2xl mb-10">
            <h4 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-violet-500  bg-clip-text text-transparent">
              Request access to collected data
            </h4>

            <Link
              href={"/"}
              className="flex items-center text-lg underline decoration-red-900"
            >
              <span className="bgYellow ms-2 p-2 rounded-full mt-5">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
          <div className="border rounded-medium bg-white p-6 rounded-2xl mb-10">
            <h4 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Opt out of Apollo
            </h4>

            <Link
              href={"/"}
              className="flex items-center text-lg underline decoration-red-900"
            >
              <span className="bgYellow ms-2 p-2 rounded-full mt-5">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
          <div className="border rounded-medium bg-white p-6 rounded-2xl mb-10">
            <h4 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Request access to collected data
            </h4>

            <Link
              href={"/"}
              className="flex items-center text-lg underline decoration-red-900"
            >
              <span className="bgYellow ms-2 p-2 rounded-full mt-5">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
