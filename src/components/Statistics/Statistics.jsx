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
      <StatisticCard key={id} statisticsEl={{label,percentage}}/>
      )}
  </StatisticsList>

</StatisticsSection>)
}

Statistics.propTypes = {
    statistics: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired).isRequired
}