import styled from "@emotion/styled"

export const Friend = styled.li`
margin:0;
padding:20px;
display:flex;
align-items: center;
justify-content: start;
gap:15px;
background-color:white;

:hover{
    box-shadow: 0px 0px 10px 4px black;
}`

export const Avatar = styled.img`
display:block;
`
export const Name = styled.p`
margin:0;
padding:0;
font-weight:700;
user-select: none;
`

export const Status = styled.span`
display:block;
width:20px;
height:20px;
border-radius:50%;
margin:0;
padding:0;
`