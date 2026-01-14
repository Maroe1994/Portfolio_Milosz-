import styled, { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`
  body {
    margin: 0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;   /* dodane */
    align-items: center;        /* już było */
    height: 100vh;              /* kluczowe! */
  }
`;

export const Allerterror = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 400px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
`;
