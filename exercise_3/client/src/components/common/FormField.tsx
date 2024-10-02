import { Component, JSX } from "solid-js";

type Props = {
  for: string;
  label: string;
  required?: boolean;
  children: JSX.Element;
};

const FormField: Component<Props> = (props) => {
  return (
    <div class="flex flex-col gap-4">
      <label for={props.for} class="font-bold">
        {props.label}
        {props.required && <span aria-label="required">*</span>}
      </label>
      {props.children}
    </div>
  );
};

export default FormField;
