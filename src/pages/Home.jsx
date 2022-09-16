import styled from "styled-components"; 
import {useSelector} from "react-redux";

import SidenavHeader from "../components/Sidenav/SidenavHeader";
import SkillsList from "../components/Skills/SkillsList";
import MainHeroBanner from "../components/Main/MainHeroBanner";
import Framework from "../components/Frameworks/Frameworks";
import Footer from "../components/Footer/Footer";
import ProjectGrid from "../components/ProjectsGrid/ProjectsGrid";
import SocialMedia from "../components/General/SocialMedia";

const HomeStyled = styled.div`
    margin: 0 auto;
    padding: 8px 0;
    height: 100vh;
    max-width: 1440px;
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
        border-radius: 25px;
    }
    .left-sidebar{
        background-color: ${({theme})=>theme.colors.secondary};
        grid-area:leftbar;
        padding:0 32px;
        border-radius: 10px;
    }
    .right-sidebar{
        background-color: ${({theme})=>theme.colors.secondary};
        grid-area:rightbar;
        padding:32px 4px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .content{
        padding:8px;
        background-color: ${({theme})=>theme.colors.secondary};
        grid-area:content;
        border-radius: 10px;
    }
    .footer{
        background-color: ${({theme})=>theme.colors.secondary};
        grid-area:footer;
        border-radius: 10px;
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
        <main className="content">
            <ProjectGrid/>
        </main>
        <aside className="right-sidebar">
            <SocialMedia/>
            <Framework/>
        </aside>
        <footer className="footer">
            <Footer/>
        </footer>
    </HomeStyled>
}

export default Home; 