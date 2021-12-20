import React from "react";
import { RuntzStack, RuntzInput, RuntzLabel } from "./StyledRuntzToggle";
import { RuntzToggleProps, scales } from "./types";

const RuntzToggle: React.FC<RuntzToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <RuntzStack scale={scale}>
    <RuntzInput id={props.id || "runtz-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <RuntzLabel scale={scale} checked={checked} htmlFor={props.id || "runtz-toggle"}>
      <div className="runtzs">
        <div className="runtz" />
        <div className="runtz" />
        <div className="runtz" />
        <div className="butter" />
      </div>
    </RuntzLabel>
  </RuntzStack>
);

export default RuntzToggle;
