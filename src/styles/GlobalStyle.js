import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
  //colors
  
    --color-primary: #ff577f;
    --color-primary-Focus: #ff427f;
    --color-primary-Negative: #59323f;
    
    --color-grey-0: #f8f9fa;
    --color-grey-1: #868e96;
    --color-grey-2: #343b41;
    --color-grey-3: #212529;
    --color-grey-4: #121214;

    --Success: #3fe864;
    --Negative: #e83f5b;

    //Font
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 500;

    color: var(--color-grey-0);

    background-color: var(--color-grey-4)
  }

  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
    }

    .Cem{
      width: 100%;
    }
`;

export default GlobalStyle;
