import React, { useState } from "react";
import RuntzToggle from "./RuntzToggle";

export default {
  title: "Components/RuntzToggle",
  component: RuntzToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <RuntzToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <RuntzToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <RuntzToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
