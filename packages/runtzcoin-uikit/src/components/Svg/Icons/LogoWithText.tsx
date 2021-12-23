import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import LogoWithTextSvg from "./LogoWithText.svg";

interface LogoProps extends SvgProps {
  isDark?: boolean;
  width?:string;
  className? : string;
}

const Logo: React.FC<LogoProps> = ({ isDark, width, className,...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
      <img src={LogoWithTextSvg} alt="logo" {...props} color={textColor} width={width} className={className}/> 
  );
};
Logo.defaultProps = { isDark : true, width:"160px", className:""};
export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
