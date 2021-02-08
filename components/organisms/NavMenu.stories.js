import React from "react";
import NavMenu from "./NavMenu";

export default {
  title: "Components/Organisms/NavMenu",
  component: NavMenu,
};

const Template = (args) => <NavMenu {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  logoText: "O&E Painting And Drywall Inc.",
  links: [
    {
      href: "/pages/about",
      text: "About Us",
    },
    {
      href: "/pages/services-offered",
      text: "Services we Offer",
    },
  ],
};
