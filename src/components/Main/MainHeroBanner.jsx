import styled from "styled-components";

const MainHeroBannerStyled = styled.div`
    display: flex;
    width: 100%;
    height: 325px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    &::before{
        content: "";
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background:${({theme})=>theme.colors.accent};
        filter: brightness(0.35);
        opacity: 0.75;
    }
`

const ContentStyled = styled.div`
    position: absolute;
    width: fit-content;
    z-index: 10;
    padding:32px;
    display: flex;
    h2,h3,p {color:white; margin-bottom:16px}
    
`

const MainHeroBanner = ({info}) => {
      return <MainHeroBannerStyled style={{
                background:`url(${info["background-image"]})`}}>
            <ContentStyled>
                <div style={{width:"50%"}}>
                    <h2>{info["intro-title"]}</h2>
                    <h3>{info["intro-role"]}</h3>
                    <p>{info["intro-message"]}</p>
                </div>
                <div style={{flexGrow:1}}>
                </div>
            </ContentStyled>
        </MainHeroBannerStyled>
}

export default MainHeroBanner;