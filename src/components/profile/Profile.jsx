import PropTypes from "prop-types";

import { Card, Description, Username, Tag, Location, Stats, List, Label, Quantity, Avatar} from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    
    return (<Card key = {tag}>
  <Description>
    <Avatar
      src={avatar}
      alt={username}
    />
    <Username>{username}</Username>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <List>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </List>
    <List>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </List>
    <List>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </List>
  </Stats>
</Card>)
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
}