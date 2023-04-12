import user from 'backend/user.json';
import statistics from 'backend/statistics.json';
import friends from 'backend/friends.json';
import transactions from 'backend/transactions.json'
import { Container } from './App.styled';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { Transactions } from './Transactions/Transactions';

export const App = () => {
  return (
    <Container>
      <Profile user={user}/>
      <Statistics statistics={statistics} title='Upload stats'/>
      <Friends friends={friends}/>
      <Transactions transactions={transactions}/>
    </Container>
  );
};
