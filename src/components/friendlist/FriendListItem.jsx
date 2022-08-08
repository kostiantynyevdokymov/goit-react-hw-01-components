import {
  Item,
  Status,
  Avatar,
  Username,
  OfflineIcon,
  OnlineIcon,
} from './FriendListItem.styled';

export function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <Item key={id}>
      <Status>
        {isOnline ? <OnlineIcon></OnlineIcon> : <OfflineIcon></OfflineIcon>}
      </Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Username>{name}</Username>
    </Item>
  );
}
