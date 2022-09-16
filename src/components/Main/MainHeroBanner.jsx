import styled from "styled-components";

const MainHeroBannerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 250px;
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
        background:
        linear-gradient(to bottom right, 
        ${({theme})=>theme.colors.accent}, 
        ${({theme})=>theme.colors.dark});
        filter: brightness(.5);
    }
`

const ContentStyled = styled.div`
    position: absolute;
    width: fit-content;
    z-index: 10;
    padding:32px;
    display: flex;
    h2,h3,p {color:white; margin-bottom:16px}
    p {
        line-height: 130%;
    }
    .banner-img {
        flex-grow: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            position: absolute;
            top:-10px;
            right: 0;
            bottom:0;
            left: 0;
            margin: auto auto;
            width: 350px;
        }
    }    
`

const MainHeroBanner = ({info}) => {
      return <MainHeroBannerStyled>
            <ContentStyled>
                <div style={{width:"50%"}}>
                    <h2>{info["intro-title"]}</h2>
                    <h3>{info["intro-role"]}</h3>
                    <p>{info["intro-message"]}</p>
                </div>
                <div className="banner-img">
                    <img src={info["background-image"]} alt=""/>
                </div>
            </ContentStyled>
        </MainHeroBannerStyled>
}

export default MainHeroBanner;