import s from "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
    return(
    <ul>
        {friends.map(item =>
        <li className={item.isOnline ? s.isOnline : s.notOnline}>
                <span>{item.isOnline}</span>
            <img className={s.avatar} src={item.avatar} alt="" width="48" />
            <p className={s.name}>{ item.name}</p>
        </li>
        )}
    </ul>
)}

export default FriendsList;