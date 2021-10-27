import PropTypes from 'prop-types';
import s from "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
    return(
    <ul className={s.list}>
        {friends.map(item =>
            <li key={ item.id} className={s.listItem}>
                <span className={item.isOnline ? s.isOnline : s.isOffline}>{item.isOnline}</span>
            <img className={s.avatar} src={item.avatar} alt={item.name} width="48" height="48" />
            <p className={s.name}>{ item.name}</p>
        </li>
        )}
    </ul>
)}

export default FriendsList;

FriendsList.propTypes = {
    friends:
        PropTypes.arrayOf(
            PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
}