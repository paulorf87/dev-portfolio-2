import  { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

// import Sidenav from "./components/Sidenav/Sidenav";
// import Main from "./components/Main/Main";
import Home from "./pages/Home";

import GlobalStyle from "./styles/global";

const engineer = {
    colors:{ 
        dark:"#090909", 
        secondary:"#D9D9D9", 
        accent:"#FF4D05"
    }, 
    text:{
        primary:"#333"
    }
}
const developer = {
    colors:{
        dark:"#10141E",
        secondary:"#161D2F",
        accent:"#41D2F2"
    }, 
    text:{
        primary:"#fff"
    }
}


const App = () => {
    const {isDevelopmentTheme} = useSelector(state=>state.theme);

    return <ThemeProvider theme={ isDevelopmentTheme ? developer :engineer}>
        <GlobalStyle/>
        <Home/>
        {/* <Sidenav/>
        <Main/> */}
    </ThemeProvider> 
}

export default App; 