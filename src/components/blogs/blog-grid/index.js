import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const data = [
  {
    id: "1",
    title: "ISO 27001 and SOC 2 certified",
    description: "Certified by leading third-party cybersecurity auditors.",
  },
  {
    id: "2",
    title: "GDPR compliant",
    description:
      "Apollo is GDPR compliant as both a Data Processor and Data Controller.",
  },
  {
    id: "3",
    title: "Encryption in transit and at rest",
    description:
      "Both idle and active data is encrypted over public networks and in our databases.",
  },
  {
    id: "4",
    title: "Database security",
    description:
      "Databases are built with multi-layer security including encrypted passwords, two factor authentication, intrusion detection systems, and VPC with strict firewall settings.",
  },
  {
    id: "5",
    title: "Integrations security",
    description:
      "Integrated SaaS Services are authorized securely with OAuth2 and credentials are not stored for those services.",
  },
  {
    id: "6",
    title: "Privacy & safety features",
    description:
      "Custom control to enable or disable privacy-impacting features based on your needs.",
  },
  {
    id: "7",
    title: "Penetration testing",
    description:
      "Annual network and graybox application penetration tests are performed by a certified third party consultant.",
  },
  {
    id: "8",
    title: "Internal and external audits",
    description:
      "Audits are carried out, quarterly, on access control, risk, information security, IT infrastructure, and HR procedures.",
  },
];

const BlogGrid = () => {
  return (
    <>
      <div className="xs:p-8 lg:p-0 ">
        <div className="w-full ">
          <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {data.map((item) => {
              return (
                <div className="border p-10 mb-8 bg-gray-100" key={item.id}>
                  <div className="w-12 h-12 flex justify-center items-center text-2xl bgYellow rounded-full">
                    {item.id}
                  </div>
                  <h4 className="mt-10 text-2xl font-semibold mb-4">
                    {item.title}
                  </h4>
                  <p className="text-base mt-2 mb-6 tracking-tight text-slate-700">
                    {item.description}
                  </p>

                  <Link
                    href={"/blog-detail"}
                    className="flex items-center text-lg underline decoration-red-900"
                  >
                    Read More
                    <span className="bgYellow ms-2 p-2 rounded-full">
                      <FaArrowRightLong />
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
