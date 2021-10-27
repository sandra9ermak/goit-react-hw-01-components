import s from "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
    return(
    <ul>
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