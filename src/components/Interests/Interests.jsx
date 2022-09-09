
import styled from "styled-components"; 

import InterestGroup from "./InterestGroup";

const InterestsStyled = styled.div`
    height:200px;
    border-radius: 10px;
    background-color: white;
    .content {
        width: 100%;
        z-index: 10;
        padding: 16px;
    }
`

const Interests = () => {
    return <InterestsStyled>
        <div className="content">
            <InterestGroup/>
            <InterestGroup/>
            <InterestGroup/>
        </div>
    </InterestsStyled>
}


export default Interests; 