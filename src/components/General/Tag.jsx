import styled from "styled-components";
import { engineer, developer } from "../../styles/themes";

const TagStyled = styled.span`
    color:#fff;
    padding:4px 6px;
    border-radius : 4px;
    height: fit-content;
`
const Tag = ({children, topic})=>{

    const getTopicColor = (topic) => {
        switch(topic){
            case "engineer":
                return engineer.colors.tertiary;
            case "developer":
                return developer.colors.tertiary;
            default:
                return "#555"
        }
    }
    return <TagStyled style={{backgroundColor:getTopicColor(topic)}}>
        {children}
    </TagStyled>
}

export default Tag;