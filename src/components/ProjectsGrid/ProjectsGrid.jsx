import styled from "styled-components";

import ProjectCard from "./ProjectCard";

const ProjectGridStyle = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:16px;
`
const ProjectGrid = () => {
    return <ProjectGridStyle>
        <ProjectCard imgUrl={"https://media.istockphoto.com/photos/processor-chip-tech-environment-blockchain-concept-picture-id1347310666?b=1&k=20&m=1347310666&s=170667a&w=0&h=WHT_LTQSjwn-gwA34mlAjSwhVPjA2zIXjOMnXequQLA="}/>
        <ProjectCard imgUrl={"https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/09/shutterstock_1152185600-1440x1008-1-857x600.jpg"}/>
        <ProjectCard imgUrl={"https://www.valueresearchonline.com/content-assets/images/50971_20220623-tech__w660__.jpg"}/>
        <ProjectCard imgUrl={"https://static01.nyt.com/images/2020/01/01/business/01Techfix-print/01Techfix-print-articleLarge.gif?quality=75&auto=webp&disable=upscale"}/>
        <ProjectCard imgUrl={"https://img.freepik.com/premium-photo/tech-devices-icons-connected-digital-planet-earth_117023-449.jpg?w=2000"}/>
        <ProjectCard imgUrl={"https://img.etimg.com/thumb/msid-88634316,width-525,height-393,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg"}/>
    </ProjectGridStyle>
}

export default ProjectGrid;