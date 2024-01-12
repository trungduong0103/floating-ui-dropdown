import React from "react";

const Chip = ({ children }) => {
  return (
    <div
      style={{
        padding: "4px 8px",
        backgroundColor: "#EBEFF2",
        borderRadius: 100,
        fontSize: 14,
      }}
    >
      {children}
    </div>
  );
};

export { Chip };
