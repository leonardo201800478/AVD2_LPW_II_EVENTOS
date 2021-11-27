//Style global
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --background: #f0f2f5;
  --red: #FA8072;
  --green: #33cc95;
  --blue-light: #6933ff;
  --black-light: #1a202c;
  --text-body: #969cb3;
  --shape: #ffffff
}

 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 html{
   //otimizando para telas de até 4k
   @media(max-width:2160){
     font-size: 93.75%;
   }
   @media(min-width:600px){
     font-size: 90.50%;
   }
 }

 body{ 
   //fonte Roboto
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: var(--background);   
 }

 body, input, textarea, button  {
   font-weight: 500;
 }

 h1, h2, h3, h4, h5, h6, strong {
   font-weight: 700;
 }

 button{ 
   cursor: pointer;
   
 }
 [disable]{
   opacity: 0.7;
   cursor: not-allowed;
 }

 .react-modal-overlay{
   background: rgba(0,0,0,0.3);
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
 }

 .react-modal-content{
   width: 100%;
   max-width: 800px;
   background: var(--background);
   padding: 2rem;
   position: relative;
   border-radius: 0.5rem;
 }

 .react-modal-close{
   position: absolute;
   right: 1.5rem;
   top: 1.5rem;
   border: 0;    
  }

`
export default GlobalStyle