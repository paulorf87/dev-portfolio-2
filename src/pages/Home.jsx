import { useState } from "react";
import styled from "styled-components"; 
import {useSelector} from "react-redux";

import SidenavHeader from "../components/Sidenav/SidenavHeader";
import SkillsList from "../components/Skills/SkillsList";
import MainHeroBanner from "../components/Main/MainHeroBanner";
import Framework from "../components/Frameworks/Frameworks";
import Footer from "../components/Footer/Footer";
import ProjectGrid from "../components/ProjectsGrid/ProjectsGrid";
import SocialMedia from "../components/General/SocialMedia";
import Modal from "../components/Modal/Modal";
import Contacts from "../components/Contacts/Contacts";

const HomeStyled = styled.div`
    margin: 0 auto;
    padding: 8px 0;
    max-width: 1440px;
    width:95%;
    display: grid;
    grid-template-columns: 2fr 8fr 2fr;
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

    .contact-btn {
        padding:8px 16px;
        width: 80%;
        background-color: ${({theme})=>theme.colors.accent};
        border:none;
        border-radius: 4px;
        cursor:pointer;
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
    const [modalOpen, setModalOpen] = useState(false);
    const modalHandlerOpen = () => {
        setModalOpen(true); 
    }

    const modalHandlerClose = () => {
        setModalOpen(false);
    }

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
            <button className="contact-btn" onClick={modalHandlerOpen}>Contact</button>
            <Framework/>
        </aside>
        <footer className="footer">
            <Footer/>
        </footer>
        <Modal modalOpen={modalOpen} modalHandlerClose={modalHandlerClose} modalHandlerOpen={modalHandlerOpen}>
            <Contacts/>
        </Modal>
    </HomeStyled>
}

export default Home; 