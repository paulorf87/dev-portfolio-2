import { useSelector } from "react-redux";
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
    const {developer, engineer} = useSelector(state=>state.projects);
    const joinAllProjects = (projectArrayA, projectArrayB) => {
        return projectArrayA.concat(projectArrayB);  
    } 
    const allProjects = joinAllProjects(developer, engineer);

    return <ProjectGridStyle>
        {allProjects.map((project, index)=>(
            <ProjectCard
                key={index}
                title={project.title}
                intro={project.intro}
                imgUrl={project.imgUrl}
                link={project.link}
                tags={project.tags}
            />
        ))}
    </ProjectGridStyle>
}

export default ProjectGrid;