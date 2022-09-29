import styled from "styled-components";
import { CvIcon, GitHubIcon, LinkedInIcon } from "./Icons";


const SocialMediaStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    a {
        display: flex;
        align-items: center;
        width: 40px;
    }
    path {
        fill:${({theme})=>theme.colors.accent}
    }
`

const SocialMedia = () => {
    return <>
        <SocialMediaStyled>
                <a href="https://www.linkedin.com/in/paulorf87" target="blank">
                    <LinkedInIcon/></a>
                <a href="https://github.com/paulorf87" target="blank">
                    <GitHubIcon/>
                </a>
                <a href="https://prmf-portfolio.s3.ap-southeast-2.amazonaws.com/dev-resume.pdf" target="blank">
                    <CvIcon/>
                </a>
        </SocialMediaStyled>
    </> 
}

export default SocialMedia; 