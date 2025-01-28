import Image from "next/image";
import React from "react";
import { FaStar, FaThumbsUp } from "react-icons/fa6";

const client = [
  {
    id: "1",
    url: "/images/testimonial1.png",
    content:
      "Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
    name: "Lana Bernier",
    profile: "Senior Paradigm Strategist",
  },
  {
    id: "2",
    url: "/images/testimonial2.png",
    content:
      "I like Infinity Estate more and more each day because it makes my life a lot easier. We can't understand how we've been living without Infinity Estate. Infinity Estate has got everything I need. The service was excellent.",
    name: "Mrs. Van Hartmann",
    profile: "Legacy Usability Manager",
  },
  {
    id: "3",
    url: "/images/testimonial3.png",
    content:
      "You've saved our business! Infinity Estate has got everything I need. We were treated like royalty. It's really wonderful.",
    name: "Philip Deckow",
    profile: "District Assurance Officer",
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="bgGray py-20">
        <div className="xs:px-6 lg:px-16">
          <h2 className="text-5xl mb-4 font-medium">Testimonial</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 mt-8 lg:grid-cols-3">
            {client.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white border-2 border-indigo-600 px-6 py-6 w-full"
              >
                <div className="flex justify-between mb-8">
                  <div className="flex gap-1 items-center">
                    <span className="text-blue-800">
                      <FaStar />
                    </span>
                    <span className="text-blue-800">
                      <FaStar />
                    </span>
                    <span className="text-blue-800">
                      <FaStar />
                    </span>
                    <span className="text-blue-800">
                      <FaStar />
                    </span>
                    <span className="text-blue-800">
                      <FaStar />
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-blue-800">
                      <FaThumbsUp />
                    </span>
                    <span className="text-base">Testimonial</span>
                  </div>
                </div>
                <div className="order-first text-base tracking-tight text-gray-900">
                  {item.content}
                </div>
                <div className="flex gap-4 items-center mt-6">
                  <div className="">
                    <Image
                      src={item.url}
                      width={40}
                      height={40}
                      alt="Profile"
                    ></Image>
                  </div>
                  <div className="mt-1">
                    <div className="text-xl text-black font-medium">
                      {item.name}
                    </div>
                    <div className="text-base text-black">{item.profile}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
