import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ContactUsForm from "../../components/organisms/ContactUsForm";

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new URLSearchParams(new FormData(form));
    fetch(form.action, {
      method: form.method,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          setSubmitFailed(true);
        }
      })
      .catch((e) => {
        setSubmitFailed(true);
      });
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Reach out to us for all your ottawa commercial and residential renovation needs"
        />
        {/*Twitter Card*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us" />
        <meta
          name="twitter:description"
          content="Reach out to us for all your ottawa commercial and residential renovation needs"
        />
        <meta
          name="twitter:image:src"
          content={`${process.env.NEXT_PUBLIC_DOMAIN}/images/contact-us.jpg`}
        />
        {/*Open Graph Data*/}
        <meta property="og:title" content="Contact Us" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_DOMAIN}/images/contact-us.jpg`}
        />
        <meta
          property="og:description"
          content="Reach out to us for all your ottawa commercial and residential renovation needs"
        />
      </Head>
      <div className="w-full">
        <div className="hidden lg:block relative w-full h-96">
          <Image
            src="/images/contact-us.jpg"
            layout="fill"
            objectFit="cover"
            alt="image wih contact us written in scrabble letters on a green background"
          />
        </div>
        <div
          className="block lg:hidden relative w-full"
          style={{
            height: 350,
          }}
        >
          <Image
            src="/images/contact-us.jpg"
            layout="fill"
            objectFit="cover"
            alt="image wih contact us written in scrabble letters on a green background"
          />
        </div>

        <div className="flex w-full flex-wrap my-10 p-3 justify-center">
          <div className="w-full md:w-1/5 flex-grow flex justify-center">
            <ContactUsForm
              apiUrl={process.env.NEXT_PUBLIC_CONTACT_FORM_URL}
              onSubmit={handleSubmit}
              isSubmitted={isSubmitted}
              isSubmitFailed={submitFailed}
              submitSucceededMessage="Thank you for contacting us! We will reply to you shortly"
              submitFailedMessage={
                "Sorry an error occurred. Contact us at " +
                process.env.NEXT_PUBLIC_CONTACT_NUMBER
              }
            />
          </div>
          <div className="mt-5 md:mt-0 w-full md:w-1/5 self-center text-center font-handwriting text-5xl md:underline">
            Or
          </div>
          <div className="mt-5 md:mt-0 w-full md:w-1/5 flex-grow flex flex-col items-center">
            <p className="text-5xl font-handwriting"> Call Us At</p>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_CONTACT_NUMBER}`}
              className="text-3xl lg:text-5xl mt-10 hover:underline hover:text-blue-600"
            >
              {process.env.NEXT_PUBLIC_CONTACT_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
