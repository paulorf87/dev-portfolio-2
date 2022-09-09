import styled from "styled-components";

const ProjectCardStyled = styled.div`
    position: relative;
    box-shadow: 0 0 8px #333;
    border-radius: 5px;
    overflow: hidden;
    min-height: 300px;
    .content {
        position: absolute;
        z-index: 10;
        color:white;
        padding:16px;
    }
    .bg-image {
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        color:white;

        background-size: fill;
        background-repeat: no-repeat;
        background-position: center;
        filter: brightness(.5);
    }
`

const ProjectCard = ({imgUrl}) => {
    return <ProjectCardStyled>
        <div className="content">
            This is a Card
        </div>
        <div className="bg-image" style={{background:`url(${imgUrl})`}}>
        </div>
    </ProjectCardStyled>
}

export default ProjectCard; 