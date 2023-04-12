import PropTypes from 'prop-types';
import { Avatar, Friend, Name, Status } from './styles/FriendCard.styled';

export const FriendCard = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Friend>
      <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Friend>
  );
};

FriendCard.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
