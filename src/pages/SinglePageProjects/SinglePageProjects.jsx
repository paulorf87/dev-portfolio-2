import { useState, useEffect } from "react"; 
import styled from "styled-components";

import SinglePageCard from "./components/SinglePageCard";


const SinglePageProjectsStyled = styled.main`
    max-width    : 1440px;
    width: 90%;
    margin: 0 auto;

    .single-page-header {
        padding:32px 0;
        text-align: center;
        h1 {
            font-size: 48px;
        }
    }
    .single-page-grid {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-auto-rows: minmax(400px,50%);
        gap:32px;
    }
    `

const SinglePageProjects = () => {
    const [projects, setProjects] = useState(null); 
    useEffect(()=>{
        fetch("https://prmf-portfolio.s3.ap-southeast-2.amazonaws.com/spa-projects.json")
        .then(res=>res.text())
        .then(data=>setProjects(JSON.parse(data)))
        .catch(err=>console.error(err))
    },[]); 

    return <SinglePageProjectsStyled>
        <header className="single-page-header">
            <h1>Single Page Applications</h1>
        </header>
        <section className="single-page-grid">
            {projects?.map((spa, index)=>{
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
