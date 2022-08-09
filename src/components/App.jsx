import Profile from './profile';
import StatsData from './statsList';
import user from './user.json';
import data from './data.json';

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
    </div>
  );
};
