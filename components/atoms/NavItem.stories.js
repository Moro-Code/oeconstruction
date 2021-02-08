import React from "react";
import NavItem from "./NavItem";

export default {
  title: "Components/Atoms/NavItem",
  component: NavItem,
};

const Template = (args) => <NavItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Some Link",
  href: "/some-link",
};
