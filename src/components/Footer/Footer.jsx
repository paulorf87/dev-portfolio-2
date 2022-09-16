import styled from "styled-components";

const FooterStyled = styled.footer`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    &::before {
        content: "";
        position: absolute;
        top:0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top left,
            ${({theme})=>theme.colors.accent}, 
            ${({theme})=>theme.colors.dark} 
        );
        filter: brightness(.35);
    }
    .copyright{
        color:#fff;
        z-index: 10;
        text-align: center;
    }
`

const Footer = () => {
    return <FooterStyled>
        <p className="copyright">
            © [name of rightsholder or rightsholders] [publication year]: e.g.  © XYZ Press and contributors 2022
        </p>
    </FooterStyled>
}

export default Footer; 