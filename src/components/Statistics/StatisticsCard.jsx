import PropTypes from "prop-types";
import { StaticticsItem,StaticticsLabel,StaticticsPercentage,getRandomHexColor } from "./styles/StatisticsCard.styled"

export const StatisticCard = ({label,percentage})=>{
    // console.log(props)
    return (
    <StaticticsItem style={{backgroundColor: getRandomHexColor()}}>
      <StaticticsLabel>{label}</StaticticsLabel>
      <StaticticsPercentage>{percentage}%</StaticticsPercentage>
    </StaticticsItem>
    )
}

StatisticCard.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}