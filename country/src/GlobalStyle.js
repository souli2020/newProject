import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 ;
    background: #212E37;
    font-family: Open-Sans, Helvetica, Sans-Serif;
     color: white;
     font-size: 1rem;
  }
  img{
    width: 100%;
    max-width: 100%
    height:200px;
  }
`;
 
export default GlobalStyle;