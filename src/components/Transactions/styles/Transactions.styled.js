import styled from "@emotion/styled";

export const Table = styled.table`
width:900px;
box-shadow: 0px 0px 10px 1px black;`

export const Thead = styled.thead`
height:48px;
background-color:#1142a88f;
color: white;
font-size:25px;
`
export const TrHead = styled.tr`
text-align: center;`

export const Tr = styled.tr`
height: 40px;
text-transform: capitalize;
:nth-of-type(2n + 1) {
    background-color: white;
}
text-align: center;`

export const Th = styled.th`
width: 300px;
text-align: center;
`
export const Tbody = styled.tbody`
font-size:30px;
background-color:#caced58f;
text-align: center;


`