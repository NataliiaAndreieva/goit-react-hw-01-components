import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friendListItem/FriendListItem';
import { css } from 'styled-components';

function FriendList({ friends }) {
    return (
        <ul className={css.friend_list}>
            {friends.map(friend => {
                return <FriendListItem {...friend} key={friend.id} />
            })}
        </ul>
    );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export { FriendList };