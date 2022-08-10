import PropTypes from 'prop-types';
import style from './Friends.module.css';
export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <li className={style.item}>
      <span
        className={style.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img
        className={style.avatar__friends}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={style.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
