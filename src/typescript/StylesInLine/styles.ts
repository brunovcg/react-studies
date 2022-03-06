import CSS from "csstype";
import React from "react";

interface IStylesObject {
  style1: CSS.Properties;
  style2: React.CSSProperties;
}

export const stylesObject: IStylesObject = {
  style1: {
    color: "red",
  },
  style2: { color: "green" },
};

export const stylesSimple: CSS.Properties = {
  color: "yellow",
};
