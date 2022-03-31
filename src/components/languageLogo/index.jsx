export const LanguageLogo = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: children === "TS" ? "#026aaf" : "#d8c326",
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "end",
        justifyContent: "end",
        padding: "3px",
        color: "white",
        borderRadius: "6px",
        fontWeight: "bold",
        fontFamily: "helvetica",
        letterSpacing: "1px"
      }}
    >
      {children === "TS" ? "TS" : "JS"}

    </div>
  );
};
