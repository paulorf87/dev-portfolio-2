import styled from "styled-components";
import { engineer } from "../../styles/themes";

const IoTHeaderStyled = styled.header`
    padding: 32px;
    h1 {
        font-size: 48px;
        margin-bottom: 16px;
        color:#e5e5e5 !important; 
    }
    h2 {
        font-weight: 300;
        max-width: 1000px;
        margin: 0 auto;
        margin-bottom: 16px;
        text-align: justify;
        color:#e5e5e5 !important; 
    }
    img {
        margin-bottom: 32px;
    }
    p {
        max-width: 900px;
        text-align: justify;
        margin: 0 auto;
        margin-bottom: 16px;
    }
    span {
        color:${engineer.colors.accent};
    }

    .header-images {
        max-width: 70%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        gap: 8px;
    }
`

const IoTHeader = () => {
    return <IoTHeaderStyled>
        <h1> Industry 4.0 | Smart Manufacturing | Industrial IoT</h1>
        <h2>
            <span>Industrial Internet of things (IIoT) </span>
            is the interconnection between 
            <span> Operational Technology (OT) </span>, 
            meaning the operation of physical processes and 
            machinery, 
            and <span>Information Technology (IT)</span>, which 
            corresponds to the data and the flow of digital information. 
        </h2>
        <div className="header-images">
            <img src="/images/iot.png" alt=""/>
        </div>
        <p>In the following sections I will be sharing some some IIoT projects and applications, including concepts such as:
            <span> IIoT Architecture, Real Time Monitoring Systems, Engineering Simulation applied to IIoT, 
                Wireless Communication Protocols</span>, and others.
        </p> 
    </IoTHeaderStyled>
}

export default IoTHeader; 