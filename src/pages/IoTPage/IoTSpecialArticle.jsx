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
`

const IoTSpecialArticle = () => {
    return <IotSpecialArticleStyled>
        <h1>An Example of a Simple IIoT Architecture</h1>
        <img src="https://www.tibco.com/sites/tibco/files/media_entity/2020-05/IoT.png" alt=""/>
        <section>
            <img src="https://www.eetasia.com/wp-content/uploads/sites/2/2022/05/iot-devices_cover.jpg?w=600&h=400&crop=1" alt=""/>
            <div className="iot-article-text">
                <h3>IotWF Architecture Model</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum molestias, quaerat dolore suscipit fuga fugit temporibus nihil tenetur odio, excepturi rem reiciendis molestiae amet fugiat, natus ea vitae magni perspiciatis.</p>
            </div>
        </section>

        <section>
            <div className="iot-article-text">
                <h3>IotWF Architecture Model</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum molestias, quaerat dolore suscipit fuga fugit temporibus nihil tenetur odio, excepturi rem reiciendis molestiae amet fugiat, natus ea vitae magni perspiciatis.</p>
            </div>
            <img src="https://www.eetasia.com/wp-content/uploads/sites/2/2022/05/iot-devices_cover.jpg?w=600&h=400&crop=1" alt=""/>
        </section>

        <section>
            <img src="https://www.eetasia.com/wp-content/uploads/sites/2/2022/05/iot-devices_cover.jpg?w=600&h=400&crop=1" alt=""/>
            <div className="iot-article-text">
                <h3>IotWF Architecture Model</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum molestias, quaerat dolore suscipit fuga fugit temporibus nihil tenetur odio, excepturi rem reiciendis molestiae amet fugiat, natus ea vitae magni perspiciatis.</p>
            </div>
        </section>

    </IotSpecialArticleStyled>
}

export default IoTSpecialArticle; 