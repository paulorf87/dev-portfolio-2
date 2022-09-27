import styled from "styled-components";

const IoTSectionStyled = styled.section`
    padding:32px;
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    border-top:1px solid #e5e5e5; 
    border-bottom: 1px solid #e5e5e5;

    h2, h3, p {
        color:#e5e5e5 !important;
    }

    h2 {
        margin-bottom: 8px;
        font-size: 32px;
    }
    h3 {
        font-weight: 300;
        margin-bottom: 32px;
    }
    img, video {
        margin-bottom: 32px;
    }
    p {
        color: #e5e5e5;
        text-align: justify;
        line-height: 150%;
    }
`

const IoTSection = ({videoUrl, imgUrl, title, subtitle,  text}) =>{
    return <IoTSectionStyled>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        { videoUrl 
        ? <video src={videoUrl} alt="" controls/>
        : <img src={imgUrl} alt=""/>
        }
        <p>{text}</p>
    </IoTSectionStyled>
}

export default IoTSection;