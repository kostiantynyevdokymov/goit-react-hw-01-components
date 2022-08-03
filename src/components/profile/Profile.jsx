import propTypes from "prop-types";
import style from './Profile.module.css';

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
    return (<div className={style.profile} key = {tag}>
  <div>
    <img
      src={avatar}
      alt={username}
      className={style.avatar}
    />
    <p className={style.name}>{username}</p>
    <p className={style.tag}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>

  <ul className={style.stats}>
    <li>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>)
}

Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.objectOf(propTypes.number)
}