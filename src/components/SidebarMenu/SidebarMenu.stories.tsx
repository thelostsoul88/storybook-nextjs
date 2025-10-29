import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useState } from "react";
import { SidebarMenu } from "./SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
};
export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const sample1 = [{ label: "Home" }, { label: "About" }, { label: "Contact" }];
const sample2 = [
  { label: "Dashboard", children: [{ label: "Overview" }, { label: "Stats" }] },
  {
    label: "Settings",
    children: [{ label: "Profile" }, { label: "Security" }],
  },
  { label: "Help", children: [{ label: "FAQ" }, { label: "Support" }] },
];

const Demo = (args: any) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open menu</button>
      <SidebarMenu {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const OneLevel: Story = { render: (args) => <Demo {...args} /> };
OneLevel.args = { items: sample1 };

export const TwoLevels: Story = { render: (args) => <Demo {...args} /> };
TwoLevels.args = { items: sample2 };
