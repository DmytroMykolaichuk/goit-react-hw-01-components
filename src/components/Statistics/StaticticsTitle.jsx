import PropTypes from "prop-types";
import { Title } from "./styles/StatisticsTitle.styled"

export const StatisticTitle =({title})=>{
    return <Title>{title}</Title>
}

StatisticTitle.propTypes = {
    title: PropTypes.string
}