import PropTypes from 'prop-types';
import { FriendCard } from './FriendCard';
import { FriendsList } from './styles/Friends.styled';

export const Friends = ({friends}) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendCard key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </FriendsList>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
};
