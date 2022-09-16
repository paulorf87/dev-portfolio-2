import styled from "styled-components";

import { CvIcon, GitHubIcon, LinkedInIcon } from "./Icons";


const SocialMediaStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    * {
        fill:${({theme})=>theme.colors.accent};
        width: 40px;
        margin-left: 8px;
        &:hover{
            fill:#888;
            cursor: pointer;
        }
    }
`

const SocialMedia = () => {
    return <>
        <h3>Links</h3>
        <SocialMediaStyled>
                <LinkedInIcon/>
                <GitHubIcon/>
                <CvIcon/>
        </SocialMediaStyled>
    </> 
}

export default SocialMedia; 