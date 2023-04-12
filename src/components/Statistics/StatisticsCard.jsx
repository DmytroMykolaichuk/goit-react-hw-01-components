import PropTypes from "prop-types";
import { StaticticsItem,StaticticsLabel,StaticticsPercentage,getRandomHexColor } from "./styles/StatisticsCard.styled"

export const StatisticCard = ({statisticsEl:{label,percentage}})=>{
    // console.log(props)
    return (
    <StaticticsItem style={{backgroundColor: getRandomHexColor()}}>
      <StaticticsLabel>{label}</StaticticsLabel>
      <StaticticsPercentage>{percentage}%</StaticticsPercentage>
    </StaticticsItem>
    )
}

StatisticCard.propTypes = {
  statisticsEl: PropTypes.shape(
    {label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired}
  ).isRequired
}