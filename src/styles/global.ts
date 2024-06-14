import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    img {
        display: block;
        max-width: 100%;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        -webkit-font-smoothing: antialiased
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
    }

    &:focus {
        box-shadow: none;
        border-color: #8047F8 !important;
  }
`