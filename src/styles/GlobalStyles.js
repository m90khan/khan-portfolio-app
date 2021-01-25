// for addin global styles: createGlobalStyle
import { createGlobalStyle } from 'styled-components';
import { respondTo } from './RespondTo';
import { COLORS } from './Theme';

const GlobalStyle = createGlobalStyle`
  
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  /* cursor: none; */

  font-size: 62.5%;  
  @media only screen and (min-width: 1920px ) {
    font-size: 100%; 
    }
      ${respondTo.xxD`
   font-size: 75%; 
   `};
  ${respondTo.xD`
       font-size: 65%; 
       `}  
   ${respondTo.L`
     font-size: 50.2%; 
     `}
  ${respondTo.iPro`
      font-size: 60%; 
      `} 
     ${respondTo.iPad`
         font-size: 52.5%; 
         `} 
           ${respondTo.pMobile`
         font-size: 50%; 
         `} 
}
 
body{
    background: ${COLORS.bodyLight};
    font-family: "Roboto", sans-serif;
    overflow-x: hidden; 
     -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button{
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 5px solid   ${COLORS.bodyLight};
    background: ${COLORS.bodyLight};
    font-family: 'Archivo', sans-serif;
    color: white;
    transition: all 0.5s ease;
    border-radius: .5rem;
    
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
     &:hover{
        background-color: ${COLORS.primary};
        color: white;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
}

h1, h2, h3, h4, h5, h6{
    font-family: 'Archivo', sans-serif;       
     color: ${COLORS.white};
}
li,
button,
label,
input,
p {
    font-family: "Roboto", sans-serif;
}
::selection {
  background-color:${COLORS.primary} ;
  color: ${COLORS.white};
}
h1{
    font-size: 7rem;     
}
    h2{
         font-size: 11rem;
         ${respondTo.iPro`
      font-size: 9rem; 
      `} 
      ${respondTo.pMobile`
    font-size: 6rem; 
    `} 
    }
    h3{
        color: ${COLORS.white};
        font-size: 6rem;
    }
    h4{
         font-size: 2.2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
         color:#23d997;
    }
    p{
          font-size: 2rem;
        line-height: 150%;
    }
 
`;

export default GlobalStyle;
