import PropTypes from 'prop-types';
export default function FriendsListItem({ avatar, name, isOnline, id }) {
  return (
    <li class="item" key={id}>
      <span class="status">{isOnline}</span>
      <img class="avatar-friends" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
