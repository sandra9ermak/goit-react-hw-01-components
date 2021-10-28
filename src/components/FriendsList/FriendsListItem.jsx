import PropTypes from 'prop-types';
import s from "./FriendsList.module.css";

const FriendsListItem = ({ id, isOnline, avatar, name }) => {
    return (
    <li key={id} className={s.listItem}>
                <span className={isOnline ? s.isOnline : s.isOffline}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt={name} width="48" height="48" />
            <p className={s.name}>{ name}</p>
        </li>
    )
}

export default FriendsListItem;

FriendsListItem.propTypes = {
    id: PropTypes.number,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}