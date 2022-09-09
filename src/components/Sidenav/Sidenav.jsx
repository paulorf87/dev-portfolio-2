import styled from "styled-components";

import SidenavHeader from "./SidenavHeader";
import SidenavMain from "./SidenavMain";
import SkillsList from "../Skills/SkillsList";

const SidenavStyled = styled.aside`
    position    : fixed;
    top:32px;
    left: 32px;
    bottom:32px;
    width: 300px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Sidenav = () => {
    return <SidenavStyled>
        <SidenavHeader/>
        <SidenavMain>
            <SkillsList/>
        </SidenavMain>
    </SidenavStyled>
}

export default Sidenav;