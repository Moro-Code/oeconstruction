import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Hero from "../components/organisms/Hero";
import Card from "../components/molecules/Card";
import { getSortedContent } from "../lib/content";

export default function Home({ services }) {
  return (
    <>
      <Head>
        <title>Home</title>
        {/*Twitter Card*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="O&A Painting and Drywall Inc." />
        <meta
          name="twitter:description"
          content="For all your commercial and residential renovation needs in the Ottawa, ON area. O&A Painting and Drywall Inc provides top quality service at reasonable prices"
        />
        <meta
          name="twitter:image:src"
          content={`${process.env.NEXT_PUBLIC_DOMAIN}/images/logo.jpeg`}
        />
        {/*Open Graph Data*/}
        <meta property="og:title" content="O&A Painting and Drywall Inc." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_DOMAIN}/images/logo.jpeg`}
        />
        <meta
          property="og:description"
          content="For all your commercial and residential renovation needs in the Ottawa, ON area. O&A Painting and Drywall Inc provides top quality service at reasonable prices"
        />
      </Head>
      <Hero
        images={[
          {
            path: "/images/before-after-1.png",
            altText: "Pharmacy before and after renovation",
          },
          {
            path: "/images/before-after-2.png",
            altText: "Doctors office before and after renovation",
          },
        ]}
        transitionTime={2000}
        additionalContentContainerDesktopStyles="flex flex-col flex-grow items-center mt-2"
        additionalContentContainerMobileStyles="flex flex-col h-96 items-center"
      >
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
      </Hero>
      <div className="flex flex-col w-full mt-5 mb-5 items-center">
        <h2 className="text-4xl md:text-6xl font-handwriting">
          {" "}
          Services We Offer
        </h2>
        <p className="text-left m-4 md:my-4 max-w-screen-sm md:max-w-screen-lg text-lg md:text-xl font-sans break-word">
          We offer a broad range of professional renovation services for all
          your commercial and residential construction needs in Ottawa and
          surrounding areas. We guarantee quality, speed, and unparalleled
          customer service. Please take a look at our offered services below.
        </p>
        <div className="flex flex-col">
          {services.map((service) => (
            <Link href={service.link} key={service.title}>
              <a>
                <Card
                  image={service.image}
                  imageAltText={service.imageAltText}
                  title={service.title}
                  text={service.description}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let services = getSortedContent("services");
  services = services.map((value) => {
    return {
      ...value,
      link: `/services/${value.id}`,
    };
  });
  return {
    props: {
      services,
    },
  };
}
