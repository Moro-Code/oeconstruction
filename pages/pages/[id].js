import React from "react";
import Image from "next/image";
import Head from "next/head";
import { getAllContentIds, getContentDataById } from "../../lib/content";
import Link from "next/link";

export default function Pages({ pageData }) {
  return (
    <div className="w-full">
      <Head>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
        {/*Twitter Card*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.title} />
        <meta name="twitter:description" content={pageData.description} />
        <meta
          name="twitter:image:src"
          content={`${process.env.NEXT_PUBLIC_DOMAIN}${pageData.image}`}
        />
        {/*Open Graph Data*/}
        <meta property="og:title" content={pageData.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_DOMAIN}${pageData.image}`}
        />
        <meta property="og:description" content={pageData.description} />
      </Head>
      {pageData.image ? (
        <div className="relative w-full h-96">
          <Image
            src={pageData.image}
            alt={pageData.imageAltText}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : undefined}
      <div className="w-full p-3">
        <h1 className="text-5xl md:text-6xl mb-5 font-handwriting text-center">
          {pageData.title}
        </h1>
        <div className="flex justify-center">
          <div
            className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: pageData.contentHtml }}
          />{" "}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Link href="/pages/contact-us">
          <button className="rounded-md bg-black text-white p-2 text-3xl hover:bg-blue-900">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllContentIds("pages");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pageData = await getContentDataById("pages", params.id);
  return {
    props: {
      pageData,
    },
  };
}
