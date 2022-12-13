import Header from "../../components/Header";
import MusicList from "../../components/MusicList";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div>
        <Header title="New albums and singles" />
        <MusicList />
      </div>
    </div>
  );
};

export default Home;
