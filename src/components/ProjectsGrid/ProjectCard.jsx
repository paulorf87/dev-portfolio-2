import styled from "styled-components";
import Tag from "../General/Tag";
import { Link } from "react-router-dom";

const ProjectCardStyled = styled.div`
    position: relative;
    overflow: hidden;
    min-height: 300px;
    border-radius: 10px;
    box-shadow: 0 0 8px #222;
    .card-tags {
        padding:8px;
        position: absolute;
        top:0;
        left: 0;
        z-index: 10;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        display: flex;
        flex-wrap: wrap;
        gap:8px;
    }
    .card-content {
        .card-content-header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap:16px;
        }
        h3 {
            color:#fff;
        }
        position: absolute;
        display: flex;
        flex-direction: column;
        gap:16px;
        width: 100%;
        bottom:0;
        left: 0;
        z-index: 10;
        background-color:rgba(0,0,0,0.75);
        color:white;
        padding:16px;
        height: 100px;
        transition: height .25s ease;
        &:hover{
            height: 40%;
        }
    }
    .bg-image {
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        filter: brightness(.75);
    }
    .card-link {
        text-decoration: none;
        background: rgba(255,255,255,.25);
        padding: 2px 16px;
        border-radius: 5px;

        &:hover{
            background: rgba(255,255,255,.5);
            transform: scale(1.1);
        }
    }
    p{
        opacity: .85;
    }
`

const ProjectCard = ({imgUrl, link, title, intro, tags}) => {
    const getBackgroundImg = (imgUrl) => {
        if(!imgUrl) return "https://exent.co/wp-content/uploads/placeholder.gif"; 
        return imgUrl;
    }

    return <ProjectCardStyled>
        <div className="card-tags">
            {tags 
            ? tags.map((tag, index)=>(
                <Tag key={index} topic={tag.topic}>
                    {tag.tag}
                </Tag>
            ))
            : null}
        </div>
        <div className="card-content">
            <div className="card-content-header">
                <h3 className="card-title">{title}</h3>
                <Link className="card-link" to={link}>View</Link>
            </div>
            <p className="card-intro">{intro}</p>
        </div>
        <div className="bg-image" 
            style={{background:`url(${getBackgroundImg(imgUrl)})`, 
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"}}>
        </div>
    </ProjectCardStyled>
}

export default ProjectCard; 