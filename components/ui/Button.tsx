import React from "react";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  isDisabled?: boolean;
  loader?: boolean;
  variant?: "primary" | "outline" | "neutral";

  bgColor?: string;

  full?: boolean;
  width?: string;

  textAlign?: "center" | "left" | "right";

};

const Button = ({
  text,
  variant = "primary",
  isDisabled = false,
  type = "button",
  textAlign = "left",
  onClick,
  className,
  full,
}: ButtonProps) => {
  let bgColor;


  switch (variant) {
    case "primary":
      bgColor =
        "bg-primary-40  text-white text-white hover:bg-primary-40 p-4 rounded-lg focus:border-1 focus:border-[#d9d9d9] disabled:opacity-50";
      break;
    case "outline":
      bgColor =
        "bg-transparent border border-1 px-10 text-white text-white hover:bg-primary-40 p-4 rounded focus:border-1 focus:border-[#d9d9d9] disabled:opacity-50";
      break;
    case "neutral":
      bgColor = "focus:border-1 focus:border-[#d9d9d9] disabled:opacity-50";
      break;
  }

  return (
    <button
      className={`${bgColor}  flex items-center text-center ${full ? "w-full" : ""
        }  disabled:cursor-not-allowed ${className ? className : ""}`}
      onClick={onClick ? onClick : undefined}
      disabled={isDisabled}
      type={type}
    >
      <span className={`px-3 text-${textAlign}`}>
        {text}
      </span>
    </button>
  );
};

export default Button;
