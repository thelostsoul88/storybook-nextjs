import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input/With React Hook Form",
  component: Input,
};
export default meta;
type Story = StoryObj<typeof Input>;

const FormDemo = () => {
  const { control, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>({
    defaultValues: { email: "", password: "" },
  });
  const onSubmit = (data: any) => alert(JSON.stringify(data, null, 2));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "grid", gap: 12, width: 320 }}
    >
      <Controller
        name="email"
        control={control}
        rules={{ required: "Email required" }}
        render={({ field }) => (
          <Input
            {...field}
            label="Email"
            placeholder="you@example.com"
            clearable
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: "Password required" }}
        render={({ field }) => (
          <Input
            {...field}
            type="password"
            label="Password"
            placeholder="********"
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export const Form: Story = { render: () => <FormDemo /> };
