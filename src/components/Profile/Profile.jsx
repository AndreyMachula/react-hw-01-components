import { PropTypes } from 'prop-types';
import Box from 'components/Box/Box';
import {
  Avatar,
  Name,
  Tag,
  Location,
  ItemStats,
  ItemLabel,
  ItemQuantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      bg="white"
      //   width={[
      //     1, // 100% below the smallest breakpoint
      //     1 / 2, // 50% from the next breakpoint and up
      //     1 / 4, // 25% from the next breakpoint and up
      //   ]}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p="36px"
      >
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        as="ul"
      >
        <ItemStats>
          <ItemLabel>Followers</ItemLabel>
          <ItemQuantity>1000</ItemQuantity>
        </ItemStats>
        <ItemStats>
          <ItemLabel>Views</ItemLabel>
          <ItemQuantity>2000</ItemQuantity>
        </ItemStats>
        <ItemStats>
          <ItemLabel>Likes</ItemLabel>
          <ItemQuantity>3000</ItemQuantity>
        </ItemStats>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
