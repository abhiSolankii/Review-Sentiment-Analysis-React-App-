// Tooltip.js
import React from "react";

function Tooltip({ text, top, left }) {
  const tooltipStyle = {
    position: "absolute",
    top: top,
    left: left,
    backgroundColor: "#fff",
    height: "150px",
    width: "200px",
    border: "2px solid #000",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    zIndex: "999",
  };

  return (
    <div style={tooltipStyle}>
      <span>{text}</span>
    </div>
  );
}

export default Tooltip;
