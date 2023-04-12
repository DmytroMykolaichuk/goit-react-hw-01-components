import user from 'backend/user.json';
import statistics from 'backend/statistics.json';
import friends from 'backend/friends.json';
import { Container } from './App.styled';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';

export const App = () => {
  return (
    <Container>
      <Profile user={user}/>
      <Statistics statistics={statistics} title='Upload stats'/>
      <Friends friends={friends}/>
    </Container>
  );
};
