import styled from "styled-components"; 

const SidenavMainStyled = styled.div`
    width: 100%;
    height: 100%;
    background: ${({theme})=>theme.colors.secondary};
    display: flex;
    flex-direction: column;
    padding:32px;
    margin-top: 32px;
`; 

const SidenavMain = ({children}) => {
    return <SidenavMainStyled>
        {children}
    </SidenavMainStyled>
}

export default SidenavMain;