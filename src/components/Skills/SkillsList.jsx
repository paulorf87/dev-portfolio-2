import styled from "styled-components";
import { useSelector } from "react-redux";

import SkillsGroup from "./SkillsGroup";

const SkillsListStyled = styled.ul`
    
`
const SkillsList = () => {
    const {skills} = useSelector(state=>state.data); 
    return <>
        <h2>Skills</h2>
        <SkillsListStyled>
            {skills.map((skill, index)=>(<SkillsGroup skillGroup={skill} key={index}/>))}            
        </SkillsListStyled>
    </>
}

export default SkillsList;
