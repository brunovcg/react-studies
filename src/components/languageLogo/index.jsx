import { useState } from "react";

export const LanguageLogo = ({ children, applyHover = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="lang-logo"
      style={{
        backgroundColor: children === "TS" ? "#026aaf" : "#d8c326",
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "end",
        justifyContent: "end",
        outline:
          hovered &&
          applyHover &&
          `2px solid ${children === "TS" ? "#023d64" : "#8c7f1a"}`,
        padding: "3px",
        color: "white",
        borderRadius: "6px",
        fontWeight: "bold",
        fontFamily: "helvetica",
        letterSpacing: "1px",
      }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {children === "TS" ? "TS" : "JS"}
    </div>
  );
};
