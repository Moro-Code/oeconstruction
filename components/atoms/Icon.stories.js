import React from "react";
import Icon from "./Icon";

export default {
  title: "Components/Atoms/Icon",
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
export const WithAdditionalStyles = Template.bind({});

Primary.args = {
  icon: "icon-envelop",
};

WithAdditionalStyles.args = {
  icon: "icon-envelop",
  additionalStyles: "text-red-900",
};
