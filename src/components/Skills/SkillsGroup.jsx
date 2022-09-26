import styled from "styled-components";

const SkillsGroupStyled = styled.div`
    display: flex;
    flex-direction: column;
    
    gap:8px;
    p {
        color:${({theme})=>theme.text.primary};
    }
    .title {
        margin-bottom        :4px;
        color:${({theme})=>theme.text.primary}; 
        font-weight: bold;
        opacity: 70%;
    }
    .progress {
        position: relative;
        height: 8px;
        border-radius: 5px;
        overflow: hidden;
        .total {
            width: 100%;
            height: 100%;
            background-color: #888;
            position: absolute;
            top:0;
            left: 0;
        }   
        .complete {
            height: 100%;
            background-color:${({theme})=>theme.colors.accent};
            position: absolute;
            top:0;
            left: 0;
        }           
    }
`

const SkillsGroup = ({skillGroup}) => {
    return <SkillsGroupStyled>
        <div className="title">
            <p>
                {skillGroup.name}
            </p>
        </div>
        <div className="progress" >
            <div className="total"></div>
            <div className="complete" style={{width:`${skillGroup.score*100}%`}}></div>
        </div>
        <ul className="skills"></ul>        
    </SkillsGroupStyled>
}

export default SkillsGroup;