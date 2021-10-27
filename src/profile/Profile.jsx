import PropTypes from 'prop-types';
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {  
    return (
        <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={styles.avatar}
    />
    <p className={styles.name}>{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

    <ul className={styles.stats}>
      {Object.entries(stats).map(([key, value]) =>
        <li key = {key} className={styles.list}>
            <span className={styles.label}>{key}</span>
            <span className={styles.quantity}>{value}</span>
        </li>)}
    </ul>
</div>
    )
}

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
}