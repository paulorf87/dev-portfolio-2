import styled from "styled-components";

import CustomIcon from "../CustomIcon/CustomIcon";


const FrameworkStyled = styled.div`
    margin: 0 auto;
    text-align: center;
    .framework-icons{
        width: 100%;
        * {
            display: inline-block;
        }
    }
    
`
const Framework = () => {
    return <FrameworkStyled>
        <h4>Frameworks</h4>
        <div className="framework-icons">
            <CustomIcon src={"/images/js.svg"}/>
            <CustomIcon src={"/images/react.svg"}/>
            <CustomIcon src={"/images/graphql.svg"}/>
            <CustomIcon src={"/images/redux.svg"}/>
            <CustomIcon src={"/images/nodejs.svg"}/>
            <CustomIcon src={"/images/mongodb.svg"}/>
            <CustomIcon src={"/images/mysql.svg"}/>
            <CustomIcon src={"/images/python.svg"}/>
        </div>

    </FrameworkStyled>
}

export default Framework;