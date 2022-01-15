import {Route, Routes} from 'react-router-dom';
import Home from "../home"
import Hooks from "../hooks"
import HOC from "../hoc"
import PortalModal from "../portals"
import TypeScript from "../typescript"
import Redux from "../redux"
import Tests from "../tests"
import StyledComponents from "../styled-components"



const Routing = () => {


    return(
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/hooks" exact element={<Hooks/>}/>
            <Route path="/hoc" exact element={<HOC/>}/>
            <Route path="/portals" exact element={<PortalModal/>}/>
            <Route path="/styled" exact element={<StyledComponents/>}/>
            <Route path="/redux" exact element={<Redux/>}/>
            <Route path="/typescript" exact element={<TypeScript/>}/>
            <Route path="/tests" exact element={<Tests/>}/>
        </Routes>
    )
}

export default Routing