import styled from "styled-components";

import CustomIcon from "../CustomIcon/CustomIcon";

const StrengthsStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:8px;
    padding: 8px;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top:0;
        width: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.5;
        border-radius: 5px;
    }
    .strength {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        z-index: 10;
    }
    .icon {
        width: 35px;
        height: 35px;
        background: url("/images/engine.png");
        background-size: 80%;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #27fab0;
        border-radius: 50%;
        margin-bottom: 4px;
        border: 1px solid #ccc; 
    }
    p {
        color:#fff;
        font-size: clamp(12px, .8vw, 16px);
    }
    
`

const Strengths = () => {
    return <>
        <h3 style={{textAlign:"left", 
        width:"100%", marginBottom:8}}>Strengths</h3>
        <StrengthsStyled>
            <div className="strength">
                <CustomIcon src={"/images/engine.svg"}/>
                <p>Reverse Engineering</p>
            </div>
            <div className="strength">
                <CustomIcon src={"/images/book.svg"}/>
                <p>Fast Learning</p>
            </div>
            <div className="strength">
                <CustomIcon src={"/images/idea.svg"}/>
                <p>Curiosity</p>
            </div>
        </StrengthsStyled>
    </>

}

export default Strengths;