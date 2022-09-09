import { useSelector } from "react-redux";
import styled from "styled-components";

import MainHeroBanner from "./MainHeroBanner";
import ProjectGrid from "../ProjectsGrid/ProjectsGrid";

const MainStyled = styled.main`
    position: relative;
    left:calc(300px + 32px*2); 
    top:32px;
    min-height: calc(100vh - 64px);
    max-width: 1440px;
    max-height:800px;
    border-radius: 5px;
    padding:32px;
    background: ${({theme})=>theme.colors.secondary};
    position: relative;
    display: flex;
    flex-direction: column;
    .head {
        width: 100%;
        margin-bottom: 32px;
    }
    .sub-head {
        width: 100%;
        height: 150px;
        background-color:orange;
        margin-bottom:16px; 
    }
    .main {
        height: 100%;
        border-radius: 10px;
        margin-bottom: 32px;
        padding:16px;
        width:100%;
    }
    
`

const Main = () => {
    const {profile} = useSelector(state=>state.data);

    return <MainStyled>
        <div className="head">
            <MainHeroBanner info={profile}/>
        </div>
        {/* <div className="sub-head"></div> */}
        <div className="main">
            <ProjectGrid/>
        </div>
    </MainStyled>    
}

export default Main; 