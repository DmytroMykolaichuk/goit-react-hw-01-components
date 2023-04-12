import user from 'backend/user.json';
import statistics from 'backend/statistics.json';
import { Container } from './App.styled';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <Container>
      <Profile user={user}/>
      <Statistics statistics={statistics} title='Upload stats'/>
    </Container>
  );
};
