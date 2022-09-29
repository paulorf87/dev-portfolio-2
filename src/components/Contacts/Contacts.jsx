import styled from "styled-components";

const ContactStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap:16px;
    height: 100%;

    h2 {
        color:#333;
    }
    p {
        margin-top: 16px;
        color:#333;
    }
    ul {
        list-style-type: none;
        margin-top: 16px;
        li {
            color:#333;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
            img {
                max-width: 24px;
            }
        }
    }
    
`
const Contacts = () => {
    return <ContactStyled>
        <h2>Contact</h2>
        <p>If you would like to know more about my work you can contact me at:</p>
        <ul>
            <li><img src="/images/phone.svg" alt=""/>+61 416 292 958</li>
            <li><img src="/images/mail.svg" alt=""/>paulo@prmf-dev.com</li>
        </ul>
    </ContactStyled>
}

export default Contacts; 