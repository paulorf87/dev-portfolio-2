import styled from "styled-components";

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
        margin-bottom: 16px;
    }
    img {
        margin-bottom: 32px;
    }
    p {
        max-width: 900px;
        text-align: justify;
        margin: 0 auto;
        margin-bottom: 32px;
    }
`

const IoTHeader = () => {
    return <IoTHeaderStyled>
        <h1> Industry 4.0 | Smart Manufacturing | Industrial IoT</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim dolor quisquam omnis laboriosam tempore qui libero nesciunt quaerat porro.</h2>
        <img src="https://blog.se.com/wp-content/uploads/2021/04/SB-Blog-IT-OT-Fig-1.jpg-1024x462.png" alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, mollitia consectetur iure recusandae distinctio deleniti voluptatum voluptates, delectus unde sit, nihil impedit voluptatibus et officia quo! Est autem maiores optio quibusdam, alias eveniet, molestias id delectus dicta rem tenetur laudantium?</p>
    </IoTHeaderStyled>
}

export default IoTHeader; 