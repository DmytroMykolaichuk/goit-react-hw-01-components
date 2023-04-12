import styled from '@emotion/styled';

export const StaticticsItem=styled.li`
display:flex;
flex-direction: column;
flex-basis: calc(100% / 4);
padding-top:20px;
padding-bottom:30px;
`

export function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StaticticsLabel=styled.span`
  text-align:center;
  color:white;
  margin-bottom:20px;
  font-size:24px;
`

export const StaticticsPercentage=styled.span`
  text-align:center;
  color:white;
  font-weight:700;
`