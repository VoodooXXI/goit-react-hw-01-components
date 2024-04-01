import FriendsList from './FriendsList';
import Profile from './Profile';
import Statistics from './Statistics';

export const App = () => {
  return (
    <div class="center">
      <Profile />
      <Statistics />
      <FriendsList />
    </div>
  );
};
