import "tailwindcss/tailwind.css";
import "../icomoon/style.css";
import "../styles/fonts.css";
import "../styles/animations.css";
import Layout from "../components/organisms/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
