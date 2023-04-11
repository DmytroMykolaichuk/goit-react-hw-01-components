import user from 'backend/user.json';
import  { Container } from './taskFirst/styles/App.styled';
import { Profile } from './taskFirst/Profile';

export const App = () => {
  return (
    <Container>
      <Profile user={user}/>
    </Container>
  );
};
