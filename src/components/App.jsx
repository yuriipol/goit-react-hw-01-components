import Profile from './Profile/Profile';
import StatsData from './Statistics/Statistics';
import FriendList from './Friends/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';
import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <StatsData title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
