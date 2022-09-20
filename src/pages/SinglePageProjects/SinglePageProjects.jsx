import styled from "styled-components";

import SinglePageCard from "./components/SinglePageCard";

import data from "./data/spa-data.json"; 

const SinglePageProjectsStyled = styled.main`
    max-width    : 1440px;
    width: 90%;
    margin: 0 auto;

    .single-page-header {
        padding:32px 0;
    }
    .single-page-grid {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-auto-rows: minmax(400px,50%);
        gap:32px;
    }
    `

const SinglePageProjects = () => {

    // {imgUrl, link, tags}


    return <SinglePageProjectsStyled>
        <header className="single-page-header">
            <h1>Single Page Applications</h1>
        </header>
        <section className="single-page-grid">
            {data.map((spa, index)=>{
                return <SinglePageCard 
                key={index}
                imgUrl={spa.imgUrl}
                link={spa.link}
                tags={spa.tags}
                />
            })}
        </section>
        
    </SinglePageProjectsStyled>
}

export default SinglePageProjects;
