import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useState } from "react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  args: { message: "Hello from Toast!", type: "info", duration: 3000 },
};
export default meta;
type Story = StoryObj<typeof Toast>;

const Demo = (args: any) => {
  const [open, setOpen] = useState(true);
  return <Toast {...args} show={open} onClose={() => setOpen(false)} />;
};

export const Info: Story = { render: (args) => <Demo {...args} /> };
export const Success: Story = { render: (args) => <Demo {...args} /> };
Success.args = { type: "success", message: "Saved successfully" };
export const Error: Story = { render: (args) => <Demo {...args} /> };
Error.args = { type: "error", message: "Something went wrong" };
export const Warning: Story = { render: (args) => <Demo {...args} /> };
Warning.args = { type: "warning", message: "Warning" };
