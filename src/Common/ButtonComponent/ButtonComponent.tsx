import React, { useState } from "react";

interface Props {
  border?: string;
  btnColor?: string;
  children?: React.ReactNode;
  height?: string;
  // handleClick?: () => void;
  handleClick?: any;
  radius?: string;
  width?: string;
  buttonType?: "submit" | "reset" | "button";
  labelColor?: string;
  classNames?: string;
  isDisabled?: boolean;
  styleType?: string;
  customStyle?: object;
  padding?: string;
  icon?: string;
}

const ButtonComponent: React.FC<Props> = ({
  border = "1px solid #FF9A33",
  btnColor = "#FF9A33",
  children,
  height = "100%",
  padding = "14px 0px",
  handleClick,
  radius = "8px",
  width = "100%",
  buttonType,
  labelColor,
  classNames,
  isDisabled,
  styleType,
  customStyle,
  icon,
}) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  const outlineStyles = {
    boxShadow: "0 0 0 2px #00D09C inset",
    color: labelColor,
    backgroundColor: "white",
  };
  const outlineHoverStyle = {
    color: labelColor || "white",
    backgroundColor: "#00D09C",
  };
  const roundedStyle = {
    backgroundColor: btnColor,
    color: labelColor || "white",
    borderRadius: "25px",
  };
  const disabledStyle = {
    cursor: "default",
    backgroundColor: btnColor,
    color: labelColor || "white",
    opacity: 0.4,
  };
  const normalStyle = {
    backgroundColor: btnColor,
    color: labelColor || "white",
  };
  let btnStyle;
  switch (styleType) {
    case "normal":
      btnStyle = normalStyle;
      break;
    case "outlineNoHover":
      btnStyle = outlineStyles;
      break;
    case "outline":
      if (hover) {
        btnStyle = outlineHoverStyle;
      } else {
        btnStyle = outlineStyles;
      }
      break;
    default:
      btnStyle = roundedStyle;
      break;
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        padding: "20px 0px",
      }}
    >
      <button
        style={
          isDisabled
            ? {
                ...btnStyle,
                ...disabledStyle,
                ...customStyle,
                border,
                borderRadius: radius,
                height,
                width,
                padding,
              }
            : {
                ...btnStyle,
                ...customStyle,
                border,
                borderRadius: radius,
                height,
                width,
                padding,
              }
        }
        type={buttonType}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={!isDisabled ? (e) => handleClick(e) : () => {}}
        className={`${classNames} flex justify-center items-center pr-5`}
        disabled={isDisabled}
      >
        {children}
        {icon ? <img src={icon} className="ml-3 w-6" /> : null}
      </button>
    </div>
  );
};
export default ButtonComponent;
