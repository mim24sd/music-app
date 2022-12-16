import Header from "../../components/Header";
import MusicList from "../../components/MusicList";
import Sidebar from "../../components/Sidebar";

import "./styles.css";

const Singles = () => {
  return (
    <main className="main">
      <Sidebar />
      <Header title="Singles" />
      <MusicList />
    </main>
  );
};

export default Singles;
