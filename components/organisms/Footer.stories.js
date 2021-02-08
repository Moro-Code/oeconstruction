import React from "react";
import Footer from "./Footer";

export default {
  title: "Components/Organisms/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  copyRightText: "O&E Painting and Drywall Inc.",
  links: [
    {
      href: "/pages/about-us",
      text: "About Us",
    },
    {
      href: "/services",
      text: "Services We Offer",
    },
    {
      href: "/pages/contact-us",
      text: "Contact Us",
    },
  ],
};
