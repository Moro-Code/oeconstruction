import React from "react";
import MobileNavMenu from "./MobileNavMenu";

export default {
  title: "Components/Molecules/MobileNavMenu",
  component: MobileNavMenu,
};

const Template = (args) => <MobileNavMenu {...args} />;

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
