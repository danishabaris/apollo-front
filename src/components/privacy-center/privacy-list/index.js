import Link from "next/link";
import React from "react";
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
  {
    id: "9",
    title: "Data recovery",
    description: "Regular data backup with a maximum 24-hour RTO and RPO.",
  },
];

const PrivacyList = () => {
  return (
    <>
      <div className="xs:p-8 lg:p-0 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-10">
            {data.map((item) => {
              return (
                <div className="border p-10 mb-8" key={item.id}>
                  <span className="p-4 text-2xl bgYellow rounded-full">
                    {item.id}
                  </span>
                  <h4 className="mt-10 text-2xl font-semibold mb-4">
                    {item.title}
                  </h4>
                  <p className="text-base mt-2 mb-6 tracking-tight text-slate-700">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyList;
