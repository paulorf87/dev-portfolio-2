import styled from "styled-components";
import { engineer } from "../../styles/themes";


const IotSpecialArticleStyled = styled.div`
    margin: 0 auto; 
    max-width: 1440px;
    width: 70%;
    display: flex;
    flex-direction: column;
    border-top:1px solid #e5e5e5;
    padding-top: 32px;
    padding-bottom: 32px;

    img {
        object-fit: cover;
        margin-bottom: 16px;
    }

    h1 {
        margin-bottom: 16px;
    }
    p, h3 {
        text-align: left;
        line-height: 150%;
    }
    p {
        margin-bottom: 4px;
    }
    h2 {
        font-size: 42px;

    }
    h3 
    {
        margin: 16px 0;
        font-size: 24px;
    }
    h2 {
        margin-bottom: 32px;
    }
    span {
        color:${engineer.colors.accent}
    }
    
`

const IoTSpecialArticle = () => {

    const imgList = [
        "https://prmf-portfolio.s3.ap-southeast-2.amazonaws.com/iot-stack.jpg", 
        "https://prmf-portfolio.s3.ap-southeast-2.amazonaws.com/iot-board-legends.jpg"
     ]

    return <IotSpecialArticleStyled>
        <h2>A Simplified IoT Reference Model</h2>
        <img src={imgList[0]} alt=""/>
        <img src={imgList[1]} alt=""/>
        <p>
            There are many reference models when the subject is Internet of Things (IoT), namely, IoT World Forum Architecture (IoT WF), 
            oneM2M IoT Standardized Architecture, Internet of Things-Architecture (IoT-A), between others. The objective of these models 
            is to simplify and standardize IoT systems and data flow, from sensor to application, diving processes in layers with specific 
            functionalities. However, differences between these models might generate confusion even in technical professional. Therefore, 
            I like to simplify the IoT stack by compressing it in three main layers present in every smart system: Things, Communications 
            and Application. This is called by CISCO “The Core IoT Functional Stack” and it will be used as reference in further examples.

        </p>
        <section id="things">
            <h3>Layer 1: Things</h3>
            <p>

                The first layer is very straight forward, including devices such as sensors and actuators.  
                Sensors are devices used to measure a physical property (e.g. temperature, 
                distance, position, etc) and convert it into an output signal. 
                Actuators, on the other hand, are responsible for controlling a mechanism or 
                system through action/movement (e.g. motors, valves, cylinders, etc). In the example image, 
                Layer 1 includes a temperature sensor <span>(#1)</span> which temperature values to the next layer via LoRa 
                wireless technologies. Also, we can see an optical sensor <span>(#3)</span> and a linear actuator <span>(#2)</span>. 
                A common application for these two is an industrial elevator, where the optical sensor sends a signal to the 
                PLC (Programable Logic Controller) which stops the elevator when the load reaches a pre-defined position. 
            </p>
        </section>
        <section id="communication network">
            <h3>Layer 2: Communication Network</h3>
            <div>
                <p>
                    It would be fair to say that the great change which enabled in the last decades is due to the evolution 
                    of the communications network. Wired and wireless communications technologies evolved to the point where 
                    we can have systems with thousands of devices comminicating with each other in fractions of seconds. Therefore, 
                    the main job of Layer 2 is to transfer data accross the system, from the sensors and actuators to the data centre
                    or applications. Due to the complexity and difference of technologies used in this layer, we can subdivide it in four 
                    distinct sub-layers.  
                </p>
                <p><span>Sub #1 Access sublayer:</span> Responsible for connecting things to the communication gatweays (see Sub #2). 
                    It is also called "last-mile network" because it encompass the last part of network connection before reaching 
                    the smart devices. 
                    Many of these devices are power restricted, meaning that they have to operate in very low levels of energy consumption, 
                    possibly using batteries as their power source. For example, temperature sensors (such as #1) could be spread in remote 
                    rural areas in order to monitor weather conditions, where neither the power grid and common WiFi technologies are an 
                    option. Therefore, it is of strategic importance for IoT that wireless technologies with higher efficiency are constantly developed.
                    Some examples are <a href="https://lora-alliance.org/about-lorawan/" target={"_blank"}
                    rel="noreferrer">LoRa WAN</a> and <a href="https://en.wikipedia.org/wiki/WiMAX" target={"_blank"} rel="noreferrer">WiMAX (IEEE 802.16)</a>, 
                    for long distances, <a href="https://en.wikipedia.org/wiki/Zigbee"target={"_blank"} rel="noreferrer"> Zigbee</a> and 
                    <a href="https://en.wikipedia.org/wiki/Z-Wave" target={"_blank"} rel="noreferrer"> Z-Wave</a>, 
                    for smart homes and <a href="https://en.wikipedia.org/wiki/Bluetooth_Low_Energy" target={"_blank"} rel="noreferrer"> BLE (Low Energy Bluetooth)</a> for personal range applications such as smart watches and other gadgets. 
                </p>
                <p>
                    <span>Sub #2 Gateways and Backhaul:</span> Imagine that the data comming from the multiple gateways <span>(#4)</span> will
                    be merged, then transported through the network backhaul until it reaches the data centre (or Cloud over the Internet). Hence, 
                    technologies with high data throughput, such as Ethernet and WiFi (2.4Ghz/5Ghz), are commonly used in this sublayer. 
                    It is worthy to mention that some IIoT systems have edge devices, which will send information over the internet or respond 
                    directly to the smart devices on "Layer 1" according to pre-defined rules. 
                </p>

                <p>
                    <span>Sub #3 Network Transport:</span> This sublayer is responsible for the network transport protocols under the hood, 
                    that will fragment data into packets and transport to their destination, via 
                    <a href="https://en.wikipedia.org/wiki/Transmission_Control_Protocol" target={"_blank"} rel="noreferrer">TCP (Transmission Control Protocol)</a> or 
                    <a href="https://en.wikipedia.org/wiki/User_Datagram_Protocol" target={"_blank"} rel="noreferrer">UDP (User Datagram Protocol)</a>, according to their IP 
                    address.  
                </p>

                <p>
                    <span>Sub #4 IoT Management:</span>  This final sublayer encompasses the protocols used by the smart devices 
                    to communicate with the rest of the IoT System. In other words, it regards the standards that an application will use 
                    to decipher the data sent by a smart sensor. 
                    For example, we daily use HTTP or HTTPS to communicate to internet servers so our computer are able to request and 
                    interpret website informations. However, because HTTP(S) are protocols that require a significant amount of memory, 
                    they are not vastly used directly in IoT applications. On the other hand, protocols such as <a href="https://mqtt.org/" target={"_blank"} rel="noreferrer">
                    MQTT(Message Queuing Telemetry)</a> are getting their space in the IoT world.   
                </p>

            </div>
        </section>
        <section id="application">
            <h3>Layer 3: Application</h3>
            <p>
                Finally, after travellig through the whole Network Communication Layer, the data is ready to be consumed by an application. 
                There are two main types of application: Control and Analytics. In Control Applications, data will be analysed according 
                to programmed rules and a response will be given to the system to change its behavior. For example, the SCADA (Supervisory 
                Control and Data Aquisition) in a foundry might turn off the burners when they reach certain temperature. 
                In contrast, an Analytics application, 
                will convert the data into relevant information, in the form of a graph for example, to help in the decision making process.   
            </p>
        </section>
        
    </IotSpecialArticleStyled>
}

export default IoTSpecialArticle; 