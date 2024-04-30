import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
    margin: 0;
    background-color: #FFFFFF;
  }`

  export const Contact=styled.div`
  width: 225px;
  height:60px;
  position: sticky; /* Ustawienie kontenera jako pozycja stała */
  margin-top:10px;
  margin-left:auto;
  margin-right: 0;
  font-weight: 500;
  color:black;
  font-size: 20px;
  top:30px;
  z-index:2;
  display: flex;
  align-items: flex-end;
  border-bottom:1px solid black;
  `
  export const Textcontainerfirst=styled.div`
  width: 1200px;
  height: 200px;
  display: flex;
  align-items: end;
  margin-top: 60px;
  justify-content: space-between;
  font-size: 170px;
  font-weight: 600;
  color:black;
  margin-left:auto;
  margin-right: 0;
  border-bottom:1px solid black;
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            /* ----------------------------------------------
 * Generated by Animista on 2024-4-28 17:10:24
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-left
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
 `
 export const Iconphoto=styled.img`
 width: 100px;
 height: 100px;
 
 margin-right: 140px;
 margin-bottom: 20px;
 `
 export const Textcontainersecond=styled.div`
 width:850px;
 height:200px;
 border-bottom: 1px solid black;
 font-weight: 600;
 font-size: 170px;
 color:black;
 margin-left:auto;
  margin-right: 0;
  -webkit-animation: bounce-in-right 1.1s both;
	        animation: bounce-in-right 1.1s both;
            /* ----------------------------------------------
 * Generated by Animista on 2024-2-25 22:38:32
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation bounce-in-right
 * ----------------------------------------
 */
@-webkit-keyframes bounce-in-right {
  0% {
    -webkit-transform: translateX(600px);
            transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
            transform: translateX(68px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(32px);
            transform: translateX(32px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-right {
  0% {
    -webkit-transform: translateX(600px);
            transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
            transform: translateX(68px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(32px);
            transform: translateX(32px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}


 `
 export const Textcontainerthird=styled.div`
  width: 1200px;
  height: 200px;
  display: flex;
  align-items: end;
  font-size: 170px;
  font-weight: 300;
  color:black;
  margin-left:auto;
  margin-right: 0;
  border-bottom:1px solid black;
  display: flex;
  align-items: end;
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            /* ----------------------------------------------
 * Generated by Animista on 2024-4-28 17:10:24
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-left
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
 `

 export const Textcontainerfour=styled.div`
 width:850px;
 height:200px;
 border-bottom: 1px solid black;
 font-weight: 300;
 font-size: 150px;
 color:black;
 margin-left:auto;
  margin-right: 0;
 display: flex;
 align-items: end;
 font-style: italic;
 -webkit-animation: bounce-in-right 1.1s both;
	        animation: bounce-in-right 1.1s both;
            /* ----------------------------------------------
 * Generated by Animista on 2024-2-25 22:38:32
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation bounce-in-right
 * ----------------------------------------
 */
@-webkit-keyframes bounce-in-right {
  0% {
    -webkit-transform: translateX(600px);
            transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
            transform: translateX(68px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(32px);
            transform: translateX(32px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-right {
  0% {
    -webkit-transform: translateX(600px);
            transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
            transform: translateX(68px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(32px);
            transform: translateX(32px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
`

export const Firstcontainercontent=styled.div`

width:1300px;
height:800px;
margin-left: auto;
margin-right: auto;
margin-top: 150px;

display:flex;
justify-content:space-around;
margin-bottom: 150px;
`
export const Firstcontainerinside=styled.div`
width:730px;
height: 800px;

z-index: 1;

`
export const Miloszimage=styled.img`
width: 718px;
height: 800px;

:hover{

    scale:1.5;
}
`
export const Firstparagraph=styled.div`
width:150%;
height:110px;
border-bottom: 1px solid black;
font-size: 100px;
font-weight:500;
`
export const Secondparagraph=styled.div`
width:100%;
height:110px;
border-bottom: 1px solid black;
font-size: 100px;
font-weight:500;
`
export const Thirdparagraph=styled.div`
width:130%;
height:110px;
border-bottom: 1px solid black;
font-size: 100px;
font-weight:500;

span{
    color:white;
    border-bottom:none;
}
`
export const Fourparagraph=styled.div`

width:468px;
height:184px ;
font-size: 16px;
font-weight: 500;
margin-top: 100px;
`
export const Firstacapit=styled.div`
margin-left: auto;
margin-right: 0;
width: 1400px;
height:110px;
border-bottom: 1px solid black;
font-size:100px;
font-weight:500;
`

export const Containerphototext=styled.div`
width:1400px;
height:auto;
margin-left:auto;
margin-right: auto;
;
margin-top: 200px;
display:flex;
justify-content: space-between;

`
export const Containertxt=styled.div`
width:270px;
height:285px;

font-size: 16px;
font-weight:600;
margin-top: 0;
`
