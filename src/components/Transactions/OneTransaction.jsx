import PropTypes from "prop-types";
import { Tr } from "./styles/Transactions.styled"

export const OneTransaction = ({type,amount,currency})=>{
    return(
        <Tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Tr>
    )
}

OneTransaction.propTypes = {
        type: PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
}