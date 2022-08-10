import PropTypes from 'prop-types';
export default function FriendsListItem({ avatar, name, isOnline, id }) {
  return (
    <li className="item" key={id}>
      <span
        className="status"
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img className="avatar-friends" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
