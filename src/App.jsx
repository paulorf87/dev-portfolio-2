import  { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboards from "./pages/DashboardPage/Dashboards";
import GlobalStyle from "./styles/global";
import SinglePageProjects from "./pages/SinglePageProjects/SinglePageProjects";
import IoTPage from "./pages/IoTPage/IoTPage";
import PageNotFound from "./components/General/PageNotFound";

import { engineer, developer } from "./styles/themes";

const App = () => {
    const {isDevelopmentTheme} = useSelector(state=>state.theme);

    return <ThemeProvider theme={ isDevelopmentTheme ? developer :engineer}>
        <GlobalStyle/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/dashboards" element={<Dashboards/>}/>
            <Route exact path="/singlepage" element={<SinglePageProjects/>}/>
            <Route exact path="/iot" element={<IoTPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </ThemeProvider> 
}

export default App; 