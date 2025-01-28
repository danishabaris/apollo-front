import React from "react";
import BlogGrid from "./blog-grid";

const Blogs = () => {
  return (
    <>
      <div className="xs:px-6 lg:px-16 xs:h-auto lg:h-auto bg-repeat bg-cover bg-bottom bg-[url('/images/banner-2.jpg')]">
        <div className="xs:p-6 md:py-16">
          <h1 className="xs:text-4xl lg:text-5xl mb-8 font-extrabold">
            Our Blogs
          </h1>
          <p className="mt-6 text-xl tracking-tight text-slate-700">
            Apollo cares about your data privacy. Under data privacy or
            protection laws like the GDPR or CCPA, you have certain privacy
            rights. You can exercise some of those rights by following the
            instructions below.
          </p>
        </div>
        <BlogGrid />
      </div>
    </>
  );
};

export default Blogs;
