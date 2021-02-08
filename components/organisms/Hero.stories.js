import React from "react";
import Hero from "./Hero";
import Image from "next/image";
import Link from "next/link";

export default {
  title: "Components/Organisms/Hero",
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  images: [
    {
      path: "/images/before-after-1.png",
      altText: "Pharmacy before and after renovation",
    },
    {
      path: "/images/before-after-2.png",
      altText: "Doctors office before and after renovation",
    },
  ],
  transitionTime: 2000,
  additionalContentContainerDesktopStyles:
    "flex flex-col flex-grow items-center mt-2",
  additionalContentContainerMobileStyles: "flex flex-col h-96 items-center",
  children: (
    <>
      <div className="relative w-full h-1/2">
        <Image
          src="/images/logo.jpeg"
          alt="O&E Painting and Drywall Inc. Logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <p className="text-5xl md:text-4xl lg:text-7xl font-title">
          PROFESSIONAL
        </p>
        <p className="text-3xl md:text-2xl lg:text-5xl font-title">
          DRYWALL AND PAINTING
        </p>
        <p className="text-lg md:text-base lg:text-2xl font-handwriting">
          Experience you can trust, Quality you deserve
        </p>
      </div>
      <p className="mt-4 font-title">Commercial and Residential Renovation</p>
      <Link href="/pages/contact-us">
        <button className="rounded-md bg-black text-white p-2 text-3xl hover:bg-blue-900">
          Contact Us
        </button>
      </Link>
    </>
  ),
};
