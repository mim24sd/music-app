import Header from "../../components/Header";
import MusicList from "../../components/MusicList";
import Sidebar from "../../components/Sidebar";

import "./styles.css";

const Home = () => {
  return (
    <main className="main">
      <Sidebar />
      <Header title="New albums and singles" />
      <MusicList />
    </main>
  );
};

export default Home;
