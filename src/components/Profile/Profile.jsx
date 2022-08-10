import PropTypes from 'prop-types';
import style from './Profile.module.css';
export default function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={username} className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.stats__data}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li className={style.stats__data}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li className={style.stats__data}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
