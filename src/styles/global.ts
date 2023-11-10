import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        -webkit-font-smoothing: antialiased
    }

    body, input, textarea, button{
        font-size: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
    }
`