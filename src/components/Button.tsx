import React from "react";

export const MyButton: React.FC<{ label: string }> = ({ label }) => {
  return <button style={{ padding: "8px 16px" }}>{label}</button>;
};
