import Box from './Box/Box';
import user from 'data/user.json';
import Profile from './Profile/Profile';

export const App = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Box>
  );
};
