"use client";

import { Tabs } from "flowbite-react";
import Image from "next/image";
import React from "react";

const Recover = () => {
  return (
    <>
      <div className="py-20  bg-repeat bg-cover bg-bottom bg-[url('/images/banner-2.JPG')]">
        <div className="xs:px-6 lg:px-16">
          <div className="">
            <h1 className="text-5xl mb-4 font-medium xs:text-center md:text-start">
              You share the revenue goal.
              <span className="block w-full">
                Work better, smarter, together in Apollo.
              </span>
            </h1>
          </div>
          <div className="recoverTab">
            <Tabs aria-label="Pills" variant="pills">
              <Tabs.Item active title="Founders">
                <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                  <div className="col-span-2">
                    <h2 className="text-5xl leading-18 mb-10">
                      Apollo is your go-to-market copilot
                    </h2>
                    <p className="text-lg font-semibold mb-6">
                      Find buyers, close deals, and watch your business grow
                      with Apollos end-to-end sales solution, powered by AI.
                    </p>
                    <ul className="mb-4">
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>{" "}
                          Contact & Account Search:
                        </strong>{" "}
                        Find the right leads at the right time
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Sales Engagement:
                        </strong>{" "}
                        Grow your business with on-the-nose outbound
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>{" "}
                          Workflows:
                        </strong>{" "}
                        Save time with winning, out-of-the-box sales workflows
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Deal Management:
                        </strong>{" "}
                        Effortlessly manage your pipeline
                      </li>
                    </ul>
                    <a
                      className="group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-lg focus:outline-none ring-slate-200 bg-black text-white hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 text-center"
                      variant="outline"
                      color="slate"
                      href="/"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="col-span-1">
                    <Image
                      src={"/images/recover-image1.webp"}
                      width={360}
                      height={430}
                      alt="Apollo"
                    />
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Sales Development">
                <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                  <div className="col-span-2">
                    <h2 className="text-5xl leading-18 mb-10">
                      Fill your pipeline with quality leads
                    </h2>
                    <p className="text-lg font-semibold mb-6">
                      Find ideal leads and land more meetings with Apollo AI as
                      your sales assistant.
                    </p>
                    <ul className="mb-4">
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>{" "}
                          Contact & Account Search:
                        </strong>{" "}
                        Find 210M great leads
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Account-based Prospecting:
                        </strong>{" "}
                        Identify high-converting accounts
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>{" "}
                          Sales Engagement:
                        </strong>{" "}
                        Run more effective outbound with AI
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Meetings:
                        </strong>{" "}
                        Create quality meetings from one place
                      </li>
                    </ul>
                    <a
                      className="group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-lg focus:outline-none ring-slate-200 bg-black text-white hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 text-center"
                      variant="outline"
                      color="slate"
                      href="/"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="col-span-1">
                    <Image
                      src={"/images/recover-image2.webp"}
                      width={360}
                      height={430}
                      alt="Apollo"
                    />
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Account Executives">
                <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                  <div className="col-span-2">
                    <h2 className="text-5xl leading-18 mb-10">
                      Win more deals, crush your quota
                    </h2>
                    <p className="text-lg font-semibold mb-6">
                      Save time, build pipeline, and win more with Apollo AI as
                      your copilot.
                    </p>
                    <ul className="mb-4">
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>{" "}
                          Contact & Account Search:
                        </strong>{" "}
                        Find the right leads at the right time
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Sales Engagement:
                        </strong>{" "}
                        Scale your outreach, score more meetings
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>{" "}
                          Meetings:
                        </strong>{" "}
                        Streamline your meetings with AI for more wins
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Conversation Intelligence:
                        </strong>{" "}
                        Record, transcribe, and sync calls to CRM
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Deal Management:
                        </strong>{" "}
                        Manage opportunities with recommendations and insights
                      </li>
                    </ul>
                    <a
                      className="group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-lg focus:outline-none ring-slate-200 bg-black text-white hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 text-center"
                      variant="outline"
                      color="slate"
                      href="/"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="col-span-1">
                    <Image
                      src={"/images/recover-image3.webp"}
                      width={360}
                      height={430}
                      alt="Apollo"
                    />
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="RevOps">
                <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                  <div className="col-span-2">
                    <h2 className="text-5xl leading-18 mb-10">
                      Streamline your go-to-market stack
                    </h2>
                    <p className="text-lg font-semibold mb-6">
                      Keep your revenue engine humming with a true all-in-one
                      solution built to play nice together, and the most
                      accurate, up-to-date database.
                    </p>
                    <ul className="mb-4">
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>{" "}
                          Enrich & Cleanse:
                        </strong>{" "}
                        Maintain a database your team can trust
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Scores & Signals:
                        </strong>{" "}
                        Make prospecting more efficient
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>{" "}
                          Workflows:
                        </strong>{" "}
                        Create powerful automations for the whole funnel
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Analytics:
                        </strong>{" "}
                        Empower your team with data-driven insights
                      </li>
                    </ul>
                    <a
                      className="group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-lg focus:outline-none ring-slate-200 bg-black text-white hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 text-center"
                      variant="outline"
                      color="slate"
                      href="/"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="col-span-1">
                    <Image
                      src={"/images/recover-image4.webp"}
                      width={360}
                      height={430}
                      alt="Apollo"
                    />
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Marketing">
                <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                  <div className="col-span-2">
                    <h2 className="text-5xl leading-18 mb-10">
                      Generate pipeline that converts
                    </h2>
                    <p className="text-lg font-semibold mb-6">
                      Boost conversion, keep your marketing database squeaky
                      clean, and make sales fall in love with you using Apollo’s
                      tools for marketers.
                    </p>
                    <ul className="mb-4">
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>{" "}
                          Enrich & Cleanse:
                        </strong>{" "}
                        Maintain a database your team can trust
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Scores & Signals:
                        </strong>{" "}
                        Make prospecting more efficient
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>{" "}
                          Workflows:
                        </strong>{" "}
                        Create powerful automations for the whole funnel
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Analytics:
                        </strong>{" "}
                        Empower your team with data-driven insights
                      </li>
                    </ul>
                    <a
                      className="group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-lg focus:outline-none ring-slate-200 bg-black text-white hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 text-center"
                      variant="outline"
                      color="slate"
                      href="/"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="col-span-1">
                    <Image
                      src={"/images/recover-image5.webp"}
                      width={360}
                      height={430}
                      alt="Apollo"
                    />
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Sales Leaders">
                <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                  <div className="col-span-2">
                    <h2 className="text-5xl leading-18 mb-10">
                      Empower your team to beat quota
                    </h2>
                    <p className="text-lg font-semibold mb-6">
                      Boost your team’s productivity and performance with
                      consolidated workflows and AI-driven insights.
                    </p>
                    <ul className="mb-4">
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>{" "}
                          Enrich & Cleanse:
                        </strong>{" "}
                        Maintain a database your team can trust
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Scores & Signals:
                        </strong>{" "}
                        Make prospecting more efficient
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>{" "}
                          Workflows:
                        </strong>{" "}
                        Create powerful automations for the whole funnel
                      </li>
                      <li className="xs:leading-6 lg:leading-10 xs:mb-6 lg:mb-4 xs:flex-col lg:flex-row">
                        <strong className="flex me-4 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 12.6739L9.21739 17.3913L20 6.60864"
                              stroke="#1BDD5D"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Analytics:
                        </strong>{" "}
                        Empower your team with data-driven insights
                      </li>
                    </ul>
                    <a
                      className="group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-lg focus:outline-none ring-slate-200 bg-black text-white hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 text-center"
                      variant="outline"
                      color="slate"
                      href="/"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="col-span-1">
                    <Image
                      src={"/images/recover-image6.webp"}
                      width={360}
                      height={430}
                      alt="Apollo"
                    />
                  </div>
                </div>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recover;
