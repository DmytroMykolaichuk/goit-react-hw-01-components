import PropTypes from "prop-types";
import { Descripton,DescriptonImg, NameUser,ContactUser } from "./styles/Profile/UserDescription.styled";

export const UserDescription =({avatar,username,tag,location})=>{
    return(
        <Descripton>
      <DescriptonImg
        src={avatar}
        alt={username}
      />
      <NameUser>{username}</NameUser>
      <ContactUser>@{tag}</ContactUser>
      <ContactUser>{location}</ContactUser>
    </Descripton>
    )
}

UserDescription.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}