// for addin global styles: createGlobalStyle
import { createGlobalStyle } from 'styled-components';
import { respondTo } from './RespondTo';
import { COLORS } from './Theme';
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'SofiaPro-SemiBold';
  src: url('./fonts/SofiaPro-SemiBold.eot');
  src: url('./fonts/SofiaPro-SemiBold.woff2') format('woff2'),
       url('./fonts/SofiaPro-SemiBold.eot?#iefix') format('embedded-opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'SofiaProRegular';
  src: url('./fonts/SofiaProRegular.woff') format('woff'),
       url('./fonts/SofiaProRegular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'SofiaPro-Bold';
  src: url('./fonts/SofiaPro-Bold.eot');
  src: url('./fonts/SofiaPro-Bold.woff') format('woff'),
       url('./fonts/SofiaPro-Bold.eot?#iefix') format('embedded-opentype');
  font-weight: normal;
  font-style: normal;
}

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
    font-size: 90%; 
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
 
 html{
  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.primary};
  }

  &::-webkit-scrollbar-track {
    background: ${COLORS.bodyLight};
  }
 }
body{
    background: ${COLORS.bodyLight};
    font-family: 'SofiaProRegular', sans-serif;
    overflow-x: hidden; 
     -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button{
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
    padding: .8rem 2rem;
    border: 5px solid   ${COLORS.bodyLight};
    background: ${COLORS.bodyLight};
    font-family:  'SofiaPro-SemiBold', sans-serif;
    color: white;
    transition: all 0.5s ease;
    border-radius: .5rem;
    
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
     &:hover{
        background: ${COLORS.white};
        color: ${COLORS.primary};
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
}

h1, h2, h3, h4, h5, h6{
    font-family: 'SofiaPro-Bold', sans-serif;       
     color: ${COLORS.white};
}
ul,
li {
  margin: 0;
  padding: 0;
}
li,
button,
label,
input,
p {
    font-family: 'SofiaProRegular', sans-serif;
}
::selection {
  background-color:${COLORS.primary} ;
  color: ${COLORS.white};
}
h1{
    font-size: 6rem;     
}
    h2{
         font-size: 9rem;
         ${respondTo.iPro`
      font-size: 9rem; 
      `} 
      ${respondTo.pMobile`
    font-size: 6rem; 
    `} 
    }
    h3{
        color: ${COLORS.white};
        font-size: 4rem;
    }
    h4{
         font-size: 2.2rem;
       
    }
    a{
        font-size: 1.1rem;
        text-decoration:none;
    }
    span{
         color:#23d997;
    }
    p{
          font-size: 1.8rem;
        line-height: 150%;
    }
    .short {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: ${COLORS.bodyDark};
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid ${COLORS.bodyDark};
      background-color: ${COLORS.secondary};
      display: inline-block;
    }


    .planewrap{
    position: fixed;
    pointer-events: none;
    top: 10%;
    left: 40%;
    ${respondTo.iPro` 
    top: 18%;
      `}
      transform: translate(-50%, -50%);
    /* -webkit-animation: float 6s ease-in-out infinite;
    animation: float 6s ease-in-out infinite; */
    width: 20%;
    height: 40%;
    object-fit:contain;
    z-index: 2;
    text-align: center;
}
@-webkit-keyframes float {
  0% {
    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
  50% {
    -webkit-transform: translatey(-20px);
            transform: translatey(-20px);
  }
  100% {
    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
}
.lottie{
  animation: rotatelottie 2s infinite alternate;
}
@keyframes rotatelottie {
  from{
    transform: rotate(0deg)
  
  }
  to{
    transform: rotate(360deg)
  }
}
.map{
  animation: zoomIn 8s cubic-bezier(0.075, 0.82, 0.165, 1) infinite alternate;

}
@keyframes zoomIn {
  from{
    transform: scale(1.1)
  
  }
  to{
    transform: scale(.8)
  }
}
.job {
    background-color: ${COLORS.bodyDark};
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    display: inline-block;
    border: 2px solid ${COLORS.secondary}
  }
 .big-text, .Typewriter__wrapper{
  font-family: 'Yellowtail', cursive; }
.progress-icon {
  position: fixed;
  bottom: 1rem;
  left: 4%;
   border-radius:100%;
  height: 8%;
  ${respondTo.iPro` 
    left: 10%;
    height: 5%;
       `}
}

@media (max-width: 600px) {
   .progress-icon {
    width: 70px;
    height: 70px;
    left: 10px;
    top: 10px;
  }}
  .resume-block {
    margin-top: 1rem;
    display: flex;
  }
  .resume {
    background-color: ${COLORS.bodyDark};
    padding: 1rem 2rem;
    border-radius: 0.5rem;

    display: inline-block;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-right: 3rem;
&:hover{
  background-color: ${COLORS.bodyLight};

}
    img {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
  }

  .Typewriter__cursor{
    color: ${COLORS.white} !important;
    text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
      1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191,
      1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191,
      1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2);
  }
 
 
.awssld{
  
 --loader-bar-color: #00ff84 !important;

}
.awssld__bullets button {
        background: #232b3a !important;
}

.awssld__bullets .awssld__bullets--active {
  background: #00ff84 !important;
}
.awssld__timer {
--timer-background-color:   #02b45e !important;
}
`;

export default GlobalStyle;
