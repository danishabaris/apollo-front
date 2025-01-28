import AboutIntro from "@/components/page/home/about-intro/AboutIntro";
import Banner from "@/components/page/home/banner/Banner";
import Faq from "@/components/page/home/faq/Faq";
import Features from "@/components/page/home/features/Features";
import Network from "@/components/page/home/network/Network";
import Recover from "@/components/page/home/recover/Recover";
import Testimonial from "@/components/page/home/testimonial/Testimonial";
import Works from "@/components/page/home/works/Works";
import Image from "next/image";

export default function Home() {
  return (
    <div className="body">
      <Banner />
      <Network />
      <AboutIntro />
      <Features />
      <Recover />
      <Works />
      <Faq />
      {/*<Testimonial /> */}
    </div>
  );
}
