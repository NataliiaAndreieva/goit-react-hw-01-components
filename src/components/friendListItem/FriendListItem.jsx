import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const onlineColor = '#00ff00';
const offlineColor = '#ff0080';

function FriendListItem(props) {
    const {
      avatar = 'https://cdn-icons-png.flaticon.com/512/5195/5195775.png',
      name = 'user',
      isOnline,
    } = props;

return (
    <li className={css.item}>
        {isOnline ? (<span className={css.status}
            style={{ backgroundColor: onlineColor }}></span>) : (
                <span className={css.status}
            style={{ backgroundColor: offlineColor }}></span>
            )
        }
  
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
</li>);
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
};

export { FriendListItem };