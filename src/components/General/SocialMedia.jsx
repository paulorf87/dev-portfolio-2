import styled from "styled-components";
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

const SocialMedia = ({children}) => {
    return <SocialMediaStyled>
        {children}
    </SocialMediaStyled>
}

export default SocialMedia; 