import CSS from "csstype";

interface IStyles {
  style1: CSS.Properties,
  style2: CSS.Properties
}

export const styles: IStyles = {
  style1: {
    background: "#edd",
    padding: "30px"
  },
  style2: { 
      margin: "0",
      padding: "10px 0px 30px 0"
  }
};
