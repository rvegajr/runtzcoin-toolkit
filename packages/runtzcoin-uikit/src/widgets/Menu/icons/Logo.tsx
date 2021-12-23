import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import LogoSvg from "./Logo.svg";

interface LogoProps extends SvgProps {
  isDark?: boolean;
  width?:string;
  className? : string;  
}

const Logo: React.FC<LogoProps> = ({ isDark, width, className, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <object data={LogoSvg} type="image/svg+xml" className={className}>Image</object>
  );
};
Logo.defaultProps = { isDark : true, width:"200px", className:""};
export default Logo;
  