import styled from "styled-components";
import Tag from "../../../components/General/Tag";

const SinglePageCardStyled = styled.a`
    position: relative;
    overflow: hidden;
    min-height: 300px;
    border-radius: 10px;
    box-shadow: 0 0 8px #222;
    transition: transform .2s ease-in;
    &:hover{
        transform: scale(1.025);
    }
    .card-tags {
        padding:8px;
        position: absolute;
        bottom:0;
        left: 0;
        z-index: 10;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        display: flex;
        flex-wrap: wrap;
        gap:8px;
    }
    .bg-image {
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
    }
`

const SinglePageCard = ({imgUrl, link, tags}) => {
    const getBackgroundImg = (imgUrl) => {
        if(!imgUrl) return "https://exent.co/wp-content/uploads/placeholder.gif"; 
        return imgUrl;
    }

    return <SinglePageCardStyled href={link}>
        <div className="card-tags">
            {tags 
            ? tags.map((tag, index)=>(
                <Tag key={index} topic={tag.topic}>
                    {tag.tag}
                </Tag>
            ))
            : null}
        </div>
        <div className="bg-image" 
            style={{background:`url(${getBackgroundImg(imgUrl)})`, 
            backgroundPosition:"top",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"}}>
        </div>
    </SinglePageCardStyled>
}

export default SinglePageCard;