import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  const renderStats = Object.entries(stats).map(([key, value]) =>
        <li key = {key} className={styles.list}>
            <span className={styles.label}>{key}</span>
            <span className={styles.quantity}>{value}</span>
        </li>);
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
      {renderStats}
    </ul>
</div>
    )
}

export default Profile;