import PropTypes from 'prop-types';
import { FriendCard } from './FriendCard';
import { FriendsList } from './styles/Friends.styled';

export const Friends = props => {
  return (
    <FriendsList>
      {props.friends.map(({ avatar, name, isOnline, id }) => (
        <FriendCard key={id} friend={{ avatar, name, isOnline }} />
      ))}
    </FriendsList>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
