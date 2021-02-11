import React from "react";
import Input from "./Input";

export default {
  title: "Components/Molecules/Input",
  component: Input,
  decorators: [
    (Story) => {
      return (
        <div className="w-full flex justify-center">
          <div className="w-1/3">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: "email",
  inputType: "email",
  label: "Email",
  placeHolder: "you@email.com",
  value: "",
};
