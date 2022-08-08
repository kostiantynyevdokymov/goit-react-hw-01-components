import PropTypes from 'prop-types';
import { Friendlist, FriendSection } from './Friendlist.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ props }) => {
  return (
    <FriendSection>
      <Friendlist>
        {props.map(prop => {
          return (
            <FriendListItem
              key={prop.id}
              avatar={prop.avatar}
              name={prop.name}
              isOnline={prop.isOnline}
            />
          );
        })}
      </Friendlist>
    </FriendSection>
  );
};

Friendlist.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
