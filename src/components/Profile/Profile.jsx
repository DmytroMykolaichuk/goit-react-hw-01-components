import PropTypes from "prop-types";
import { ProfileSection } from "./styles/Profile.styled";
import { UserDescription } from "./UserDescription";
import { UserStats } from "./UserStats";

export const Profile = ({user: {avatar, username, tag, location, stats}}) =>{
return (
    <ProfileSection>
        <UserDescription 
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}/>

        <UserStats stats={stats}/>
    </ProfileSection>
)
}

Profile.propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired}
    ).isRequired
}