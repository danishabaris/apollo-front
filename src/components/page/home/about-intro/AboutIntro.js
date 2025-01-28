"use client";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

import React from "react";
import Image from "next/image";

const AboutIntro = () => {
  return (
    <>
      <div className="aboutIntro pt-20 pb-20">
        <div className="xs:px-6 lg:px-16">
          <h2 className="xs:text-4xl lg:text-5xl w-full max-w-4xl text-center mx-auto mb-10">
            The only solution you need to run a world-class sales organization
          </h2>
          <div className="">
            <Tabs
              aria-label="Tabs with underline"
              variant="underline"
              className="max-w-4xl mx-auto"
            >
              <Tabs.Item
                active
                title="Contact & Account Search"
                icon={HiUserCircle}
              >
                <div className="darkBlue">
                  <Image
                    src={"/images/pipe-img1.webp"}
                    width={900}
                    height={700}
                    alt="Apollo"
                  />
                </div>
              </Tabs.Item>
              <Tabs.Item title="Scores & Signals" icon={MdDashboard}>
                <div className="darkBlue">
                  <Image
                    src={"/images/pipe-img2.webp"}
                    width={900}
                    height={700}
                    alt="Apollo"
                  />
                </div>
              </Tabs.Item>
              <Tabs.Item title="Inbound Optimization" icon={HiAdjustments}>
                <div className="darkBlue">
                  <Image
                    src={"/images/pipe-img3.webp"}
                    width={900}
                    height={700}
                    alt="Apollo"
                  />
                </div>
              </Tabs.Item>
              <Tabs.Item title="Sales Engagement" icon={HiClipboardList}>
                <div className="darkBlue">
                  <Image
                    src={"/images/pipe-img4.webp"}
                    width={900}
                    height={700}
                    alt="Apollo"
                  />
                </div>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutIntro;
