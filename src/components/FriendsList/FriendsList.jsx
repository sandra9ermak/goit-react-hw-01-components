import PropTypes from 'prop-types';
import s from "./FriendsList.module.css";
import FriendsListItem from './FriendsListItem';

const FriendsList = ({ friends }) => {
    return(
        <ul className={s.list}>
            {friends.map(item =>
                <FriendsListItem avatar={item.avatar} key={item.id} name={item.name} isOnline={ item.isOnline}/>
                )}
    </ul>
)}

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired
}