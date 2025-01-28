import Image from "next/image";
import React from "react";
const stats = [
  { id: 1, name: "Live Transformed", value: "1000+" },
  { id: 2, name: "Client Satisfaction", value: "95%" },
  { id: 3, name: "Innovative Solutions Delivered", value: "1200+" },
];
const Network = () => {
  return (
    <>
      <div className="bgLightBlue py-15 sm:py-16">
        <div className="xs:px-6 lg:px-16">
          <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-x-8 row-center">
            <div className="xs:text-center lg:text-left">
              <h4 className="text-4xl">
                Millions of sellers at over{" "}
                <span className="bg-yellow-400 text-3xl text-black">
                  500,000
                </span>{" "}
                companies beat their number with Apollo
              </h4>
            </div>
            <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-1 lg:gap-4 xs:mt-8 lg:mt-0  xs:place-items-center lg:place-items-start">
              <Image
                src={"/images/11.jpg"}
                width={142}
                height={47}
                alt="Apollo"
              />
              <Image
                src={"/images/22.jpg"}
                width={142}
                height={47}
                alt="Apollo"
              />
              <Image
                src={"/images/33.jpg"}
                width={142}
                height={47}
                alt="Apollo"
              />
              <Image
                src={"/images/33.jpg"}
                width={142}
                height={47}
                alt="Apollo"
              />
              <Image
                src={"/images/44.jpg"}
                width={142}
                height={47}
                alt="Apollo"
              />
              <Image
                src={"/images/55.jpg"}
                width={142}
                height={47}
                alt="Apollo"
              />
              <Image
                src={"/images/66.jpg"}
                width={142}
                height={47}
                alt="Apollo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Network;
