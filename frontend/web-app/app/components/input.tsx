import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { Label, TextInput } from "flowbite-react";

interface Props {
  label: string;
  type?: string;
  showLabel?: boolean;
}

const Input = (props: Props & UseControllerProps) => {
  const { fieldState, field } = useController({ ...props, defaultValue: "" });

  return (
    <div className="mb-3">
      {props.showLabel && (
        <div className="mb-2 block">
          <Label htmlFor={field.name} value={props.label} />
        </div>
      )}

      <TextInput
        {...props}
        {...field}
        placeholder={props.label}
        type={props.type}
        color={
          fieldState.error ? "failure" : !fieldState.isDirty ? "" : "success"
        }
        helperText={fieldState.error?.message}
      />
    </div>
  );
};
export default Input;
