import Header from "../../components/Header";
import MusicList from "../../components/MusicList";
import Sidebar from "../../components/Sidebar";

import "./styles.css";

const Albums = () => {
  return (
    <main className="main">
      <Sidebar />
      <Header title="Albums" />
      <MusicList type="album" />
    </main>
  );
};

export default Albums;
