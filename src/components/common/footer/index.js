import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-white py-3">
        <div className="xs:px-6 lg:px-16">
          <div className="grid grid-cols-1 gap-x-4 xs:gap-y-4 lg:gap-y-16 mt-8 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-16">
            <div className="">
              <h2 className="text-1xl mb-5 font-semibold text-yellow-600">
                Platform
              </h2>
              <ul>
                <li className="leading-10">Platform Overview</li>
                <li className="leading-10">Living Data Network</li>
                <li className="leading-10">Apollo AI</li>
                <li className="leading-10">AI Sales Automation</li>
                <li className="leading-10">Integrations</li>
                <li className="leading-10">Security</li>
              </ul>
            </div>

            <div className="">
              <h2 className="text-1xl mb-5 font-semibold text-yellow-600">
                Use Cases
              </h2>
              <ul>
                <li className="leading-10">Contact & Account Search</li>
                <li className="leading-10">Scores & Signals</li>
                <li className="leading-10">Inbound Optimization</li>
                <li className="leading-10">Sales Engagement</li>
                <li className="leading-10">Meetings</li>
                <li className="leading-10">Deal Management</li>
                <li className="leading-10">Conversation Intelligence</li>
                <li className="leading-10">Sales Analytics</li>
                <li className="leading-10">Sales Coaching</li>
                <li className="leading-10">Workflow Engine</li>
                <li className="leading-10">CRM Enrichment & Cleanse</li>
                <li className="leading-10">Lead Generation</li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-1xl mb-5 font-semibold text-yellow-600">
                Teams
              </h2>
              <ul>
                <li className="leading-10">Sales Leaders</li>
                <li className="leading-10">Account Executives</li>
                <li className="leading-10">Sales Development</li>
                <li className="leading-10">Founders</li>
                <li className="leading-10">Marketing</li>
                <li className="leading-10">Revenue Operations</li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-1xl mb-5 font-semibold text-yellow-600">
                Resources
              </h2>
              <ul>
                <li className="leading-10">Apollo Academy</li>
                <li className="leading-10">Magazine</li>
                <li className="leading-10">Knowledge Base ↗</li>
                <li className="leading-10">Webinars</li>
                <li className="leading-10">Success Stories</li>
                <li className="leading-10">
                  <Link href="/privacy-center">Privacy Center</Link>
                </li>
                <li className="leading-10">API Docs ↗</li>
                <li className="leading-10">Join Our Community</li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-1xl mb-5 font-semibold text-yellow-600">
                Company
              </h2>
              <ul>
                <li className="leading-10"><Link href={"/about"}>About Us</Link></li>
                <li className="leading-10">Careers</li>
                <li className="leading-10">Customer Reviews</li>                
                <li className="leading-10"><Link href={"/contact"}>Contact Us</Link></li>
                <li className="leading-10"><Link href={"/login"}>Login</Link></li>
                <li className="leading-10"><Link href={"/privacy"}>Privacy</Link></li>
              </ul>

              <div className="mt-8">
                <h2 className="text-1xl mb-5 font-semibold text-yellow-600">
                  Prospect on LinkedIn
                </h2>
                <p>
                  Gather verified email addresses & phone numbers directly from
                  LinkedIn, reach out, and see when they open your emails.
                </p>

                <a
                  className="group inline-flex ring-1 w-full items-center justify-center rounded-lg py-2 px-2  mt-2 text-sm border-0 bgYellow focus:outline-none ring-slate-200 text-black hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 text-center"
                  variant="outline"
                  color="slate"
                  href="/"
                >
                  Apollo Chrome Extension
                </a>
              </div>
            </div>
          </div>
          <a
            href="https://www.abarissoftech.com/"
            target="_blank"
            className=" text-white font-semibold text-yellow-600"
          >
            2025 All Rights Reserved. | Powered by{" "}
            <span className="text-blue">Abaris Softech</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
