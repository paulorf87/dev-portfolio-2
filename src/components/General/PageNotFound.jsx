import styled from "styled-components";

const PageNotFoundStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    width: 90%;
    height: 300px;
    margin: 200px auto;
    background-color: #e5e5e5;
    border-radius: 25px;
    h1 {
        color:red;
        text-align: center;
        font-size: 54px;
    }    
`

const PageNotFound = () => {
    return <PageNotFoundStyled>
        <h1>Sorry, Page Not Found!</h1>
    </PageNotFoundStyled>
}

export default PageNotFound; 