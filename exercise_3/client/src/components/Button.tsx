import { Component, JSX } from "solid-js";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  type?: "default" | "primary" | "warning";
  onClick?: () => void;
};

const Button: Component<Props> = (props) => {
  const type = props.type || "default";

  return (
    <button
      classList={{
        "border-2 rounded-md py-2 px-5": true,
        "text-black bg-white border-black": type === "default",
        "text-white bg-black border-black": type === "primary",
        "text-white bg-red border-white": type === "warning",
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
