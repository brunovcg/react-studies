import CSS from "csstype";

interface IStyles {
  style1: CSS.Properties,
  style2: CSS.Properties,
  style3: CSS.Properties,
  style4: CSS.Properties,
  style5: CSS.Properties,
  style6: CSS.Properties
  
}

export const styles: IStyles = {
  style1: {
    background: "#edd",
    padding: "30px",
  },
  style2: { 
      margin: "0",
      padding: "10px 0px 30px 0"
  },
  style3: {
    background: "rgb(1,2,3,0.2)",
    padding: "30px"

  },
  style4:{
    color: "blue",
    backgroundColor: "rgb(1,100,3,0.2)"
  },
  style5:{
    background: "rgb(1,100,3,0.2)",
    padding: "30px"
  },

  style6:{
    background: "rgb(1,100,200,0.2)",
    padding: "30px"
  }
};
