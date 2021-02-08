import React from "react";
import IconButton from "./IconButton";

export default {
  title: "Components/Molecules/IconButton",
  component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  icon: "icon-menu",
};
