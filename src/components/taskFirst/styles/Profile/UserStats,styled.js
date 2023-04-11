import styled from '@emotion/styled';

export const Stats = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap:15px;
font-size: 24px;
background-color: #b7a6a659
list-style: none;
padding:15px;
margin:0;
`
export const StatsItems = styled.li`
display:flex;
flex-direction: column;
gap:10px;
flex-basis: calc((100%-30px) / 3) ;
`
export const Label = styled.span`
font-size:22px;
text-align: center;`

export const Quantity = styled.span`
font-size:22px;
font-weight:700;
text-align: center;`