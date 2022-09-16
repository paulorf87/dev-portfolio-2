import styled from "styled-components";

import Avatar from "../General/Avatar";
import ThemeSelector from "../General/ThemeSelector";
import Strengths from "../Strengths/Strengths";


const SidenavHeaderStyled = styled.div` 
    width : 100%;
    min-height:350px;
    display: flex;
    flex-direction: column;
    gap:12px;
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
        <Strengths/>
        
    </SidenavHeaderStyled>
}

export default SidenavHeader; 