import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../molecules/Input";
import Icon from "../atoms/Icon";

export default function ContactUsForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  if (props.isSubmitted) {
    return (
      <div className="flex flex-col items-center max-w-screen-sm lg:max-w-screen-lg w-full  p-3">
        <Icon
          icon="icon-checkmark"
          additionalStyles="text-green-600 text-9xl p-4 rounded-full border border-green-600 border-2"
        />
        <p className="font-handwriting text-xl">
          {props.submitSucceededMessage}
        </p>
      </div>
    );
  } else if (props.isSubmitFailed) {
    return (
      <div className="flex flex-col items-center max-w-screen-sm lg:max-w-screen-lg w-full p-3">
        <Icon
          icon="icon-cross"
          additionalStyles="text-red-600 text-9xl p-4 rounded-full border border-red-600 border-2"
        />
        <p className="font-sans text-xl">{props.submitFailedMessage}</p>
      </div>
    );
  }
  return (
    <div className="max-w-screen-sm md:max-w-screen-lg w-full rounded-lg shadow-lg p-3">
      <h2 className="text-3xl font-handwriting">Contact Us</h2>
      <p className="text-left text-lg font-sans">
        We'd love to hear from you about your project!
      </p>
      <form
        className={"w-full"}
        onSubmit={props.onSubmit}
        action={props.apiUrl}
        method="POST"
      >
        <Input
          name="name"
          inputType="text"
          label="Name"
          placeHolder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.value)}
          additionalInputStyles="border border-gray rounded-lg p-2 focus:border-blue-500 focus:shadow-xl"
          additionalLabelStyles="text-lg font-handwriting"
          required
        />
        <Input
          name="email"
          inputType="email"
          label="Email"
          placeHolder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.value)}
          additionalInputStyles="border border-gray rounded-lg p-2 focus:border-blue-500 focus:shadow-xl"
          additionalLabelStyles="text-lg font-handwriting"
          required
        />
        <Input
          name="message"
          inputType="textarea"
          label="Your Message"
          value={message}
          maxLength={500}
          onChange={(e) => setMessage(e.value)}
          additionalInputStyles="border border-gray rounded-lg p-2 focus:border-blue-500 focus:shadow-xl"
          additionalLabelStyles="text-lg font-handwriting"
          required
        />
        <button className="rounded-md bg-black text-white py-1 px-4 text-lg hover:bg-blue-900 font-handwriting mt-3">
          <Icon icon="icon-envelop" additionalStyles="text-current" /> Submit{" "}
        </button>
      </form>
    </div>
  );
}

ContactUsForm.propTypes = {
  /**
   * the url from which to submit the information from the contact form too
   */
  apiUrl: PropTypes.string.isRequired,

  /**
   * handler for when the form is submitted
   */
  onSubmit: PropTypes.func,

  /**
   * boolean whether or not the submit succeeded
   */
  isSubmitted: PropTypes.bool,

  /**
   * boolean whether ot not the submit failed
   */
  isSubmitFailed: PropTypes.bool,

  /**
   * submit succeeded message
   */
  submitSucceededMessage: PropTypes.string,

  /**
   * string message if the submission failed
   */
  submitFailedMessage: PropTypes.string,
};
