import "./App.css";
import user from "./data/user.json";
import Profile from "./profile/Profile";
import Statistic from "./statistic/Statistic";
import statisticalData from "./data/statistical-data.json";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />;
      <Statistic title="Upload stats" stats={statisticalData} />;
      {/* <Statistic stats={statisticalData} />; */}
    </>
  );
}

export default App;
