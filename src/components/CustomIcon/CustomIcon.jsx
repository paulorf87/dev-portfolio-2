import styled from "styled-components";

const CustomIconStyled = styled.div`
    height: 50px;
    width: 50px;
    max-width: 100%;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:8px;
`

const CustomIcon = ({src}) => {
    return <CustomIconStyled>
        <img src={src} alt="custom icon"/>
    </CustomIconStyled>
}

export default CustomIcon;