import "./App.css";
import user from "../data/user.json";
import Profile from "../components/Profile/Profile";
import Statistic from "../components/Statistic/Statistic";
import statisticalData from "../data/statistical-data.json";
import FriendsList from "../components/FriendsList/FriendsList";
import friends from "../data/friends.json";
import Transaction from "../components/Transaction/Transaction";
import transactions from "../data/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statisticalData} />
      <Statistic stats={statisticalData} />;
      <FriendsList friends={friends} />
      <Transaction items={transactions} />
    </>
  );
}

export default App;
