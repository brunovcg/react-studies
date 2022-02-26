import React from "react";
import States from "./states"
import PassingProp from "./passingProp"
import LifeCycle from "./lifeCycle"

class ClassComponents extends React.Component {
 render(){
   return(
     <>
      <States links={["https://bit.ly/3lmYVna","https://bit.ly/3flyaMj"]}/>
      <PassingProp/>
      <LifeCycle/>
     </>
   )
 }
}

export default ClassComponents;
