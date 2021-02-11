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
      </Head>
      <div className="w-full h-full flex flex-col items-center">
        <div
          className="hidden lg:block relative w-full"
          style={{
            height: 500,
          }}
        >
          <Image
            src="/images/contact-us.jpg"
            layout="fill"
            objectFit="cover"
            alt="image wih contact us written in scrabble letters on a green background"
          />
        </div>
        <div
          className="block lg:hidden md:block relative w-full"
          style={{
            height: 450,
          }}
        >
          <Image
            src="/images/contact-us.jpg"
            layout="fill"
            objectFit="cover"
            alt="image wih contact us written in scrabble letters on a green background"
          />
        </div>
        <div className="flex-grow flex justify-center items-center w-full">
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
      </div>
    </>
  );
}
