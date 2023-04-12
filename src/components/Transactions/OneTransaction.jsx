import PropTypes from "prop-types";
import { Tr } from "./styles/Transactions.styled"

export const OneTransaction = ({transaction:{type,amount,currency}})=>{
    const resultType = type.charAt(0).toUpperCase() + type.slice(1)
    return(
        <Tr>
      <td>{resultType}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Tr>
    )
}

OneTransaction.propTypes = {
    transaction: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }).isRequired
}