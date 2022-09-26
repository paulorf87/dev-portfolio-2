import styled from "styled-components";
import {engineer} from "../../styles/themes";

// CUSTOM COMPONENTS
import IoTHeader from "./IoTHeader";
import IoTSection from "./IotSection";

// DATA
import sections from "./data/sections.json";

const AutomationPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    min-height: 100vh;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    background-color: ${engineer.colors.dark};
    color:${engineer.text.primary};
    .iot-video {
        width: 80%;
    }
    .iot-img-legend {
        color:#ddd;
    }
    .iot-main {
        width: 100%;
        grid-template-columns: repeat(4, 1fr);        
        .iot-content {
            grid-area: content;
        }
    }
`

const IoTPage = () => {
    return <AutomationPageStyled>
        <IoTHeader/>
        <main className="iot-main">
            <div className="iot-content">
                {sections.map((section)=>{
                    return <IoTSection key={section.id}
                    videoUrl={section.videoUrl}
                    imgUrl={section.imgUrl}
                    title={section.title}
                    subtitle={section.subtitle}
                    text={section.text}/>
                })}
            </div>
        </main>
    </AutomationPageStyled>
}

export default IoTPage; 