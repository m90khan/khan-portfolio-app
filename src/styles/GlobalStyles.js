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

  font-size: 35.5%;  
  ${respondTo.xs`
      font-size: 42%; 
      `} 
  ${respondTo.sm`
      font-size: 50%; 
      `} 
   ${respondTo.md`
     font-size: 56.2%; 
     `}
  ${respondTo.lg`
       font-size: 70%; 
       `}  
  ${respondTo.xl`
   font-size: 80%; 
   `};
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
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid  ;
    background: transparent;
    font-family: 'Archivo', sans-serif;
    color: white;
    transition: all 0.5s ease;
     &:hover{
        background-color: #23d997;
        color: white;
    }
}

h1, h2, h3, h4, h5, h6{
    font-family: 'Archivo', sans-serif;
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
    h2{
         font-size: 8rem;
    }
    h3{
        color: white;
    }
    h4{
         font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
         color:#23d997;
    }
    p{
          font-size: 1.4rem;
        line-height: 150%;
    }
 
`;

export default GlobalStyle;
