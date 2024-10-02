import { Component, JSX } from "solid-js";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  type?: "default" | "primary" | "warning" | "submit";
  border?: boolean;
  onClick?: () => void;
};

const Button: Component<Props> = (props) => {
  const type = props.type || "default";
  const border = props.border ?? true;

  return (
    <button
      classList={{
        "rounded-md py-2 px-3": true,
        "border-2": border,
        "text-black bg-white border-black hover:bg-gray-light":
          type === "default",
        "text-white bg-black border-black":
          type === "primary" || type === "submit",
        "text-red bg-white border-white hover:bg-red hover:text-white":
          type === "warning",
      }}
      type={type === "submit" ? "submit" : "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
