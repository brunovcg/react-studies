import { Route, Routes } from "react-router-dom";
import Home from "../Javascript/home";
import Hooks from "../Javascript/hooks";
import HOC from "../Javascript/hoc";
import PortalModal from "../Javascript/portals";
import TypeScript from "../typescript";
import Redux from "../Javascript/redux";
import MyTestsApp from "../typescript/tests/MyTestApp";
import StyledComponents from "../Javascript/styled-components";
import ClassComponents from "../Javascript/Class";
import GraphQLComponent from "../Javascript/graphql";
import GraphQLComponentType from "../typescript/graphql";
import { SandBox } from "../Javascript/sandBox";
import PropsType from "../typescript/Props";
import ReduxType from "../typescript/redux";
import HooksType from "../typescript/hooks";
import ClassComponentType from "../typescript/class";
import StyledComponentsType from "../typescript/styledComponents";
import StylesInLineType from "../typescript/StylesInLine";
import { OtherTypescript } from "../typescript/other";
import HomePage from "../Javascript/reactQuery/pages/Home.page";
import RegularRequest from "../Javascript/reactQuery/pages/RegularRequest";
import BasicUseQuery from "../Javascript/reactQuery/pages/BasicUseQuery";
import QueryById from "../Javascript/reactQuery/pages/QueryById";
import ParallelQueries from '../Javascript/reactQuery/pages/ParallelQueries'
import DynamicParallelQueries from '../Javascript/reactQuery/pages/DynamicParallelQueries'
import DependentParallelQueries from '../Javascript/reactQuery/pages/DependentParallelQueries'
import PaginationQuery from "../Javascript/reactQuery/pages/PaginationQuery"
import InfiniteQueries from "../Javascript/reactQuery/pages/InfiniteQueries"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="hooks" exact element={<Hooks />} />
      <Route path="hoc" exact element={<HOC />} />
      <Route path="portals" exact element={<PortalModal />} />
      <Route path="styled" exact element={<StyledComponents />} />
      <Route path="redux" exact element={<Redux />} />
      <Route path="graphql" exact element={<GraphQLComponent />} />
      <Route path="reactquery">
        <Route index element={<HomePage />} />
        <Route path="regularrequest" element={<RegularRequest />} />
        <Route path="usequery" element={<BasicUseQuery />} />
        <Route path="parallelqueries" element={<ParallelQueries />} />
        <Route path="usequery/:heroId" element={<QueryById />} />
        <Route path="dynamicparallelqueries" element={<DynamicParallelQueries heroIds={[1, 3]} />} />
        <Route path="dependentparallelqueries" element={<DependentParallelQueries email="brunovcg@gmail.com" />} />
        <Route path="paginationquery" element={<PaginationQuery />} />
        <Route path="infinitequeries" element={<InfiniteQueries />} />
      </Route >
      <Route path="/typescript" exact element={<TypeScript />} />
      <Route
        path="/typescript/graphql"
        exact
        element={<GraphQLComponentType />}
      />
      <Route path="/typescript/props" exact element={<PropsType />} />
      <Route path="/typescript/hooks" exact element={<HooksType />} />
      <Route path="/typescript/redux" exact element={<ReduxType />} />
      <Route
        path="/typescript/stylesinline"
        exact
        element={<StylesInLineType />}
      />
      <Route
        path="/typescript/styledcomponents"
        exact
        element={<StyledComponentsType />}
      />
      <Route
        path="/typescript/classcomponent"
        exact
        element={<ClassComponentType />}
      />
      <Route path="/typescript/other" exact element={<OtherTypescript />} />
      <Route path="/typescript/tests/*" exact element={<MyTestsApp />} />
      <Route path="/sandbox" exact element={<SandBox />} />
      <Route path="/classcomponents" exact element={<ClassComponents />} />
    </Routes >
  );
};

export default Routing;
