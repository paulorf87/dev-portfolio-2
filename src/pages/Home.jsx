import styled from "styled-components"; 
import {useSelector} from "react-redux";

import SidenavHeader from "../components/Sidenav/SidenavHeader";
import SkillsList from "../components/Skills/SkillsList";
import MainHeroBanner from "../components/Main/MainHeroBanner";
import Framework from "../components/Frameworks/Frameworks";


const HomeStyled = styled.div`
    
    margin: 0 auto;
    max-width: calc(1440px + 2*400px);
    width:95%;
    display: grid;
    grid-template-columns: 2fr 8fr 2fr;
    grid-template-rows: 2fr 8fr 2fr;
    grid-template-areas: "leftbar header header"
    "leftbar content rightbar"
    "footer footer rightbar";
    gap:16px;
    
    .header {
        background-color: ${({theme})=>theme.colors.secondary};
        grid-area: header;
    }
    .left-sidebar{
        background-color: ${({theme})=>theme.colors.secondary};
        grid-area:leftbar;
        padding:0 32px;
    }
    .right-sidebar{
        background-color: ${({theme})=>theme.colors.secondary};
        grid-area:rightbar;
        padding:4px;
    }
    .content{
        background-color: ${({theme})=>theme.colors.secondary};
        grid-area:content;
    }
    .footer{
        background-color: ${({theme})=>theme.colors.secondary};
        grid-area:footer;
    }
    @media  (max-width:400px) {
        grid-template-columns: 1fr;
        grid-template-areas: "header"
        "leftbar"
        "content"
        "footer"
        ;
        .right-sidebar {
            display: none;
        }
    }
`

const Home = () => {
    const {profile} = useSelector(state=>state.data);

    return <HomeStyled>
        <header className="header">
            <MainHeroBanner info={profile}/>
        </header>
        <aside className="left-sidebar">
            <SidenavHeader/>
            <SkillsList/>
        </aside>
        <main className="content"></main>
        <aside className="right-sidebar">
            <Framework/>
        </aside>
        <footer className="footer"></footer>
    </HomeStyled>
}

export default Home; 