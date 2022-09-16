import  { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboards from "./pages/DashboardPage/Dashboards";
import GlobalStyle from "./styles/global";

import { engineer, developer } from "./styles/themes";

const App = () => {
    const {isDevelopmentTheme} = useSelector(state=>state.theme);

    return <ThemeProvider theme={ isDevelopmentTheme ? developer :engineer}>
        <GlobalStyle/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/dashboards" element={<Dashboards/>}/>
            <Route path="*" element={<h1>Page Not Found!</h1>}/>
        </Routes>
    </ThemeProvider> 
}

export default App; 