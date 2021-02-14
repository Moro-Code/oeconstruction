import "tailwindcss/tailwind.css";
import "../icomoon/style.css";
import "../styles/fonts.css";
import "../styles/animations.css";
import Layout from "../components/organisms/Layout";
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
