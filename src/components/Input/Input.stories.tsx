import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input/Input",
  component: Input,
  args: { placeholder: "Enter value" },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = { args: { type: "text", label: "Text" } };
export const Password: Story = {
  args: { type: "password", label: "Password" },
};
export const Number: Story = { args: { type: "number", label: "Number" } };
export const Clearable: Story = {
  args: { clearable: true, label: "Clearable" },
};
export const Disabled: Story = {
  args: { label: "Disabled", disabled: true, value: "Readonly" },
};
