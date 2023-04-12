import PropTypes from "prop-types";
import { OneTransaction } from "./OneTransaction"
import { Table, Tbody, Th, Thead, TrHead } from "./styles/Transactions.styled"

export const Transactions =({transactions}) =>{
    return(
    <Table>
  <Thead>
    <TrHead>
    <Th>Type</Th>
    <Th>Amount</Th>
    <Th>Currency</Th>
    </TrHead>
  </Thead>

  <Tbody>
    {transactions.map(({id,type,amount,currency}) => 
        <OneTransaction key={id} id={id} type={type} amount={amount} currency={currency}/>
    )}
  </Tbody>
</Table>)
} 

Transactions.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }).isRequired).isRequired
}