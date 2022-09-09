import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        transition: background-color .25s ease-in;
    }
    img {
        max-width: 100%;
    }

    body {
        background-color: ${({theme})=>theme.colors.dark};
        font-family: "Outfit", sans-serif;
        font-weight: 300;
    }

    h1,h2,h3,h4 {
        color:${({theme})=>theme.text.primary}; 
    }

    ::-webkit-scrollbar {
        width:10px;
    }
    ::-webkit-scrollbar-track {
        background: #777;
    }
    ::-webkit-scrollbar-thumb{
        background:#ccc;
        border-radius: 4px;
        &:hover{
            background:#eee;
        }
    }

`
export default GlobalStyle;