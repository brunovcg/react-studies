import { Route, Routes } from "react-router-dom";
import Home from "../Javascript/home";
import Hooks from "../Javascript/hooks";
import HOC from "../Javascript/hoc";
import PortalModal from "../Javascript/portals";
import TypeScript from "../typescript";
import Redux from "../Javascript/redux";
import Tests from "../Javascript/tests";
import StyledComponents from "../Javascript/styled-components";
import ClassComponents from "../Javascript/Class"
import SandBox from "../Javascript/sandBox"
import PropsType from "../typescript/Props"
import ReduxType from "../typescript/redux"
import HooksType from "../typescript/hooks"
import ClassComponentType from "../typescript/class"
import StyledComponentsType from "../typescript/styledComponents"
import StylesInLineType from "../typescript/StylesInLine";
import {OtherTypescript} from "../typescript/other"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/hooks" exact element={<Hooks />} />
      <Route path="/hoc" exact element={<HOC />} />
      <Route path="/portals" exact element={<PortalModal />} />
      <Route path="/styled" exact element={<StyledComponents />} />
      <Route path="/redux" exact element={<Redux />} />
      <Route path="/typescript" exact element={<TypeScript />} />
      <Route path="/typescript/props" exact element={<PropsType/>} />
      <Route path="/typescript/hooks" exact element={<HooksType/>} />
      <Route path="/typescript/redux" exact element={<ReduxType/>} />
      <Route path="/typescript/stylesinline" exact element={<StylesInLineType/>} />
      <Route path="/typescript/styledcomponents" exact element={<StyledComponentsType/>} />
      <Route path="/typescript/classcomponent" exact element={<ClassComponentType/>} />
      <Route path="/typescript/other" exact element={<OtherTypescript/>} />
      <Route path="/tests" exact element={<Tests />} />
      <Route path="/sandbox" exact element={<SandBox />} />
      <Route path="/classcomponents" exact element={<ClassComponents />} />
    </Routes>
  );
};

export default Routing;
