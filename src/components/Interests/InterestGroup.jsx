import styled from "styled-components"; 

const color = "orange";

const InterestGroupStyled = styled.div`
    display: inline-block;
    margin-top: 4px;
    margin-right: 2px;
    background: ${color};
    padding:8px;
    border-radius:10px;
    .group {
        list-style-type: none;
        display: flex;
    }
    .interest {
        margin-right: 8px;
        background-color: #fff;
        padding:0 4px;
        border-radius: 4px;
    }
`; 

// MOCK DATA
const mockInterests = [
    "Web-Development",
    "Mobile-Development",
    "Cybersecurity"
]

const InterestGroup = () => {
    return <InterestGroupStyled>
        <ul className="group">
            {mockInterests.map((interest, index)=>(<li className="interest" key={index}>
                {interest}
            </li>))}
        </ul>
    </InterestGroupStyled>    
}

export default InterestGroup;