import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import Logo from "./Logo.svg";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src={Logo} alt="logo" {...props}/> 
  );
};

export default Icon;
