import Profile from "./painting";
import user from './user.json'

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user[0].avatar}
        username={user[0].username}
        tag={user[0].tag}
        location={user[0].location}
        stats={user[0].stats}
      />
    </div>
  );
};
