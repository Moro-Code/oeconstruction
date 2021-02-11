import React from "react";
import ContactUsForm from "./ContactUsForm";

export default {
  title: "Components/Organisms/ContactUsForm",
  component: ContactUsForm,
};

const Template = (args) => <ContactUsForm {...args} />;

export const Primary = Template.bind({});
export const SubmitSucceeded = Template.bind({});
export const SubmitFailed = Template.bind({});

Primary.args = {
  apiUrl: "somelink",
  onSubmit: (ev) => {
    ev.preventDefault();
  },
};

SubmitSucceeded.args = {
  apiUrl: "somelink",
  isSubmitted: true,
  onSubmit: (ev) => {
    ev.preventDefault();
  },
  submitSucceededMessage: "Thank you! We will reach out shortly",
};

SubmitFailed.args = {
  apiUrl: "somelink",
  isSubmitFailed: true,
  onSubmit: (ev) => {
    ev.preventDefault();
  },
  submitFailedMessage: "Some error occurred",
};
