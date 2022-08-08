import Profile from "./painting";
import user from './user.json'

export const App = () => {
  return (
    <div>
      {user.map(profile => (
        <Profile
        avatar={profile.avatar}
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        stats={profile.stats}
      />
      ))}
    </div>
  );
};
