import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{ 
      margin: 0;
      padding: 0;
      scroll-behavior: auto;
     
   }
   :focus {
      outline:0;
      box-shadow:none;
   }
   html {
      scroll-behavior: smooth;
}
   body{
        background-color: ${({ theme }) => theme.white};
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fontFamily.roboto};
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;

   }
   input, button, h1, p, span, textarea {
      border: 0;
      box-shadow: none;
   }
`
