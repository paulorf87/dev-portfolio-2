import styled from "styled-components";
import { useSelector } from "react-redux";

import SkillsGroup from "./SkillsGroup";

const SkillsListStyled = styled.ul`
    margin-top    : 16px;
`
const SkillsList = () => {
    const {skills} = useSelector(state=>state.data); 
    return <>
        <h3>Skills</h3>
        <SkillsListStyled>
            {skills.map((skill, index)=>(<SkillsGroup skillGroup={skill} key={index}/>))}            
        </SkillsListStyled>
    </>
}

export default SkillsList;
