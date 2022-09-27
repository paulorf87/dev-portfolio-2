import styled from "styled-components";

import CustomIcon from "../CustomIcon/CustomIcon";


const FrameworkStyled = styled.div`
    margin: 0 auto;
    padding:16px 8px;
    text-align: center;
    position: relative;

    .framework-icons{
        margin-top: 16px;
        .custom-icon {
            margin-left:8px;
            margin-bottom: 8px;
        }
        * {
            display: inline-block;
        }
    }
    
`
const Framework = () => {
    return <FrameworkStyled>
        <h3>Frameworks &<br/>Technology Stacks</h3>
        <div className="framework-icons">
            <CustomIcon src={"/images/html.svg"}/>
            <CustomIcon src={"/images/css.svg"}/>
            <CustomIcon src={"/images/sass.svg"}/>
            <CustomIcon src={"/images/js.svg"}/>
            <CustomIcon src={"/images/nodejs.svg"}/>
            <CustomIcon src={"/images/react.svg"}/>
            <CustomIcon src={"/images/graphql.svg"}/>
            <CustomIcon src={"/images/aws.svg"}/>
            <CustomIcon src={"/images/redux.svg"}/>
            <CustomIcon src={"/images/mongodb.svg"}/>
            <CustomIcon src={"/images/mysql.svg"}/>
            <CustomIcon src={"/images/postgres.svg"}/>
            <CustomIcon src={"/images/python.svg"}/>
            <CustomIcon src={"/images/docker.svg"}/>
            <CustomIcon src={"/images/git.svg"}/>
            <CustomIcon src={"/images/figma.svg"}/>
            <CustomIcon src={"/images/cplus.svg"}/>
        </div>

    </FrameworkStyled>
}

export default Framework;