import PropTypes from "prop-types";
import { Stats,StatsItems,Label,Quantity } from "./styles/UserStats.styled";

export const UserStats=({stats:{followers, views, likes}})=>{
    return(
        <Stats>
      <StatsItems>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsItems>
      <StatsItems>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsItems>
      <StatsItems>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsItems>
    </Stats>
    )
}

UserStats.propTypes = {
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    }).isRequired
}