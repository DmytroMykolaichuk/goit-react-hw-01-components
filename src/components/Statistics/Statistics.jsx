import PropTypes from "prop-types";
import { StatisticsSection,StatisticsList } from "./styles/Statistics.styled";
import { StatisticCard } from "./StatisticsCard";
import { StatisticTitle } from "./StaticticsTitle";

export const Statistics = ({title, statistics})=>{
    return (
    <StatisticsSection>
    {title && <StatisticTitle title={title}/>}

  <StatisticsList> 
    {statistics.map(({id,label,percentage}) =>
      <StatisticCard key={id} label={label} percentage={percentage}/>
      )}
  </StatisticsList>

</StatisticsSection>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    statistics: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired).isRequired
}