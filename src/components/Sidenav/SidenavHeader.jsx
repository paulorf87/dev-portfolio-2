import styled from "styled-components";

import Avatar from "../General/Avatar";
import ThemeSelector from "../General/ThemeSelector";
import SocialMedia from "../General/SocialMedia";

import { CvIcon, GitHubIcon, LinkedInIcon } from "./Icons";

const SidenavHeaderStyled = styled.div` 
    width : 100%;
    min-height:350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 32px;
    padding-bottom:32px;
    
    h2,h3 {
        font-weight: 700;
        span {
            color:${({theme})=>theme.colors.accent}
        }
    }
`

const SidenavHeader = () => {

    return <SidenavHeaderStyled>
        <h2>Paulo <span>Ferro</span></h2>
        <Avatar size={"100px"} src={"https://pickaface.net/gallery/avatar/Eminero5439f53ce66cd.png"}/>
        <ThemeSelector/>
        <SocialMedia>
            <LinkedInIcon/>
            <GitHubIcon/>
            <CvIcon/>
        </SocialMedia>
    </SidenavHeaderStyled>
}

export default SidenavHeader; 