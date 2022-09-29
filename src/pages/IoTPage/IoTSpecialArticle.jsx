import styled from "styled-components";


const IotSpecialArticleStyled = styled.div`
    margin: 0 auto; 
    max-width: 1440px;
    width: 70%;
    display: flex;
    flex-direction: column;
    border-top:1px solid #e5e5e5;
    padding-top: 32px;
    padding-bottom: 32px;

    p {
        text-align: justify;
    }

    img {
        object-fit: cover;
        object-position: top;
    }

    h1 {
        margin-bottom: 16px;
    }

    section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:16px;
        margin-top: 32px;
        .iot-article-text {
            grid-column: span 2;
            h3, p{
                margin-top: 8px;
                text-align: justify;
            }
        }
    }

    .iot-image {
        cursor:pointer;
        transition: transform .25s ease-in;
        &:hover{
            transform:scale(1.05);
        }
    }
    .modal-img {
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`

const IoTSpecialArticle = () => {

    const imgList = [
       "https://thumbs.gfycat.com/ShadowyQuarrelsomeFlatcoatretriever-max-1mb.gif", 
       "https://miro.medium.com/max/707/1*PifTpLdBSxXykrU_fkhviA.jpeg",
       "https://www.embeddedpi.com/images/IoT-Backend-Service-Diagram.png"
    ]

    return <IotSpecialArticleStyled>
        <h1>An Example of a Simple IIoT Architecture</h1>
        <img src="https://storage.googleapis.com/blogs-images/ciscoblogs/1/Wimage2.jpg" alt=""/>
        <p>IoT systems have many reference models. One of them is the IoTWF (IoT World Forum), 
        which separates the architecture in 7 layers. This model represents the information flow from the field devices collecting 
        raw data, until the application of information as a tool in the decision making process.</p>
        <img src="/images/iot-board.jpg" alt=""/>
        <p> Above there is a prototype system that I use to represent the 7 layers of the IoTWF model. 
        It has at least one device representing each layers from 1 to 6, since layer 7 is more abstract and 
        depends on the business processes of each company. I will better explain each layer in the sections bellow. </p>
        <section>
            <img src={imgList[0]} className="iot-image" alt=""/>
            <div className="iot-article-text">
                <h3>Layer 1 - Physical Devices and Controllers</h3>
                <p>
                    The edge computing tasks are executed by the "edge device", which is a device with some computational power
                    used to evaluate, filter and prepare the data for the storage stage.
                </p>
            </div>
        </section>

        <section>
            <div className="iot-article-text">
                <h3>Layer 2 - Connectivity</h3>
                <p> The connectivity laywer includes the communication devices responsible for 
                    transfering reliable and timely  information through the system. 
                    The information can be transmited via cable or wireless means, called "protocols", 
                    where some of the most popular are: <span>Ethernet, WiFi, ZigBee, LoRa</span>.
                    The decision of which protocols to use in the connectivity layer depends of factors 
                    such as distance between elements, speed, data trasnference rates, between others.</p> 
            </div>
            <img src={imgList[1]} alt="" className="iot-image"/>
        </section>

        <section>
            <img src={imgList[2]} alt="" className="iot-image"/>
            <div className="iot-article-text">
                <h3>Layer 3 - Edge Computing</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum molestias, quaerat dolore suscipit fuga fugit temporibus nihil tenetur odio, excepturi rem reiciendis molestiae amet fugiat, natus ea vitae magni perspiciatis.</p>
            </div>
        </section>

        <section>
            <div className="iot-article-text">
                <h3>Layer 4 - Data Accumulation</h3>
                <p>Capture data and store. Event-based data to query-based processing. Example: SQL Databases.</p>
            </div>
            <img src={imgList[3]} alt="" className="iot-image"/>
        </section>

        <section>
            <img src={imgList[4]} alt="" className="iot-image"/>
            <div className="iot-article-text">
                <h3>Layer 5 - Data Abstraction </h3>
                <p>Consolidates data into a single place or multiple data stores according to the data strategy. 
                    Example: AWS Redshift (Data Warehouse).</p>
            </div>
        </section>

        <section>
            <div className="iot-article-text">
                <h3>Layer 6 - Application</h3>
                <p> Interpret data using software application. Important information for the decision making process.</p>
            </div>
            <img src={imgList[3]} alt="" className="iot-image"/>
        </section>

        <section>
            <img src={imgList[4]} alt="" className="iot-image"/>
            <div className="iot-article-text">
                <h3>Layer 7 - Collaboration & Processes </h3>
                <p>What to do with the information obtaining until now? Business processes, etc.</p>
            </div>
        </section>
    </IotSpecialArticleStyled>
}

export default IoTSpecialArticle; 