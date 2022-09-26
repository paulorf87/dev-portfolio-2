import styled from "styled-components";
import { engineer } from "../../styles/themes";

const IoTHeaderStyled = styled.header`
    color:#e5e5e5;
    padding    : 32px;
    h1 {
        font-size: 48px;
        margin-bottom: 16px;
    }
    h2 {
        font-weight: 300;
        max-width: 1000px;
        margin: 0 auto;
        margin-bottom: 16px;
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
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
    }
`

const IoTHeader = () => {
    return <IoTHeaderStyled>
        <h1> Industry 4.0 | Smart Manufacturing | Industrial IoT</h1>
        <h2>
            In this page I share some of my most recent projects in <span>Industrial Internet of things (IIoT)</span>
            which is the combination between <span> Operational Technology (OT)</span> and <span>Information Technology (IT).</span>
        </h2>
        <div className="header-images">
            <img src="https://www.coolfiresolutions.com/wp-content/uploads/2020/09/difference-it-ot.gif" alt=""/>
            <img src="https://www.coolfiresolutions.com/wp-content/uploads/2020/09/difference-it-ot.gif" alt=""/>
        </div>
        <p>IIoT uses some of the most modern technologies giving the following benefits: <span> + productivity, + efficiency, + quality, + uptime, + supply chain integration, + revenue streams, - costs, - waste, - lead times, - time to market. </span></p> 
        <p> Some enabling technologies are: <span>Wireless Communication Protocols, Smart Sensors, Edge Computing devices, Real Time Monitoring Systems, Computer Simulation, Machine Learning, 
            Cloud Computing.</span></p>
    </IoTHeaderStyled>
}

export default IoTHeader; 